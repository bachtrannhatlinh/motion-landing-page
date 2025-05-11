import { Button } from "@/components/ui/button";
import Layout from "../Layout";

const Header = () => {
  return (
    <Layout className="py-[144px] grid grid-cols-1">
      <div className="flex flex-col items-center align-middle font-montserrat gap-10">
        <h1 className="text-32 lg:text-56 font-semibold leading-[120%]">
          Join the Largest Fuel Provider Network
        </h1>
        <p className="text-18 font-medium leading-[150%]">
          Experience unparalleled access to the largest fuel provider network
          across North America. Fuel your journey with confidence and
          convenience, ensuring you never run out of fuel.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="default" className="font-bold">
            Get Started
          </Button>
          <Button variant="outline" className="font-bold">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="h-[738px] rounded-[32px] bg-gray_ccc mt-20" />
    </Layout>
  );
};

export default Header;
