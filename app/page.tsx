import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="Dhanvin" />

      <h2>Featured Products</h2>
      <ProductCard title="Wireless Headphones" price={99} inStock={true} />
      <ProductCard title="Gaming Mouse" price={49} inStock={false} />
    </main>
  );
}