import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/HomeComponents/Header";
import Layout from "@/components/Layout";
import LayoutEmPower from "@/components/LayoutEmPower";
import NavBar from "@/components/NavBar";
import Partner from "@/components/Partner";
import Testimonial from "@/components/TestimonialLayout";
import avatarJohnDavis from "@/assets/images/avatar_john_davis.png";

export const Home = () => {
    const testimonial = {
    title:
      `“Using eCapital's fuel cards at Petro-Canada, Ultramar, and Esso has made fueling up our fleet so much easier. It’s convenient, and the savings are a big plus for our business.”`,
    avatar: avatarJohnDavis,
    name: "John Davis",
    position: "CFO at Thompson Freight Services",
  };

  return (
    <div>
      <NavBar />
      <Header />
      <Layout />
      <Partner />
      <LayoutEmPower />
         <Testimonial
        title={testimonial.title}
        avatar={testimonial.avatar}
        name={testimonial.name}
        position={testimonial.position}
      />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};
