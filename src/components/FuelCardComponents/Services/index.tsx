import Layout from "../Layout";

function contentServices(title: string, description: string) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="h-[160px] w-full lg:w-[304px] rounded-[14px] bg-gray_ccc" />
      <h3 className="font-bold text-6 leading-[140%]">{title}</h3>
      <p className="font-medium text-16 leading-[150%] text-center">
        {description}
      </p>
    </div>
  );
}

const Services = () => {
  return (
    <Layout className="grid grid-cols-1 items-center justify-center">
      <h1 className="font-bold text-40 leading-[120%] flex flex-row items-center justify-center">
        Unlock the Power of North America's Largest Fuel Provider Network
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {contentServices(
          "Key Features of Our Fuel Card",
          "Access to thousands of fuel stations nationwide for your convenience."
        )}
        {contentServices(
          "Enhanced Security Features",
          "Fraud detection technology to protect your transactions at all times."
        )}
        {contentServices(
          "24/7 Customer Support",
          "Our dedicated team is here to assist you, day or night."
        )}
        {contentServices(
          "No Hidden Fees",
          "Enjoy a straightforward pricing model with no monthly or annual fees."
        )}
      </div>
    </Layout>
  );
};

export default Services;
