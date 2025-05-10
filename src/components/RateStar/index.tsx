import star from "../../assets/images/star.png";

interface RateStarProps {
  numberOfStars: number;
  rateStar?: number;
}

const RateStar = ({ numberOfStars, rateStar }: RateStarProps) => {
  const floatNumber = rateStar ? `${rateStar}.0` : "";

  let arrRateStar = [];
  for (let i = 0; i < numberOfStars; i++) {
    arrRateStar.push(
      <img
        src={star}
        alt="star"
        key={i}
        className="w-5 h-5 flex flex-col mr-1"
      />
    );
  }
  return (
    <div className=" flex flex-row">
      {arrRateStar} {floatNumber}
    </div>
  );
};

export default RateStar;
