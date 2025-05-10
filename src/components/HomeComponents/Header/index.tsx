import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 bg-gray-800 text-white px-2 lg:px-16 py-28">
      <div className="flex flex-col gap-6 justify-center font-montserrat">
        <h1 className="text-32 lg:text-56 font-semibold leading-[120%]">
          Medium length hero headline goes here
        </h1>
        <p className="text-18 font-medium leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex flex-row gap-2">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
      <div className="h-[640px] rounded-[24px] bg-gray_ccc" />
    </div>
  );
};

export default Header;
