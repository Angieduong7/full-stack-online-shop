import { createContext, useState } from 'react';

const ShopContext = createContext();

export function StateContext({ children }) {
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((prevQty) => prevQty + 1);

  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty < 2) return 1;
      return prevQty - 1;
    });
  };

  return (
    <ShopContext.Provider value={{ qty, increaseQty, decreaseQty }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;
