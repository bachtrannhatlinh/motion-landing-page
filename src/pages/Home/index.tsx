import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import LayoutEmPower from "@/components/LayoutEmPower";
import NavBar from "@/components/NavBar";
import Partner from "@/components/Partner";
import Testimonial from "@/components/Testimonial";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Layout />
      <Partner />
      <LayoutEmPower />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};
