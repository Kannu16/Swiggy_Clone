import React, { useContext } from "react";
import RestroList from "./RestroList";
import {Loader }from "./Shimmer";
import RestroContext from "../Utils/RestroContext";
import MainBodySlider from "./MainBodySlider";


const MainBody = () => {

    const restroList = useContext(RestroContext)
    const restrolist = restroList.list
    const setRestrolist = restroList.setList
  
  
       //Filtering RestroData usiging delivery time
       const sortedRestro = () => {
        const sorted = [...restrolist].sort((a, b) => {
          const nameA = a.info.sla.deliveryTime      ;
          const nameB = b.info.sla.deliveryTime;
          return nameA - nameB;
        });
        setRestrolist(sorted)
      }

    //Filtering RestroData usiging delivery time
     const sortedRestroByRatineg = () => {
      const sortedRating = [...restrolist].sort((a, b) => {
        const nameA = Number(a.info.avgRating);
        const nameB = Number(b.info.avgRating);
        return nameA - nameB;
      });
      setRestrolist(sortedRating)
    }

        //Filtering RestroData usiging Price
        const sortedRestroByPrice = () => {
          const sortedPrice = [...restrolist].sort((a, b) => {
            const nameA = a.info.costForTwo;
            const nameB = b.info.costForTwo;
            return nameA - nameB;
          });
          setRestrolist(sortedPrice)
        }

         //Filtering RestroData usiging Price
         const sortedRestroByPriceHigh = () => {
          const sortedPriceHigh = [...restrolist].sort((a, b) => {
            const nameA = a.info.costForTwo;
            const nameB = b.info.costForTwo;
            return nameA - nameB;
          });
          setRestrolist(sortedPriceHigh.reverse())
        }

  return (
    <>
      <div className="mainbody-container" style={{marginTop:"5%"}}>
      <MainBodySlider />
      <div className="container my-5">
       <div className="restronavbar d-flex justify-content-between my-5">
           <div className="restro-left">
            <h2><b>{restrolist.length + " "} restaurants</b></h2>
           </div>
           <div className="restro-right d-flex">
           <a className="nav-link ms-5 fw-medium Active" href="#">Relevance</a>
           <a className="nav-link ms-5 fw-medium" onClick={()=> sortedRestro()} href="#MainBody">Delivery Time</a>
           <a className="nav-link ms-5 fw-medium" onClick={() => sortedRestroByRatineg()} href="#">Rating</a>
           <a className="nav-link ms-5 fw-medium" onClick={()=> sortedRestroByPrice()} href="#">Cost: Low To High</a>
           <a className="nav-link ms-5 fw-medium" onClick={()=> sortedRestroByPriceHigh()} href="#">Cost: High To Low</a>
           <a className="nav-link ms-5 fw-semibold" href="#">Filters </a>
           </div>
       </div> 
       <div className="d-flex flex-wrap justify-content-between my-3">
      {restrolist.length === 0 && <Loader />}
       {
        restrolist.map((items)=>{
            return(
                <RestroList key={items?.data?.id} restrodata={items}/>
            )
        })
       }
       </div>
      </div>
    </div>
    </>
  );
};

export default MainBody;
