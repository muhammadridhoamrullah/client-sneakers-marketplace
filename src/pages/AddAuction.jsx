import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { useEffect, useState } from "react";

export default function AddAuction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sneaker, setSneaker] = useState({});
  const [formAddAuction, setFormAddAuction] = useState({
    startingPrice: "",
    reservePrice: "",
    minBidIncrement: "",
    startTime: "",
    endTime: "",
    buyNowPrice: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormAddAuction({
      ...formAddAuction,
      [name]:
        name === "startingPrice" ||
        name === "reservePrice" ||
        name === "minBidIncrement" ||
        name === "buyNowPrice"
          ? Number(value)
          : value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await instance.post(
        `/add-auctions/${id}`,
        formAddAuction,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      navigate("/auctions");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  async function getSneaker() {
    try {
      const response = await instance.get(`/sneakers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setSneaker(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getSneaker();
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <div className="bg-black w-full min-h-screen text-white flex justify-center items-start pt-10">
        <div className="w-96 h-fit border border-white rounded-lg p-4 flex flex-col gap-4">
          <div className="font-bold text-2xl flex justify-center items-center">
            {sneaker.name}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Starting Price</label>
            <input
              type="number"
              name="startingPrice"
              id="startingPrice"
              onChange={changeHandler}
              value={formAddAuction.startingPrice}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Reserve Price</label>
            <input
              type="number"
              name="reservePrice"
              id="reservePrice"
              onChange={changeHandler}
              value={formAddAuction.reservePrice}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Minimum Bid Increment</label>
            <input
              type="number"
              name="minBidIncrement"
              id="minBidIncrement"
              onChange={changeHandler}
              value={formAddAuction.minBidIncrement}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Start Time</label>
            <input
              type="date"
              name="startTime"
              id="startTime"
              onChange={changeHandler}
              value={formAddAuction.startTime}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">End Time</label>
            <input
              type="date"
              name="endTime"
              id="endTime"
              onChange={changeHandler}
              value={formAddAuction.endTime}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Buy Now Price</label>
            <input
              type="number"
              name="buyNowPrice"
              id="buyNowPrice"
              onChange={changeHandler}
              value={formAddAuction.buyNowPrice}
              className="w-full h-8 rounded-md p-2 bg-white text-black font-semibold"
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-green-800 cursor-pointer font-semibold hover:bg-green-700"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}
