import { useEffect, useState } from "react";
import IconXMark from "../icons/IconXMark"
import type { FAQData } from "@/types";
import { Button } from "../ui/button";

const FAQ = () => {
  const [data, setData] = useState<FAQData[]>([]);
  
  useEffect(() => {
    fetch('/src/json/dataFAQ.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="flex flex-col gap-20 py-[60px] px-2 lg:px-16 bg-gray-800 text-white rounded-bl-[150px] rounded-br-[150px] font-montserrat align-middle justify-center items-center ">
      <h1 className="font-bold text-2xl lg:text-5xl leading-[120%]">Frequently Asked Questions</h1>
      <div className="w-[425px] lg:w-[768px]">
        {data.map((item) => (
          <div key={item.id} className="border-2 rounded-xl border-gray-500 flex flex-row justify-between py-5 px-6 w-full mb-4">
            <p>{item.question}</p>
            <p>
              <IconXMark/>
            </p>
          </div>
        ))}
      </div>
      <div className="gap-4 flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-40 leading-[130%]">Still have a questions?</h2>
        <p className="font-medium text-18 leading-[150%]">Please send as a message and our team will get to you as soon as possible </p>
        <Button variant="default" className="font-bold font-19 leading-[150%]">Connect with us</Button>
      </div>
    </div>
  )
}

export default FAQ