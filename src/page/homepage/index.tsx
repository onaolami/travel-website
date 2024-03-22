import Destination from "../../components/destination";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Logos from "../../components/logos";
import Services from "../../components/services";
import Subscribe from "../../components/subscribe";
import Testimonials from "../../components/testimonials";
import Trip from "../../components/trip";

const HomePage = () => {
  return (
    <div>
      <Header />
      <img className="absolute top-0 right-0 z-[-1]" src="/Images/decore.png"  alt=""/>
      <Hero />

      <Services />
      <Destination />
      <Trip />
      <Testimonials />
      <Logos />
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default HomePage;
