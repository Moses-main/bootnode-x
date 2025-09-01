import { Hero } from "../components/Home/Hero";
import { Features } from "../components/Features/Features";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { CTA } from "../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Home;
