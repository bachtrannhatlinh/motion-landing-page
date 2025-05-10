import { useEffect, useState } from "react"
import Container from "../Container/index"
import type { ContainerData } from "@/types";

const Layout = () => {
  const [data, setData] = useState<ContainerData[]>([]);
  
  useEffect(() => {
    fetch('/src/json/dataContainer.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <>
      {
        data.length > 0 && data.map((item: ContainerData) => (
          <Container
            key={item.id}
            title={item.title}
            sub={item.sub}
            content={item.content}
            buttonText={item.buttonText}
          />
        ))
      }
    </>
  )
}

export default Layout