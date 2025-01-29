import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { formatPrice } from "../components/CardHome";
import { formatDate } from "./DetailSneaker";

export default function DetailAuction() {
  const { id } = useParams();

  const [detailAuction, setDetailAuction] = useState({});

  async function getDetailAuction() {
    try {
      const response = await instance.get(`/auctions/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setDetailAuction(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getDetailAuction();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex justify-center items-start pt-10 text-white ">
      <div className="w-[1250px] h-fit  border border-white rounded-md flex">
        <div className="flex-2 bg-white w-full rounded-l-md">
          <img
            src={detailAuction.Sneaker?.imageUrl}
            alt={detailAuction.Sneaker?.name}
            className="w-full   object-cover rounded-l-md"
          />
        </div>
        <div className="flex-3 flex p-2">
          <div className="flex-1 flex flex-col justify-between ">
            <div className="font-bold text-2xl text-red-400">
              {detailAuction.Sneaker?.brand}
            </div>
            <div className="font-semibold text-xl">
              {detailAuction.Sneaker?.name}
            </div>
            <div className="font-medium text-lg">
              {formatPrice(detailAuction.Sneaker?.price)}
            </div>
            <div className="flex gap-4 font-semibold">
              <div className="w-fit h-fit border border-white rounded-md p-2 ">
                {detailAuction.Sneaker?.releaseYear}
              </div>
              <div className="w-fit h-fit border border-white rounded-md p-2 ">
                {detailAuction.Sneaker?.size}
              </div>
              <div className="w-fit h-fit border border-white rounded-md p-2 ">
                {detailAuction.Sneaker?.condition}
              </div>
            </div>
            {detailAuction.Sneaker?.collaboration && (
              <div className="font-semibold">
                Collaboration : {detailAuction.Sneaker?.collaboration}
              </div>
            )}

            <div className="font-bold text-xl">
              {detailAuction.Sneaker?.colorway}
            </div>
            <div className="font-semibold">{detailAuction.Sneaker?.box}</div>
            <div className="w-fit h-fit p-3 border border-white rounded-md">
              {detailAuction.Sneaker?.authenticityStatus}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 ">
            <div className="flex gap-4">
              <label className="font-medium w-48 ">Starting Price</label>

              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatPrice(detailAuction.startingPrice)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-medium w-48 ">Current Price</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatPrice(detailAuction.currentPrice)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-medium w-48">Reserve Price</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatPrice(detailAuction.reservePrice)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-medium w-48">Minimum Bid Increment</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatPrice(detailAuction.minBidIncrement)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-medium w-48">Start Time</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatDate(detailAuction.startTime)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-semibold w-48">End Time</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatDate(detailAuction.endTime)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="w-48 font-semibold">Allow Auto Bid</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white font-semibold">
                {detailAuction.allowAutobid ? "Yes" : "No"}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="font-semibold w-48">Buy Now Price</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {formatPrice(detailAuction.buyNowPrice)}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="w-48 font-semibold">Status</label>
              <div className="w-40 h--8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {detailAuction.status}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="w-48 font-semibold">Total Bids</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {detailAuction.totalBids}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="w-48 font-semibold">Auctioneer</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold text-xs">
                {detailAuction.Seller?.email}
              </div>
            </div>
            <div className="flex gap-4">
              <label className="w-48 font-semibold">Auctioneer Status</label>
              <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold">
                {detailAuction.Seller?.resellerVerificationStatus}
              </div>
            </div>
            {detailAuction.Winner && (
              <div className="flex gap-4">
                <label className="w-48 font-semibold">Winner</label>
                <div className="w-40 h-8 rounded-md flex justify-center items-center p-2 border border-white text-white font-semibold text-xs">
                  {detailAuction.Winner?.email}
                </div>
              </div>
            )}

            {detailAuction.status === "Active" && (
              <Link
                to={`/add-bid/${detailAuction.id}`}
                className="bg-blue-900 w-40 p-2 rounded-md text-white font-semibold flex justify-center items-center"
              >
                BID
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
