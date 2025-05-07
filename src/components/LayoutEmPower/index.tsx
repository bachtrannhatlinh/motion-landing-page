import type { EmPowerData } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const LayoutEmPower = () => {
  const [data, setData] = useState<EmPowerData[]>([]);

  useEffect(() => {
    fetch("/src/json/dataEmPower.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 py-28 px-2 lg:px-16 bg-gray-800">
      <div className="col-span-1 p-4 gap-6 flex flex-col">
        <h3 className="text-primary font-semibold text-base uppercase leading-[150%]">Empower</h3>
        <h1 className="font-inter text-5xl font-black leading-[120%]">Streamline Your Business with Motion's Tailored Solutions</h1>
        <p className="font-inter font-normal text-18 leading-[150%]">
          Motion offers fuel cards, fleet management, and financial solutions
          that are specifically designed to meet the needs of your business. Our
          innovative and expert-driven approach helps you enhance operational
          efficiencies and grow profitability.
        </p>
        <Button variant="default" className="w-[50%]">Get Started</Button>
      </div>
      <div className="col-span-2 p-4">
        <div className="grid grid-cols-2 gap-12">
          {data.length > 0 &&
            data.map((item: EmPowerData) => (
              <div key={item.id}>
                <img
                  src={item.logo}
                  alt={item.title}
                  className="object-cover"
                />
                <h3 className="font-bold mt-4 text-white font-inter text-2xl leading-[130%]">{item.title}</h3>
                <p className=" text-white font-normal text-base leading-[150%]">{item.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutEmPower;
