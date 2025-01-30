import { useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AddPreorder() {
  const navigate = useNavigate();
  const [formAddPreorder, setFormAddPreorder] = useState({
    name: "",
    brand: "",
    releaseDate: "",
    expectedDeliveryDate: "",
    price: "",
    retailPrice: "",
    description: "",
    imageUrl: "",
    retailStore: "",
    guaranteed: "",
    refundPolicy: "",
    totalSlots: "",
    remainingSlots: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormAddPreorder({
      ...formAddPreorder,
      [name]:
        name === "price" ||
        name === "retailPrice" ||
        name === "totalSlots" ||
        name === "remainingSlots"
          ? Number(value)
          : value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await instance.post("/preorders", formAddPreorder, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      navigate("/preorders");
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
      <div className="bg-black w-full min-h-screen flex flex-col items-center py-10 gap-4   ">
        <div className="text-5xl font-extrabold text-white">Add Preorder</div>
        <div className="w-[1000px] h-fit border border-white rounded-md gap-2 flex text-white p-4">
          <div className="flex-1 gap-2  flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">NAME</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={changeHandler}
                value={formAddPreorder.name}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">BRAND</label>
              <input
                type="text"
                name="brand"
                id="brand"
                onChange={changeHandler}
                value={formAddPreorder.brand}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">RELEASE DATE</label>
              <input
                type="date"
                name="releaseDate"
                id="releaseDate"
                onChange={changeHandler}
                value={formAddPreorder.releaseDate}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">EXPECTED DELIVERY DATE</label>
              <input
                type="date"
                name="expectedDeliveryDate"
                id="expectedDeliveryDate"
                onChange={changeHandler}
                value={formAddPreorder.expectedDeliveryDate}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">PRICE</label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={changeHandler}
                value={formAddPreorder.price}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">RETAIL PRICE</label>
              <input
                type="number"
                name="retailPrice"
                id="retailPrice"
                onChange={changeHandler}
                value={formAddPreorder.retailPrice}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">DESCRIPTION</label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={changeHandler}
                value={formAddPreorder.description}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>
          </div>

          <div className="flex-1 gap-2  flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">IMAGE URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={changeHandler}
                value={formAddPreorder.imageUrl}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">RETAIL STORE</label>
              <input
                type="text"
                name="retailStore"
                id="retailStore"
                onChange={changeHandler}
                value={formAddPreorder.retailStore}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">GUARANTEED</label>
              <input
                type="text"
                name="guaranteed"
                id="guaranteed"
                onChange={changeHandler}
                value={formAddPreorder.guaranteed}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">REFUND POLICY</label>
              <input
                type="text"
                name="refundPolicy"
                id="refundPolicy"
                onChange={changeHandler}
                value={formAddPreorder.refundPolicy}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">TOTAL SLOTS</label>
              <input
                type="number"
                name="totalSlots"
                id="totalSlots"
                onChange={changeHandler}
                value={formAddPreorder.totalSlots}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">REMAINING SLOTS</label>
              <input
                type="number"
                name="remainingSlots"
                id="remainingSlots"
                onChange={changeHandler}
                value={formAddPreorder.remainingSlots}
                className="w-full h-8 p-2 rounded-md border border-white font-semibold"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-8 h-8  bg-green-900 rounded-md font-semibold hover:bg-green-700"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// name,
//           brand,
//           releaseDate,
//           expectedDeliveryDate,
//           price,
//           retailPrice,
//           description,

//           imageUrl,
//           retailStore,
//           guaranteed,
//           refundPolicy,
//           totalSlots,
//           remainingSlots,
