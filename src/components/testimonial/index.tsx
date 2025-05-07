import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/star.png";

const Testimonial = () => {
  const rateStar = () => {
    let arrRateStar = [];
    for (let i = 0; i < 5; i++) {
      arrRateStar.push(
        <img src={star} alt="star" key={i} className="w-5 h-5 flex flex-col mr-1" />
      );
    }
    return arrRateStar;
  };

  return (
    <div className="flex flex-col gap-8 py-[60px] px-2 lg:px-16 bg-gray-800 text-white justify-center items-center align-middle font-montserrat">
      <div className=" flex flex-row">{rateStar()}</div>
      <h3 className="font-bold text-2xl leading-[140%] w-[65%]">
        “Using eCapital's fuel cards at Petro-Canada, Ultramar, and Esso has
        made fueling up our fleet so much easier. It’s convenient, and the
        savings are a big plus for our business.”
      </h3>
      <div className="flex flex-row gap-5">
        <img src={avatar} alt="avatar" />
        <div>
          <h4 className="text-base font-bold leading-[150%]">John Davis</h4>
          <h5 className="text-base font-medium leading-[150%]">CFO at Thompson Freight Services</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
