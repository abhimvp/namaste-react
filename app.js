import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // we can destructure the props for easier access - more readable
  const { name, cuisine, rating, eta } = props.resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt="res-logo"
        src="https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + {ImageLocation} +"/"+{ActualImageId} + ".jpg"}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{eta} min ETA</h4>
    </div>
  );
};

// resObj has different restaurant data
const resObj={
  data:{
    restaurants:[
      {
        name:"LNS Foods",
        cuisine:"Biryani, North Indian, Asian",
        rating:"4.4",
        eta:"38",
        id:"1"
      },
      {
        name:"ABC Restaurant",
        cuisine:"Italian, Continental",
        rating:"4.0",
        eta:"25",
        id:"2"
      },
      {
        name:"XYZ Bistro",
        cuisine:"French, Continental",
        rating:"4.5",
        eta:"30",
        id:"3"
      },
      {
        name:"PQR Diner",
        cuisine:"Mexican, Fast Food",
        rating:"4.2",
        eta:"20",
        id:"4"
      }
    ]
  }
};

const Body = (props) => {
  // destructuring the restaurant data
  // passing dynamic props
  // the ? means optional chaining
  const { restaurants } = props.resData?.data;
  return (
    <div className="app-body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* we loop through the restaurant data and create a RestaurantCard for each one */}
        {/* Writing re-usable components */}
        {restaurants.map((restaurant) => (
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body resData={resObj} />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
