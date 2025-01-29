import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { formatPrice } from "../components/CardHome";

export default function AddBid() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [auction, setAuction] = useState({});

  const [bid, setBid] = useState({
    amount: 0,
  });

  function changeHandler(e) {
    const { name, value } = e.target;

    setBid({
      ...bid,
      [name]: value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await instance.post(`/auctions/${id}/bid`, bid, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      navigate("/auctions");
    } catch (error) {
      console.log(error, "error");

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  async function findAuction() {
    try {
      const response = await instance.get(`/auctions/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setAuction(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }
  useEffect(() => {
    findAuction();
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <div className="bg-black w-full min-h-screen flex flex-col justify-start items-center pt-10 gap-4 text-white ">
        <div className=" text-3xl font-extrabold">
          Bid For {auction.Sneaker?.name}
        </div>
        <div className="w-fit h-96 p-4 rounded-md border border-white flex flex-col ">
          <div className="w-full h-full flex-2 flex flex-col justify-between gap-4">
            <div className="w-full h-1/4 flex gap-4">
              <label className="w-48 font-semibold">Starting Price</label>
              <div className="w-40 h-8 p-2 border border-white  rounded-md flex justify-center items-center font-bold">
                {formatPrice(auction.startingPrice)}
              </div>
            </div>
            <div className="w-full h-1/4 flex gap-4">
              <label className="font-semibold w-48">Current Price</label>
              <div className="w-40 h-8 rounded-md p-2 border border-white flex justify-center items-center font-bold">
                {formatPrice(auction.currentPrice)}
              </div>
            </div>
            <div className=" w-full h-1/4 flex gap-4">
              <label className="w-48 font-semibold">
                Minimum Bid Increment
              </label>
              <div className="w-40 h-8 rounded-md p-2 border border-white flex justify-center items-center font-bold">
                {formatPrice(auction.minBidIncrement)}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 justify-between items-center">
            <label className="font-bold text-2xl">Your Bid</label>
            <input
              type="number"
              name="amount"
              id="amount"
              onChange={changeHandler}
              value={bid.amount}
              className="w-full h-10 rounded-md border border-white p-2 font-semibold"
            />
            <button
              type="submit"
              className="w-full h-10 p-2 bg-green-900 hover:bg-green-700 rounded-md font-semibold cursor-pointer"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// {
//     "id": 4,
//     "SneakerId": 4,
//     "startingPrice": 100000,
//     "currentPrice": 150000,
//     "reservePrice": 170000,
//     "minBidIncrement": 50000,
//     "startTime": "2025-02-02T10:00:00.000Z",
//     "endTime": "2025-02-15T10:00:00.000Z",
//     "allowAutoBid": false,
//     "buyNowPrice": 500000,
//     "status": "Active",
//     "WinnerId": null,
//     "UserId": 6,
//     "totalBids": 4,
//     "createdAt": "2025-01-24T13:25:12.640Z",
//     "updatedAt": "2025-01-24T13:33:24.498Z",
//     "Sneaker": {
//         "id": 4,
//         "name": "New Balance 530 Indigo",
//         "price": 1599000,
//         "brand": "New Balance",
//         "releaseYear": 2024,
//         "size": "8.5 US",
//         "condition": "VNDS",
//         "colorway": "Silver Indigo",
//         "collaboration": "",
//         "imageUrl": "https://www.newbalance.co.id/media/catalog/product/cache/b444f50a64a092a2138a5e1cbd49879a/0/1/01-NEW-BALANCE-FFSSBNEW0-NEWMR530SGD-White.jpg",
//         "box": "Original Box",
//         "UserId": 6,
//         "authenticityStatus": "Verified",
//         "createdAt": "2025-01-24T13:20:43.909Z",
//         "updatedAt": "2025-01-24T13:20:43.909Z"
//     },
//     "Seller": {
//         "id": 6,
//         "email": "leehyein@gmail.com",
//         "role": "Seller",
//         "isVerifiedReseller": true,
//         "resellerVerificationStatus": "Verified",
//         "createdAt": "2025-01-24T13:20:02.370Z",
//         "updatedAt": "2025-01-24T14:16:06.324Z"
//     },
//     "Winner": null
// }
