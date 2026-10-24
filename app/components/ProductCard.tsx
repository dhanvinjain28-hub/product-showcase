import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>
        Price: <PriceTag amount={price} />
      </p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}