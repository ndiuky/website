import { Header, Main } from "@/app/_widgets";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Main />
    </div>
  );
}
