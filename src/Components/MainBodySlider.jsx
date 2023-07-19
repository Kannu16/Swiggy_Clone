import React from "react";
import ImageSliderdata from "../Utils/ImageSliderData.json";
const MainBodySlider = () => {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = 320;
    box.scrollLeft = box.scrollLeft - width;
  };

  const btnpressnext = () => {
   let width = 320;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <>
      <div className="product-list">
        <div className="product-carousel container py-5">
          <button className="pre-btn z-3" onClick={() => btnpressprev()}>
            <p className="fs-3" style={{ borderRadius: "50%" }}>
              &#8592;
            </p>
          </button>
          <button className="next-btn z-3"  onClick={() => btnpressnext()}>
            <p className="fs-3" style={{ borderRadius: "50%" }}>
              {" "}
              &#8594;
            </p>
          </button>
          <div className="product-container d-flex">
            {ImageSliderdata.items.map((items) => {
              return (
                <div className="carousalImg-1 me-5" key={items.id}>
                  <a href="#">
                    <img width="260" height="260" src={items.imageUrl} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBodySlider;
