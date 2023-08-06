export const filterData = (restroList, inputText, setRestroList) => {
   let filteredData = restroList.filter((data) => data?.data?.name?.toLowerCase().includes(inputText.toLowerCase()));
   setRestroList(filteredData)
   console.log(filteredData)
}

export const fetchData = async (setList, setallList) => {
   const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING";
   const response = await fetch(URL);
   const responeResults = await response?.json();
   setList(responeResults?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setallList(responeResults?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(responeResults)
   console.log(responeResults?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 };

