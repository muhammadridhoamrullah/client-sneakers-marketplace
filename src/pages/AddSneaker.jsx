import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AddSneaker() {
  const navigate = useNavigate();
  const [formAddSneaker, setDataFormAddSneaker] = useState({
    name: "",
    price: "",
    brand: "",
    releaseYear: "",
    size: "",
    condition: "",
    colorway: "",
    collaboration: "",
    imageUrl: "",
    box: "",
    authenticityStatus: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setDataFormAddSneaker({
      ...formAddSneaker,
      [name]: value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await instance.post("/sneakers", formAddSneaker, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="bg-black w-full min-h-screen flex justify-center items-start text-white pt-10">
        <div className="border border-white p-4 rounded-md w-[900px] h-fit flex">
          <div className="flex-1 flex flex-col gap-2  justify-between">
            <div className="flex flex-col gap-2">
              <label>NAME</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={changeHandler}
                value={formAddSneaker.name}
                className="w-80 h-8 rounded-md p-2 border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>PRICE</label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={changeHandler}
                value={formAddSneaker.price}
                className="w-80 h-8 rounded-md p-2 border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>BRAND</label>
              <input
                type="text"
                name="brand"
                id="brand"
                onChange={changeHandler}
                value={formAddSneaker.brand}
                className="w-80 h-8 rounded-md p-2 border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>RELEASE YEAR</label>
              <input
                type="number"
                name="releaseYear"
                id="releaseYear"
                onChange={changeHandler}
                value={formAddSneaker.releaseYear}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>SIZE</label>
              <input
                type="text"
                name="size"
                id="size"
                onChange={changeHandler}
                value={formAddSneaker.size}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>CONDITION</label>
              <input
                type="text"
                name="condition"
                id="condition"
                onChange={changeHandler}
                value={formAddSneaker.condition}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-2">
              <label>COLORWAY</label>
              <input
                type="text"
                name="colorway"
                id="colorway"
                onChange={changeHandler}
                value={formAddSneaker.colorway}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>COLLABORATION</label>
              <input
                type="text"
                name="collaboration"
                id="collaboration"
                onChange={changeHandler}
                value={formAddSneaker.collaboration}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>IMAGE URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={changeHandler}
                value={formAddSneaker.imageUrl}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>BOX</label>
              <input
                type="text"
                name="box"
                id="box"
                onChange={changeHandler}
                value={formAddSneaker.box}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>AUTHENTICITY STATUS</label>
              <input
                type="text"
                name="authenticityStatus"
                id="authenticityStatus"
                onChange={changeHandler}
                value={formAddSneaker.authenticityStatus}
                className="w-80 h-8 p-2 rounded-md border border-white"
              />
            </div>
            <button
              type="submit"
              className="w-80 h-8 font-semibold bg-green-900 rounded-md text-white hover:bg-green-800 mt-6"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
