import React from "react";
import Map from "../components/Map";

const Details = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Details Page</h1>
        <div className="w-full h-96 md:w-2/3 lg:w-1/2">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Details;
