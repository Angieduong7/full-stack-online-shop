import { GET_PRODUCT_DETAIL } from '@/lib/query';
import { useQuery } from 'urql';
import { useRouter } from 'next/router';
import ShopContext from '@/lib/context';
import { useContext } from 'react';

export default function GetProductDetail() {
  const { qty, increaseQty, decreaseQty } = useContext(ShopContext);
  // Fetch slug
  const router = useRouter();
  const slug = router.query.slug;
  // Fetch product data
  const [results] = useQuery({
    query: GET_PRODUCT_DETAIL,
    variables: { slug: slug },
  });

  const { data, error, fetching } = results;
  if (fetching) {
    return <p>data is loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const product = data.products.data[0].attributes;

  return (
    <div>
      <img
        src={product.image.data.attributes.formats.small.url}
        alt='product photo'
      />
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
      <div style={{ display: 'flex' }}>
        <button onClick={() => decreaseQty(qty)}>-</button>
        <h3>{qty}</h3>
        <button onClick={() => increaseQty(qty)}>+</button>
      </div>
    </div>
  );
}
