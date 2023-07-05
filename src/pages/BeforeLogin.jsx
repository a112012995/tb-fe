import React, { useState, useEffect } from "react";
import logo from "../assets/main-logo.png";
import Banner from "../components/Banner";
import Service from "../components/Service";
import HowTo from "../components/HowTo";
import Artikel from "../components/Artikel";
import Footer from "../components/Footer";
import { logout } from "../store/actions/auth";
import { useDispatch } from "react-redux";

const BeforeLogin = () => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch()
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
    <div className="bg-[#F6F6F6] text-black ">
      <div
        className={
          color
            ? `navbar fixed top-0 bg-[#F6F6F6] z-50 shadow-md`
            : `navbar fixed top-0 z-50`
        }
      >
        <div className="navbar-start">
          <a href="/#" className={` ${colorNav} ml-24 mt-4 mb-4`}>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end mt-4 mb-4">
          <ul className="menu-horizontal space-x-[46px] mr-[67px]">
            <li>
              <a href="/#service" className="font-bold text-lg">
                Tentang
              </a>
            </li>
            <li tabIndex={0}>
              <a href="/#artikel" className="font-bold text-lg">
                Artikel
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end mr-24 ">
            {accessToken ? (
              <label
                tabIndex={0}
                className="btn m-1 border-[#5CB85F] bg-[#5CB85F] text-white hover:bg-[#5CB85F] hover:border-[#5CB85F]"
              >
                <div onClick={() => dispatch(logout())}>Logout</div>
              </label>
            ) : (
              <>
                <label
                  tabIndex={0}
                  className="btn m-1 border-[#5CB85F] bg-[#5CB85F] text-white hover:bg-[#5CB85F] hover:border-[#5CB85F]"
                >
                  Login
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 mt-4 border-[#5CB85F] bg-[#5CB85F] text-white"
                >
                  <li>
                    <a
                      href="/login"
                      className="font-semibold border-[#5CB85F] bg-[#5CB85F] text-white hover:bg-white hover:border-[#5CB85F] hover:text-[#5CB85F]"
                    >
                      SDKPT
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://119.2.50.170:9093/tb/index.php/login"
                      className="font-semibold border-[#5CB85F] bg-[#5CB85F] text-white hover:bg-white hover:border-[#5CB85F] hover:text-[#5CB85F]"
                    >
                      Semar Betul
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <Banner />
      <Service />
      <HowTo />
      <Artikel />
      <Footer />
    </div>
  );
};

export default BeforeLogin;
