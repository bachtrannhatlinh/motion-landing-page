import { Button } from "../ui/button";

interface ContainerProps {
  id?: string;
  title: string;
  sub: string;
  content: string;
  buttonText: string;
}

const Container = (props: ContainerProps) => {
  const { title, sub, content, buttonText } = props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 bg-gray-800 text-white px-2 lg:px-16 py-[60px]">
      <div className="h-[640px] rounded-[24px] bg-gray-300"></div>
      <div className="flex flex-col gap-6 justify-center">
        <h2 className="text-green_24D6DC font-bold text-base leading-[150%]">
          {sub}
        </h2>
        <h1 className="text-5xl font-bold leading-[120%] font-montserrat">
          {title}
        </h1>
        <p className="text-18 font-medium font-montserrat leading-[150%]">
          {content}
        </p>
        <div className="flex">
          <Button variant="default">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Container;
