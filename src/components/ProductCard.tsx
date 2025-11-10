import type { Product } from "../context/CartContext";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="font-bold mt-2">{product.title}</h2>
      <p className="mt-1">${product.price}</p>
      <button
        onClick={() => onAdd(product)}
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        Adicionar
      </button>
    </div>
  );
}
