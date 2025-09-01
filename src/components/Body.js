import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = (props) => {
  // destructuring the restaurant data
  // passing dynamic props
  // the ? means optional chaining
  // const { restaurants } = props.resData?.data;
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resList.data.restaurants
  );

  // if my listofrestaurants have two rest data then UI will display only 2 restaurants info - Data layer
  // let restaurantsList = [
  //   {
  //     name: "Dominos",
  //     cuisine: "Pizza, North Indian, Asian",
  //     rating: "4.4",
  //     eta: "38",
  //     id: "1",
  //   },
  //   {
  //     name: "Pizza Hut",
  //     cuisine: "Pizza, Italian",
  //     rating: "4.2",
  //     eta: "30",
  //     id: "2",
  //   },
  //   {
  //     name: "Burger King",
  //     cuisine: "Burger, Fast Food",
  //     rating: "4.0",
  //     eta: "25",
  //     id: "3",
  //   },
  //   {
  //     name: "KFC",
  //     cuisine: "Chicken, Fast Food",
  //     rating: "3.8",
  //     eta: "28",
  //     id: "4",
  //   },
  //   {
  //     name: "Subway",
  //     cuisine: "Sandwich, Fast Food",
  //     rating: "3.0",
  //     eta: "30",
  //     id: "5",
  //   },
  //   {
  //     name: "Taco Bell",
  //     cuisine: "Mexican, Fast Food",
  //     rating: "3.9",
  //     eta: "30",
  //     id: "6",
  //   },
  //   {
  //     name: "Chinchuta Dey",
  //     cuisine: "Biryani, North Indian, Asian",
  //     rating: "4.4",
  //     eta: "38",
  //     id: "7",
  //   },
  //   {
  //     name: "Chinchuta Pakka",
  //     cuisine: "Biryani, North Indian, Asian",
  //     rating: "3.4",
  //     eta: "38",
  //     id: "8",
  //   },
  // ];

  // State Variable - Hooks - useState
  // let [listOfRestaurants, setListOfRestaurants] = useState(restaurantsList);

  return (
    <div className="app-body">
      <div className="filter">
        {/* By clicking on this button, we can filter the restaurant list */}
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked:Top Rated Restaurants");
            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4.1
            );
            console.log("Top Rated Restaurants:", filteredList);
            setListOfRestaurants(filteredList);
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
        {listOfRestaurants.map((restaurant) => (
          // Each of this item should be represented Uniquely using a key prop - whenever we loop any list
          <RestaurantCard
            // Don't use array index as key
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
