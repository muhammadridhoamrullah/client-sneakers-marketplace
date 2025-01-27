import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";

export default function Register() {
  const navigate = useNavigate();
  const [formRegis, setFormRegis] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormRegis({
      ...formRegis,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/register-user", formRegis);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Register success",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="w-full min-h-screen bg-black text-white flex justify-center items-center">
        <div className="flex flex-col items-center h-fit w-96 bg-white text-black p-4 gap-10 justify-between rounded-2xl">
          <div className="font-extrabold text-4xl">REGISTER</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">EMAIL</div>
              <input
                type="email"
                name="email"
                id="password"
                onChange={changeHandler}
                value={formRegis.email}
                className="w-full h-10 rounded-md p-2 border-2 border-black font-medium text-xl"
              />
            </div>
            <div>
              <div className="font-bold text-xl">PASSWORD</div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={changeHandler}
                value={formRegis.password}
                className="w-full h-10 rounded-md p-2 border-2 border-black font-medium text-xl"
              />
            </div>
            <button
              type="submit"
              className="bg-green-900 text-white w-full h-10 rounded-md hover:bg-green-800 font-bold text-xl cursor-pointer"
            >
              REGISTER
            </button>
            <div className="font-medium  ">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-900 font-semibold ">
                LOGIN
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </form>
  );
}
