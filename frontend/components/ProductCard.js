import { ProductStyle } from '@/styles/ProductStyle';
import Link from 'next/link';

export function ProductCard({ productData }) {
  return (
    <Link href={`/product/${productData.slug}`}>
      <ProductStyle>
        <img
          src={productData.image.data.attributes.formats.small.url}
          alt='product photo'
        />
        <h1>{productData.title}</h1>
        <h2>{productData.price}</h2>
      </ProductStyle>
    </Link>
  );
}
