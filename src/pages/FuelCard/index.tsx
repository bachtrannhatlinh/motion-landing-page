import Discover from "@/components/FuelCardComponents/Discover";
import Header from "@/components/FuelCardComponents/Header";
import NavBar from "@/components/NavBar";
import Services from "@/components/FuelCardComponents/Services";
import Savings from "@/components/FuelCardComponents/Savings";
import Testimonial from "@/components/TestimonialLayout";
import avatarAna from "@/assets/images/avatar_ana.png";
import Contact from "@/components/FuelCardComponents/Contact";
import Footer from "@/components/Footer";

const FuelCard = () => {
  const testimonial = {
    title:
      '"Using this fuel card has streamlined our operations and saved us a significant amount on fuel costs! Highly recommend it to any business looking to optimize their expenses."',
    avatar: avatarAna,
    name: "Ana Davis",
    position: "CFO at Ana Freight Services",
  };

  return (
    <div>
      <NavBar />
      <Header />
      <Discover />
      <Services />
      <Savings />
      <Testimonial
        title={testimonial.title}
        avatar={testimonial.avatar}
        name={testimonial.name}
        position={testimonial.position}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default FuelCard;
