import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // destructuring the restaurant data
  // passing dynamic props
  // the ? means optional chaining
  // const { restaurants } = props.resData?.data;
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3277491&lng=78.55259869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // console.log(
      //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      // );
      // optional chaining - Healthy to do - Read about it online
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // this is how we solve the bug
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // Fallback to mock data if API fails
      setListOfRestaurants(resList.data.restaurants);
    }
  };

  // show loading screen if the listofRestaurants is empty - conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div className="filter">
        {/* search functionality - Filter the restaurant cards and update the UI*/}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            onClick={() => {
              console.log("Search for:", searchRestaurant);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        {/* By clicking on this button, we can filter the restaurant list */}
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked:Top Rated Restaurants");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            console.log("Top Rated Restaurants:", filteredList);
            setFilteredRestaurants(filteredList);
          }}
          // onMouseOver={() => {
          //   console.log("Mouse Over:Top Rated Restaurants");
          // }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* we loop through the restaurant data and create a RestaurantCard for each one */}
        {/* Writing re-usable components */}
        {filteredRestaurants.map((restaurant) => (
          // Each of this item should be represented Uniquely using a key prop - whenever we loop any list
          <RestaurantCard
            // Don't use array index as key
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
