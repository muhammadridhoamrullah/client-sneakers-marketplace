import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { useEffect, useState } from "react";
import CardHistoryBid from "../components/CardHistoryBid";

export default function DetailBidByAuctionId() {
  const { id } = useParams();

  const [historyBid, setHistoryBid] = useState([]);

  async function getBidByAuctionId() {
    try {
      const response = await instance.get(`/auctions/${id}/bids`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setHistoryBid(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getBidByAuctionId();
  }, []);
  return (
    <div className=" bg-black w-full min-h-screen flex flex-wrap justify-center items-start pt-10 text-white gap-4">
      {historyBid.map((el, i) => {
        return <CardHistoryBid key={i} data={el} />;
      })}
    </div>
  );
}

// [
//   {
//       "id": 18,
//       "AuctionId": 5,
//       "UserId": 5,
//       "amount": 2050000,
//       "autoBidLimit": 0,
//       "timestamp": "2025-01-29T02:57:03.602Z",
//       "isHighestBid": true,
//       "status": "Active",
//       "createdAt": "2025-01-29T02:57:03.603Z",
//       "updatedAt": "2025-01-29T02:57:03.603Z",
//       "User": {
//           "id": 5,
//           "email": "kanghaerin@gmail.com",
//           "role": "Buyer",
//           "isVerifiedReseller": true,
//           "resellerVerificationStatus": "Verified",
//           "createdAt": "2025-01-23T15:28:45.769Z",
//           "updatedAt": "2025-01-23T15:28:45.769Z"
//       },
//       "Auction": {
//           "id": 5,
//           "SneakerId": 5,
//           "startingPrice": 1900000,
//           "currentPrice": 2050000,
//           "reservePrice": 2200000,
//           "minBidIncrement": 50000,
//           "startTime": "2025-01-30T00:00:00.000Z",
//           "endTime": "2025-02-06T00:00:00.000Z",
//           "allowAutoBid": false,
//           "buyNowPrice": 2500000,
//           "status": "Active",
//           "WinnerId": null,
//           "UserId": 6,
//           "totalBids": 4,
//           "createdAt": "2025-01-28T15:19:50.449Z",
//           "updatedAt": "2025-01-29T02:57:03.611Z",
//           "Sneaker": {
//               "id": 5,
//               "name": "Asics GT-2160 Paris",
//               "price": 2299000,
//               "brand": "Asics",
//               "releaseYear": 2022,
//               "size": "8.5 US",
//               "condition": "BNIB",
//               "colorway": "White",
//               "collaboration": "",
//               "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-175706160/asics_sepatu_asics_gt_2160_paris_asc1203a570-750_full04_gw7l5fxv.jpg",
//               "box": "Original Box",
//               "UserId": 6,
//               "authenticityStatus": "Unverified",
//               "createdAt": "2025-01-28T02:51:17.940Z",
//               "updatedAt": "2025-01-28T02:51:17.940Z"
//           }
//       }
//   },
//   {
//       "id": 15,
//       "AuctionId": 5,
//       "UserId": 5,
//       "amount": 2000000,
//       "autoBidLimit": 0,
//       "timestamp": "2025-01-29T02:37:26.200Z",
//       "isHighestBid": false,
//       "status": "Active",
//       "createdAt": "2025-01-29T02:37:26.200Z",
//       "updatedAt": "2025-01-29T02:57:03.592Z",
//       "User": {
//           "id": 5,
//           "email": "kanghaerin@gmail.com",
//           "role": "Buyer",
//           "isVerifiedReseller": true,
//           "resellerVerificationStatus": "Verified",
//           "createdAt": "2025-01-23T15:28:45.769Z",
//           "updatedAt": "2025-01-23T15:28:45.769Z"
//       },
//       "Auction": {
//           "id": 5,
//           "SneakerId": 5,
//           "startingPrice": 1900000,
//           "currentPrice": 2050000,
//           "reservePrice": 2200000,
//           "minBidIncrement": 50000,
//           "startTime": "2025-01-30T00:00:00.000Z",
//           "endTime": "2025-02-06T00:00:00.000Z",
//           "allowAutoBid": false,
//           "buyNowPrice": 2500000,
//           "status": "Active",
//           "WinnerId": null,
//           "UserId": 6,
//           "totalBids": 4,
//           "createdAt": "2025-01-28T15:19:50.449Z",
//           "updatedAt": "2025-01-29T02:57:03.611Z",
//           "Sneaker": {
//               "id": 5,
//               "name": "Asics GT-2160 Paris",
//               "price": 2299000,
//               "brand": "Asics",
//               "releaseYear": 2022,
//               "size": "8.5 US",
//               "condition": "BNIB",
//               "colorway": "White",
//               "collaboration": "",
//               "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-175706160/asics_sepatu_asics_gt_2160_paris_asc1203a570-750_full04_gw7l5fxv.jpg",
//               "box": "Original Box",
//               "UserId": 6,
//               "authenticityStatus": "Unverified",
//               "createdAt": "2025-01-28T02:51:17.940Z",
//               "updatedAt": "2025-01-28T02:51:17.940Z"
//           }
//       }
//   },
//   {
//       "id": 14,
//       "AuctionId": 5,
//       "UserId": 5,
//       "amount": 1950000,
//       "autoBidLimit": 0,
//       "timestamp": "2025-01-29T02:37:07.031Z",
//       "isHighestBid": false,
//       "status": "Active",
//       "createdAt": "2025-01-29T02:37:07.032Z",
//       "updatedAt": "2025-01-29T02:37:26.195Z",
//       "User": {
//           "id": 5,
//           "email": "kanghaerin@gmail.com",
//           "role": "Buyer",
//           "isVerifiedReseller": true,
//           "resellerVerificationStatus": "Verified",
//           "createdAt": "2025-01-23T15:28:45.769Z",
//           "updatedAt": "2025-01-23T15:28:45.769Z"
//       },
//       "Auction": {
//           "id": 5,
//           "SneakerId": 5,
//           "startingPrice": 1900000,
//           "currentPrice": 2050000,
//           "reservePrice": 2200000,
//           "minBidIncrement": 50000,
//           "startTime": "2025-01-30T00:00:00.000Z",
//           "endTime": "2025-02-06T00:00:00.000Z",
//           "allowAutoBid": false,
//           "buyNowPrice": 2500000,
//           "status": "Active",
//           "WinnerId": null,
//           "UserId": 6,
//           "totalBids": 4,
//           "createdAt": "2025-01-28T15:19:50.449Z",
//           "updatedAt": "2025-01-29T02:57:03.611Z",
//           "Sneaker": {
//               "id": 5,
//               "name": "Asics GT-2160 Paris",
//               "price": 2299000,
//               "brand": "Asics",
//               "releaseYear": 2022,
//               "size": "8.5 US",
//               "condition": "BNIB",
//               "colorway": "White",
//               "collaboration": "",
//               "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-175706160/asics_sepatu_asics_gt_2160_paris_asc1203a570-750_full04_gw7l5fxv.jpg",
//               "box": "Original Box",
//               "UserId": 6,
//               "authenticityStatus": "Unverified",
//               "createdAt": "2025-01-28T02:51:17.940Z",
//               "updatedAt": "2025-01-28T02:51:17.940Z"
//           }
//       }
//   },
//   {
//       "id": 13,
//       "AuctionId": 5,
//       "UserId": 5,
//       "amount": 1900000,
//       "autoBidLimit": 0,
//       "timestamp": "2025-01-29T02:36:20.021Z",
//       "isHighestBid": false,
//       "status": "Active",
//       "createdAt": "2025-01-29T02:36:20.021Z",
//       "updatedAt": "2025-01-29T02:37:07.029Z",
//       "User": {
//           "id": 5,
//           "email": "kanghaerin@gmail.com",
//           "role": "Buyer",
//           "isVerifiedReseller": true,
//           "resellerVerificationStatus": "Verified",
//           "createdAt": "2025-01-23T15:28:45.769Z",
//           "updatedAt": "2025-01-23T15:28:45.769Z"
//       },
//       "Auction": {
//           "id": 5,
//           "SneakerId": 5,
//           "startingPrice": 1900000,
//           "currentPrice": 2050000,
//           "reservePrice": 2200000,
//           "minBidIncrement": 50000,
//           "startTime": "2025-01-30T00:00:00.000Z",
//           "endTime": "2025-02-06T00:00:00.000Z",
//           "allowAutoBid": false,
//           "buyNowPrice": 2500000,
//           "status": "Active",
//           "WinnerId": null,
//           "UserId": 6,
//           "totalBids": 4,
//           "createdAt": "2025-01-28T15:19:50.449Z",
//           "updatedAt": "2025-01-29T02:57:03.611Z",
//           "Sneaker": {
//               "id": 5,
//               "name": "Asics GT-2160 Paris",
//               "price": 2299000,
//               "brand": "Asics",
//               "releaseYear": 2022,
//               "size": "8.5 US",
//               "condition": "BNIB",
//               "colorway": "White",
//               "collaboration": "",
//               "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-175706160/asics_sepatu_asics_gt_2160_paris_asc1203a570-750_full04_gw7l5fxv.jpg",
//               "box": "Original Box",
//               "UserId": 6,
//               "authenticityStatus": "Unverified",
//               "createdAt": "2025-01-28T02:51:17.940Z",
//               "updatedAt": "2025-01-28T02:51:17.940Z"
//           }
//       }
//   }
// ]
