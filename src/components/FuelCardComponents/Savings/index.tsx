import Layout from "../Layout";
import insurance from "@/assets/images/insurance.png";
import support from "@/assets/images/support.png";
import fraudDetection from "@/assets/images/fraud-detection.png";

const Savings = () => {
  return (
    <Layout>
      <div className="h-[640px] rounded-[24px] bg-gray_ccc" />
      <div className="gap-6 flex flex-col justify-center items-start">
        <h3 className="font-bold text-4 leading-[150%] text-green_24D6DC">SAVINGS</h3>
        <h2 className="font-bold text-5xl leading-[120%]">Unlock Unmatched Benefits with Our Fuel Services</h2>
        <p className="font-medium text-18 leading-[150%]">
          Experience seamless fuel management with our extensive network. Enjoy
          peace of mind knowing you're backed by robust support and security.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center">
            <img src={insurance} alt="insurance" />
            <p>Maximize your savings with no hidden fees.</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={support} alt="support" />
            <p>24/7 support ensures you’re never alone.</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={fraudDetection} alt="fraudDetection" />
            <p>Advanced fraud detection protects your business.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Savings;
