import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // we can destructure the props for easier access - more readable
  // console.log("RestaurantCard Rendered");
  const { resData } = props;
  // console.log(resData);
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" alt="res-logo" src={CDN_URL} />
      <h3>{resData.name}</h3>
      <h4>{resData.locality}</h4>
      <h4>{resData.avgRating} ratings</h4>
      <h4>{resData.sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
