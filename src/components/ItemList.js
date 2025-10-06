import React from "react";
import { CDN_URL, DUMMY_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 justify-end flex">
              <img
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : DUMMY_IMAGE_URL
                }
                alt={item.card.info.name}
                className="w-full"
              />
              <div className="absolute">
                <button className="p-2 mx-16 bg-white text-green-400 shadow-lg rounded-2xl">
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
