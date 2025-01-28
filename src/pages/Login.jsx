import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";

export default function Login() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/login", formLogin);

      localStorage.access_token = response.data.access_token;

      navigate("/");
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
      <div className="flex items-center justify-center w-screen h-screen bg-black text-white">
        <div className="flex flex-col gap-4 items-center justify-between p-4 w-96 h-fit bg-white text-black rounded-2xl">
          <div className="font-extrabold text-4xl">LOGIN</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold">EMAIL</div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={changeHandler}
                value={formLogin.email}
                className="p-2 w-full h-10 rounded-md border-2 border-black font-medium text-xl"
              />
            </div>
            <div>
              <div className="font-bold">PASSWORD</div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={changeHandler}
                value={formLogin.password}
                className="p-2 w-full h-10 rounded-md border-2 border-black font-medium text-xl"
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 rounded-xl bg-green-900 text-white font-bold text-xl hover:bg-green-800 cursor-pointer"
            >
              LOGIN
            </button>
            <div className="font-medium">
              Don't have an account?{" "}
              <Link to={"/register"} className="font-bold text-blue-900">
                REGISTER
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </form>
  );
}
