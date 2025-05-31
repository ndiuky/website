import { Header, Main, Footer } from "@/app/_widgets";

const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
