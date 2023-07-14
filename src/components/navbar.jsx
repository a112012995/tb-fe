import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <div className="px-20 pt-12 pb-9 bg-none text-white">
      <div className="navbar ">
        <div className="navbar-start">
          <a href="/dashboard">
            <div className="flex items-center">
              <div>
                <img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-2xl">SDKPT</div>
                <div className="font-semibold text-2xl">Kota Semarang</div>
              </div>
            </div>
          </a>
        </div>
        <div className="navbar-end gap-12">
          <a href="#stats" className="text-2xl font-semibold scroll-smooth">
            Tentang
          </a>
          <a href="#map" className="text-2xl font-semibold scroll-smooth">
            Peta
          </a>
          <button>
            <div
              onClick={() => dispatch(logout(history))}
              className="text-2xl font-semibold scroll-smooth"
            >
              Logout
            </div>
          </button>
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#F5EFE7] rounded-md w-52 text-black"
            >
              <li>
                <div onClick={() => dispatch(logout(history))}>Logout</div>
              </li>
            </ul> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
