import Layout from "../Layout";
import truck from "@/assets/images/truck.png";

const Discover = () => {
  return (
    <Layout>
      <div className="gap-6 flex flex-col justify-center items-start">
        <img src={truck} alt="truck" className="h-auto object-cover" />
        <h1 className="font-bold text-5xl leading-[120%]">
          Discover Our Comprehensive Fuel Solutions
        </h1>
        <p className="font-medium text-18 leading-[150%]">
          We offer a robust network of fuel services designed to meet your
          needs. Experience seamless transactions and unparalleled support with
          our innovative solutions.
        </p>
      </div>
      <div className="h-[640px] rounded-[24px] bg-gray_ccc" />
    </Layout>
  );
};

export default Discover;
