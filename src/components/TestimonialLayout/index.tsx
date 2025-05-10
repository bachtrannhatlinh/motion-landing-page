import RateStar from "../RateStar";

interface TestimonialProps {
  title: string;
  avatar: string;
  name: string;
  position: string;
}

const Testimonial = (props: TestimonialProps) => {
  const { title, avatar, name, position } = props;

  return (
    <div className="flex flex-col gap-8 py-[60px] px-2 lg:px-16 bg-gray-800 text-white justify-center items-center align-middle font-montserrat">
      <RateStar numberOfStars={5} />
      <h3 className="font-bold text-2xl leading-[140%] w-[65%]">{title}</h3>
      <div className="flex flex-row gap-5">
        <img src={avatar} alt="avatar" />
        <div>
          <h4 className="text-base font-bold leading-[150%]">{name}</h4>
          <h5 className="text-base font-medium leading-[150%]">{position}</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
