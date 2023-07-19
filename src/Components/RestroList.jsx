import React, { useEffect, useState } from "react";
import { imgUrl } from "../Utils/Links";
import { Link } from "react-router-dom";

const RestroList = (props) => {

const [avgrating, setAvgRating] = useState("")

const { name, cloudinaryImageId, cuisines,costForTwoString, slaString, avgRating, id } = props?.restrodata?.data

 useEffect(()=>{
    if(avgRating > 3.9){
        setAvgRating("#48c479")
      }
      else{
        setAvgRating("#db7c38")
      }
    
 }, [avgRating])

  return (
    <>
    <Link className="nav-link" to={"restro/"+ id}>
      <div className="restroList my-3">
        <div className="card restro p-4" style={{width:"18rem"}}>
        <img alt="Biryani Pot" src={imgUrl + cloudinaryImageId} />
          <div className="card-body">
            <div>
            <p className="card-text mt-3">
               <span className="fw-semibold">{name}</span> <br /> 
               <span className="card-text"> {cuisines.join(",")} </span>
            </p>
            </div>
           <div>
           <p className="card-text mt-4 d-flex justify-content-between">
              <span className="rating text-center" style={{backgroundColor: avgrating}}> <div className="d-flex"></div> {avgRating } </span>
              <span className="time"> {slaString} </span>
              <span className="money" > {costForTwoString} </span>
            </p>
           </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default RestroList;
