import Header from "../../components/header";
import Hero from "../../components/hero";
import Services from "../../components/services";

const HomePage = () => {
  return (
    <div>
      <Header />
      <img className="absolute top-0 right-0 z-[-1]" src="/Images/decore.png" />
      <Hero />
      <Services />
    </div>
  );
};

export default HomePage;
