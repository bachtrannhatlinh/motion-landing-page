import type { PartnerData } from "@/types";
import { useEffect, useState } from "react";
import logoWebflow from "@/assets/images/logo-webflow.png";

const Partner = () => {
  const [data, setData] = useState<PartnerData[]>([]);
  
  useEffect(() => {
    fetch('/src/json/dataPartner.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="bg-gray-800 gap-6 py-20 px-2 lg:px-16 align-middle flex flex-col justify-center items-center">
      <h1 className="text-32 font-bold leading-[150%] font-montserrat">Partners who place their trust in us</h1>
      <div className="grid grid-cols-3 lg:flex lg:flex-row gap-6">
        {data.length > 0 && data.map((item: PartnerData) => (
          <div key={item.id} className="flex flex-col gap-6 justify-center">
            <img 
              src={item.logo} 
              alt={`Partner logo ${item.id}`} 
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = logoWebflow; // Fallback to imported logo
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partner