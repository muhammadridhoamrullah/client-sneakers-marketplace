import { formatDate } from "../pages/DetailSneaker";
import { formatPrice } from "./CardHome";

export default function CardHistoryBid({ data }) {
  return (
    <div className="w-80 h-fit rounded-md border border-white flex flex-col justify-between p-4 gap-4">
      <div className="flex gap-4">
        <label className="font-semibold w-48  ">Bidder</label>
        <div className="w-full h-fit p-1 border border-white rounded-md flex justify-center items-center font-semibold text-xs">
          {data?.User?.email}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="font-semibold w-48">Amount</label>
        <div className="w-full h-fit p-1 border border-white rounded-md flex justify-center items-center font-semibold">
          {formatPrice(data.amount)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="font-semibold w-48">Timestamp</label>
        <div className="w-full h-fit p-1 border border-white rounded-md flex justify-center items-center font-semibold">
          {formatDate(data.timestamp)}
        </div>
      </div>
      <div className="flex gap-4">
        <label className="font-semibold w-48">Is Highest Bid</label>
        <div className="w-full h-fit p-1 border border-white rounded-md flex justify-center items-center font-semibold">
          {data?.isHighestBid ? "Yes" : "No"}
        </div>
      </div>
    </div>
  );
}
