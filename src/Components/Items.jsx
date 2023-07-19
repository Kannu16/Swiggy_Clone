import React, { useContext } from "react";
import { imgUrl } from "../Utils/Links";
import { CartContext } from "./Cart";

const Items = ({ items }) => {

  const {imageId, name, id, inStock, price} = items;
  const {increment, decrement, totalItem  } = useContext(CartContext);
  console.log(totalItem)


  return (
    <>
      <div>
        <div className="cart-menu-information d-flex justify-content-center align-items-center mb-2">
          <div className="menu-image" style={{ width: "25%" }}>
            {" "}
            <img
              className="_2tuBw _12_oN"
              height="50"
              width="50"
              alt=""
              src={imgUrl + imageId}
            />
          </div>
          <div className="menu-name text-center" style={{ width: "25%" }}>
            {" "}
            {name}{" "}
          </div>
          <div
            className="menu-quantity text-center d-flex justify-content-center align-items-center"
            style={{ width: "25%" }}
          >
            {" "}
            <span
              onClick={() => decrement(id)}
              className="fs-1"
              style={{ cursor: "pointer" }}
            >
              -


            </span>{" "}
            <input
              className="w-50 fs-6"
              type="number"
              placeholder={inStock}
              disabled
            />{" "}
            <span
               onClick={()=> increment(id)}
              className="fs-4"
              style={{ cursor: "pointer" }}
            >
              +
            </span>{" "}
          </div>
          <div className="menu-price text-center" style={{ width: "25%" }}>
            {" "}
            {price.toString().slice(0, -2)}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
