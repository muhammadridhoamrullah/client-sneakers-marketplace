import { Link } from "react-router-dom";
import { formatDate } from "../pages/DetailSneaker";

function ifStatus(status) {
  if (status === "Closed") {
    return "bg-red-500 w-fit h-fit ml-2 p-1 rounded-md";
  } else {
    return "bg-green-500 w-fit h-fit p-1 ml-2 rounded-md";
  }
}

export default function CardAuction({ data }) {
  return (
    <div className="w-96 h-96 border border-white rounded-lg flex flex-col">
      <div className="flex-1 w-full h-full rounded-t-lg overflow-hidden bg-white">
        <img
          src={data.Sneaker?.imageUrl}
          alt={data.Sneaker?.name}
          className="w-full h-full object-contain rounded-t-lg"
        />
      </div>
      <div className="flex-2 flex flex-col gap-2 p-4">
        <div>{data.Sneaker?.name}</div>
        <div className=" w-full h-full flex flex-col gap-2 font-bold">
          <div className="w-full   flex  ">
            <div className="w-40 ">Start Auction</div>
            <div>: {formatDate(data.startTime)}</div>
          </div>
          <div className="w-full  flex ">
            <div className="w-40">End Auction</div>{" "}
            <div>: {formatDate(data.endTime)}</div>
          </div>
          <div className="w-full  flex ">
            <div className="w-40">Min Bid Increment</div>
            <div>: {data.minBidIncrement}</div>
          </div>
          <div className="w-full  flex ">
            <div className="w-40">Auctioneer </div>
            <div>: {data.Seller?.email}</div>
          </div>
          <div className="w-full  flex ">
            <div className="w-40">Status </div>:
            <div className={ifStatus(data.status)}> {data.status}</div>
          </div>
          {data.status === "Active" && (
            <Link className="bg-blue-900 w-20 p-1 rounded-lg flex justify-center items-center">
              BID
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// {
//     "id": 1,
//     "SneakerId": 1,
//     "startingPrice": 1000000,
//     "currentPrice": 1500000,
//     "reservePrice": 1800000,
//     "minBidIncrement": 50000,
//     "startTime": "2025-02-01T10:00:00.000Z",
//     "endTime": "2025-02-05T10:00:00.000Z",
//     "allowAutoBid": true,
//     "buyNowPrice": 2200000,
//     "status": "Closed",
//     "WinnerId": 4,
//     "UserId": 2,
//     "totalBids": 5,
//     "createdAt": "2025-01-23T15:29:01.852Z",
//     "updatedAt": "2025-01-23T15:29:01.852Z",
//     "Sneaker": {
//         "id": 1,
//         "name": "Nike Air Jordan 1",
//         "price": 1500000,
//         "brand": "Nike",
//         "releaseYear": 2018,
//         "size": "10 US",
//         "condition": "DS",
//         "colorway": "Chicago",
//         "collaboration": "Off-White",
//         "imageUrl": "https://senikersku.com/wp-content/uploads/2022/05/Off-White-x-Air-Jordan-1-Retro-High-OG-Chicago-1.png",
//         "box": "Original Box",
//         "UserId": 2,
//         "authenticityStatus": "Verified",
//         "createdAt": "2025-01-23T15:28:52.169Z",
//         "updatedAt": "2025-01-28T07:25:14.233Z"
//     },
//     "Seller": {
//         "id": 2,
//         "email": "seller1@gmail.com",
//         "role": "Seller",
//         "isVerifiedReseller": true,
//         "resellerVerificationStatus": "Accepted",
//         "createdAt": "2025-01-23T15:28:45.523Z",
//         "updatedAt": "2025-01-23T15:28:45.523Z"
//     },
//     "Winner": {
//         "id": 4,
//         "email": "kimminji@gmail.com",
//         "role": "Buyer",
//         "isVerifiedReseller": true,
//         "resellerVerificationStatus": "Accepted",
//         "createdAt": "2025-01-23T15:28:45.689Z",
//         "updatedAt": "2025-01-23T15:28:45.689Z"
//     }
// }
