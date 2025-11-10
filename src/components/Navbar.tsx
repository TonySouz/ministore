import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const context = useContext(CartContext);
  if (!context) return null;
  const { cart } = context;

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-800 text-white">
      <h1 className="font-bold text-xl">MiniStore</h1>
      <div>Carrinho: {cart.length}</div>
    </nav>
  );
}
