import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = React.useState(false);
  // console.log(data);
  const { title, itemCards } = data;
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
          {/* for windows icons - do Windows + .(period) */}
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
