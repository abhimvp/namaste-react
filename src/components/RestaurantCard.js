import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, locality, sla, costForTwo, cloudinaryImageId } =
    resData;
  return (
    <div className="m-4 p-4 w-[350px] bg-gray-100 text-black rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg w-full h-40"
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

// Higher Order component
// input - RestaurantCard
// output - RestaurantCard with promoted label
// these are pure functions - they do not change any behavior of the original component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // Returning a new component
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
        {/* ... is a spread operator - it will pass all props to the RestaurantCard component */}
      </div>
    );
  };
};

export default RestaurantCard;
