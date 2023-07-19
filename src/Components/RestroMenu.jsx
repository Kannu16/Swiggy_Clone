import React, { useState, useEffect } from "react";
import { imgUrl } from "../Utils/Links";
import { useParams } from "react-router-dom";
import { Loading} from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const RestroMenu = () => {
  
  const [restroMenu, setRestroMenu] = useState(null);

  useEffect(() => {
    restroMenuResult();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const restroMenuResult = async () => {
    const restroMenuURL = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await restroMenuURL.json();
    setRestroMenu(json);
  };

  if (restroMenu === null || undefined) return <Loading />;

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    restroMenu?.data?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    restroMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <>
      <div
        className="container"
        style={{ width: "60%", margin: "auto", marginTop: "10%" }}
      >
        <div className="restro-info d-flex justify-content-between">
          <div className="restro-info-left mb-3">
            <p>{name}</p>
            <span>{cuisines?.join(",")}</span>
            <br />
            <span>{areaName}</span>
          </div>
          <div className="restro-info-right">
            <p className="text-center">{avgRating}</p>
            <span className="text-center">{totalRatingsString}</span>
          </div>
        </div>
        {itemCards.map((restroResult) => {
          const { name, price, inStock, imageId, id } =
            restroResult?.card?.info || {};
          return (
            <div
              className="restromenulist d-flex justify-content-between my-5"
              key={id}
            >
              <div className="restromenulist-left">
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-5667b229acf7393e62465dcd05c237f4.webp"
                  width="18"
                  height="18"
                  alt="greenDot"
                />
                <h3>
                  {name} <br />
                  <span className="fs-6">{price.toString().slice(0, -2)}</span>{" "}
                </h3>
                <p>Serves {inStock}</p>
              </div>
              <div className="restromenulist-right d-flex flex-column position-relative mb-3">
                <img
                  alt="Lemon Rice"
                  className="styles_itemImage__3CsDL"
                  loading="lazy"
                  width="140"
                  src={imgUrl + imageId}
                />
                <button
                  className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x" 
                  id="Add-button"
                  onClick={() => addFoodItem(restroResult.card.info)}
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestroMenu;
