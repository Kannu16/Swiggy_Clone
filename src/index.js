import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import NavBar from "./Components/NavBar";
import MainBody from "./Components/MainBody";
import React, { useState, useEffect, Suspense } from "react";
import RestroContext from "./Utils/RestroContext";
import { fetchData } from "./Utils/Helper";
import Cart from "./Components/Cart";
import { Provider,  } from "react-redux";
import store from "./Utils/Store";
import { Loading } from "./Components/Shimmer";
const RestroMenu  = React.lazy(()=> import("./Components/RestroMenu"));

const AppLayout = () => {


  const [allList, setallList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData(setList, setallList);
  }, []);

  return (
   <>
     <RestroContext.Provider
      value={{list, allList, setList }}
    >
      <NavBar />
      <Outlet />
    </RestroContext.Provider>
   </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/restro/:id",
        element: <Suspense fallback={<Loading />}><RestroMenu /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
