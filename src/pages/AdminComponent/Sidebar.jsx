import React from "react";
import user from "../../assets/user.svg"
import pkpl from "../../assets/pkp.svg"

const Sidebar = ({
  opens,
  compUsers,
  compPkp,
  users,
  pkp,
}) => {
//   const role = window.localStorage.getItem("role");
  return (
    <>
      {opens ? (
        <div className="w-[300px] hidden lg:flex flex-col  min-h-[100%]  mt-16 duration-300">
          {/* <div className="h-screen bg-white shadow-xl"> */}
          {/* <div className="flex-1"> */}
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <button
                onClick={compUsers}
                className={`flex justify-between items-center px-6 py-4 w-full space-x-3 ${
                  users && "bg-[#CFE2FF]"
                }`}
              >
                <span className="text-base font-semibold">Pengguna</span>
                <img src={user} alt="" />
              </button>
            </li>
            <li>
              <button
                onClick={compPkp}
                className={`flex justify-between items-center px-6 py-4 w-full  space-x-3 ${
                  pkp && "bg-[#CFE2FF]"
                }`}
              >
                <span className="text-base font-semibold">PKP</span>
                <img src={pkpl} alt="" />
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className=" w-16 flex flex-col p-3 mt-16 duration-300">
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-3 text-sm">
                <li className="rounded-sm">
                  <button
                    onClick={compUsers}
                    className={`flex items-center p-2 space-x-3 rounded-md ${
                      users && "bg-[#CFE2FF]"
                    }`}
                  >
                    <img src={user} alt="" />
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                    onClick={compPkp}
                    className={`flex items-center p-2 space-x-3 rounded-md ${
                      pkp && "bg-[#CFE2FF]"
                    }`}
                  >
                    <img src={pkpl} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
