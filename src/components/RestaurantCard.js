import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, sla, costForTwo, cloudinaryImageId } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 text-black rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
