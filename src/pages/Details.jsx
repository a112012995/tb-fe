import React from "react";
import Map from "../components/Map";
import Card from "../components/Card";
import Header from "../components/Header/Header";
import Navbar from "../components/navbar";

const Details = () => {
  return (
    <>
      <div className="bg-white m-auto items-center justify-center w-screen h-screen">
        <Navbar />
        <Header />
        <Map />
      </div>
    </>
  );
};

export default Details;
