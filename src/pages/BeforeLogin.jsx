import React, { useState, useEffect } from "react";
import logo from "../assets/main-logo.png";
import Banner from "../components/Banner";
import Service from "../components/Service";
import HowTo from "../components/HowTo";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
// import { logout } from "../../store/actions/auth";

const BeforeLogin = () => {
  // console.log(window.location)
  const pathName = window.location.pathname;
  const [color, setColor] = useState(false);
  const [colorNav, setColorNav] = useState("text-white");
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const scroll = window.scrollY >= 90;
  useEffect(() => {
    if (pathName === "/") {
      if (scroll) {
        return setColorNav("text-black");
      }
      setColorNav("text-white");
    } else {
      setColorNav("text-black");
    }
  }, [pathName, scroll]);
  return (
    <>
      <div
        className={
          color
            ? `navbar fixed top-0 bg-white z-50 shadow-md`
            : `navbar fixed top-0 z-50`
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a
            href="/#"
            className={`text-2xl font-bold font-Montserrat ${colorNav} ml-24 mt-4 mb-4`}
          >
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end mt-4 mb-4">
          <ul className="menu-horizontal space-x-[46px] mr-[67px]">
            <li>
              <a href="/#" className="font-bold text-lg">
                Tentang
              </a>
            </li>
            <li tabIndex={0}>
              <a href="/#" className="font-bold text-lg">
                Artikel
              </a>
            </li>
          </ul>
          <a
            href="/login"
            className="btn border-[#5CB85F] hover:text-white bg-[#5CB85F] text-white mr-24"
          >
            Login
          </a>
        </div>
      </div>
      <Banner />
      <Service />
      <HowTo />
      <Artikel />
      <Footer />
    </>
  );
};

export default BeforeLogin;
