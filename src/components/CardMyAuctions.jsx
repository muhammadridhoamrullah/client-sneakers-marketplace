import Swal from "sweetalert2";
import { formatDate } from "../pages/DetailSneaker";
import { formatPrice } from "./CardHome";
import instance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";

export default function CardMyAuctions({ data }) {
  const navigate = useNavigate();
  async function finishAuction() {
    try {
      const response = await instance.post(
        `/auctions/${data.id}/end`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Auction Finished",
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

  return (
    <div className="w-96 h-fit rounded-md border border-white flex flex-col justify-between p-4 gap-4">
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Sneaker Name</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {data.Sneaker?.name}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Starting Price</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatPrice(data.startingPrice)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Current Price</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatPrice(data.currentPrice)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Reserve Price</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatPrice(data.reservePrice)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Buy Now Price</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatPrice(data.buyNowPrice)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Total Bids</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {data.totalBids}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Start Time</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatDate(data.startTime)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">End Time</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {formatDate(data.endTime)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="w-48 font-semibold">Status</label>
        <div className="w-full h-fit p-2 border border-white rounded-md flex justify-center items-center">
          {data.status}
        </div>
      </div>

      <Link
        className="w-full h-10 bg-blue-900 rounded-md flex justify-center items-center font-semibold text-white cursor-pointer hover:bg-blue-700"
        to={`/auction/${data.id}`}
      >
        GO TO THIS AUCTION
      </Link>
      {data.status === "Active" && (
        <button
          onClick={() => {
            finishAuction();
          }}
          className="bg-green-900 w-full h-10 rounded-md flex justify-center items-center font-semibold cursor-pointer hover:bg-green-700"
        >
          FINISH THIS AUCTION
        </button>
      )}
    </div>
  );
}

// [
//     {
//         "id": 4,
//         "SneakerId": 4,
//         "startingPrice": 100000,
//         "currentPrice": 225000,
//         "reservePrice": 170000,
//         "minBidIncrement": 50000,
//         "startTime": "2025-02-02T10:00:00.000Z",
//         "endTime": "2025-02-15T10:00:00.000Z",
//         "allowAutoBid": false,
//         "buyNowPrice": 500000,
//         "status": "Active",
//         "WinnerId": null,
//         "UserId": 6,
//         "totalBids": 6,
//         "createdAt": "2025-01-24T13:25:12.640Z",
//         "updatedAt": "2025-01-29T02:36:07.122Z",
//         "Sneaker": {
//             "id": 4,
//             "name": "New Balance 530 Indigo",
//             "price": 1599000,
//             "brand": "New Balance",
//             "releaseYear": 2024,
//             "size": "8.5 US",
//             "condition": "VNDS",
//             "colorway": "Silver Indigo",
//             "collaboration": "",
//             "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/1/01-NEW-BALANCE-FFSSBNEW0-NEWMR530SGD-White.jpg",
//             "box": "Original Box",
//             "UserId": 6,
//             "authenticityStatus": "Verified",
//             "createdAt": "2025-01-24T13:20:43.909Z",
//             "updatedAt": "2025-01-24T13:20:43.909Z"
//         }
//     },
//     {
//         "id": 5,
//         "SneakerId": 5,
//         "startingPrice": 1900000,
//         "currentPrice": 2050000,
//         "reservePrice": 2200000,
//         "minBidIncrement": 50000,
//         "startTime": "2025-01-30T00:00:00.000Z",
//         "endTime": "2025-02-06T00:00:00.000Z",
//         "allowAutoBid": false,
//         "buyNowPrice": 2500000,
//         "status": "Active",
//         "WinnerId": null,
//         "UserId": 6,
//         "totalBids": 4,
//         "createdAt": "2025-01-28T15:19:50.449Z",
//         "updatedAt": "2025-01-29T02:57:03.611Z",
//         "Sneaker": {
//             "id": 5,
//             "name": "Asics GT-2160 Paris",
//             "price": 2299000,
//             "brand": "Asics",
//             "releaseYear": 2022,
//             "size": "8.5 US",
//             "condition": "BNIB",
//             "colorway": "White",
//             "collaboration": "",
//             "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-175706160/asics_sepatu_asics_gt_2160_paris_asc1203a570-750_full04_gw7l5fxv.jpg",
//             "box": "Original Box",
//             "UserId": 6,
//             "authenticityStatus": "Unverified",
//             "createdAt": "2025-01-28T02:51:17.940Z",
//             "updatedAt": "2025-01-28T02:51:17.940Z"
//         }
//     }
// ]
