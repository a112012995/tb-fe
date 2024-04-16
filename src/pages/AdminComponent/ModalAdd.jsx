import React, { useState } from "react";
import { createUser } from "../../store/actions/admin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ModalAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    const data = {
      username,
      role,
      password,
    };
    const res = await dispatch(createUser(data, history))
      .then((response) => ({ response }))
      .catch((err) => ({ err }));

    if (res.err) {
      console.log(res.err);
      setError(res.err.response.data.message);
    }
  };

  return (
    <>
      <button
        className="btn bg-[#213555] text-white hover:text-[#213555]"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Tambah
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-lg">Tambah Akun</h3>
          <form className="w-full space-y-3 max-w-md" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <h4 className="text-[#213555] font-semibold ">Username</h4>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-[#213555] font-semibold ">Role</h4>
              <select
                className="select select-bordered w-full"
                defaultValue={role}
                onChange={handleRole}
              >
                <option value={""} disabled>
                  Pilih Akses
                </option>
                <option value={"puskesmas"}>Puskesmas</option>
                <option value={"stackholder"}>Stackholder</option>
              </select>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#213555] font-semibold ">Password</h4>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full"
                value={password}
                onChange={handlePassword}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex gap-2 pt-2">
              <button
                className="btn bg-[#213555] text-white hover:text-[#213555]"
                type="submit"
              >
                Tambah
              </button>
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
};

export default ModalAdd;
