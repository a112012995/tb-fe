import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user from "../../assets/user.svg";
import pkpl from "../../assets/pkp.svg";
import { logout } from "../../store/actions/auth";

const Sidebar = ({ opens, compUsers, compPkp, compSurvey, users, pkp, survey }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <li>
              <button
                onClick={compSurvey}
                className={`flex justify-between items-center px-6 py-4 w-full  space-x-3 ${
                  survey && "bg-[#CFE2FF]"
                }`}
              >
                <span className="text-base font-semibold">Survey</span>
                <img src={pkpl} alt="" />
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch(logout(navigate))}
                className="flex justify-between items-center px-6 py-4 w-full  space-x-3"
              >
                <span className="text-base font-semibold">Logout</span>
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
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
                <li className="rounded-sm">
                  <button
                    onClick={compSurvey}
                    className={`flex items-center p-2 space-x-3 rounded-md ${
                      survey && "bg-[#CFE2FF]"
                    }`}
                  >
                    <img src={pkpl} alt="" />
                  </button>
                </li>
                <li className="rounded-sm">
                  <button
                    onClick={() => dispatch(logout(navigate))}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
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
