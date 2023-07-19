import React from "react";

export const Loader = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22];

  return (
    <>
      <div className="d-flex row justify-content-between">
        {arr.map((e, f) => {
          return (
            <div
              key={f}
              className="card col-md-6 my-3"
              style={{
                width: "16rem",
                height: "23rem",
                backgroundColor: "#bbb",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>

      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    </>
  );
};
