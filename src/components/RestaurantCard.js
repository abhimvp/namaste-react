import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // we can destructure the props for easier access - more readable
  const { name, cuisine, rating, eta } = props.resData;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" alt="res-logo" src={CDN_URL} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{eta} min ETA</h4>
    </div>
  );
};

export default RestaurantCard;
