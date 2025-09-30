import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // we can destructure the props for easier access - more readable
  // console.log("RestaurantCard Rendered");
  const { resData } = props;
  const { name, avgRating, locality, sla, costForTwo, cloudinaryImageId } =
    resData;
  // console.log(resData);
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
