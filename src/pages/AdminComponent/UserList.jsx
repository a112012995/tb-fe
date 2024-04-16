import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../store/actions/admin";
import { jwtDecode } from "jwt-decode";
import edit from "../../assets/edit.svg";
import deleted from "../../assets/delete.svg";
import ModalAdd from "./ModalAdd";

const UserList = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.adminReducers);
  useEffect(() => {
    dispatch(getAllUser());
    setToken(jwtDecode(accessToken));
  }, [dispatch, accessToken]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    window.location.reload();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-[#4F709C]">Daftar Pengguna</p>
        <ModalAdd />
      </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.user?.map((user, no) => (
                <tr key={user.id}>
                  <td>{no + 1}</td>
                  <td>
                    <p className="font-semibold">{user.username}</p>
                  </td>
                  <td>{user.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <img src={edit} alt="" />
                      </button>

                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <img src={deleted} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
