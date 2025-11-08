import Partners from "../components/partners/Partners";
export default function Page() {
  return (
    <div className="w-screen h-screen p-3">
      <header className="flex items-center justify-between mb-3.5">
        <div>left</div>
        <div>right</div>
      </header>
      <Partners />
    </div>
  );
}
