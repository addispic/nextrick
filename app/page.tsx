import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <h3>Welcome to Nextrick</h3>
      <Link href={"/products"}>Products</Link>
    </div>
  );
}
