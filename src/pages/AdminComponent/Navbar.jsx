import React from "react";
import menu from "../../assets/menu.svg";

const Navbar = ({ opens, setOpens,}) => {
  return (
    <div className="navbar lg:pr-10 min-[240px]:px-4 bg-white shadow-md fixed top-0 z-[1500]">
      <div className="flex-1">
        {opens ? (
          <>
            <a href="/" className="ml-28">
              <img src="/logo_dkk.png" className="w-9" alt="" />
            </a>
            <button
              onClick={() => setOpens(!opens)}
              className="ml-24 btn btn-ghost normal-case text-xl duration-300 hidden lg:flex "
            >
              <img src={menu} alt="" />
            </button>
            <h2 className="text-xl ml-4 font-bold text-[#213555]">
              SDKPT - Semarang
            </h2>
          </>
        ) : (
          <>
            <a href="/">
              <img src="/logo_dkk.png" className="w-9" alt="" />
            </a>
            <button
              onClick={() => setOpens(!opens)}
              className="btn btn-ghost normal-case text-xl ml-[20px] duration-300 hidden lg:flex"
            >
              <img src={menu} alt="" />
            </button>
            <h2 className="text-xl ml-4 font-bold text-[#213555]">
              SDKPT - Semarang
            </h2>
          </>
        )}
      </div>
      <div className="navbar-end space-x-4 hidden lg:flex ">
        <p>Selamat Datang Admin!</p>
      </div>
      <div className="dropdown dropdown-end">
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
    </div>
  );
};

export default Navbar;
