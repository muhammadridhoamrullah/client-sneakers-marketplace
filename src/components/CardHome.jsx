import { Link } from "react-router-dom";

export function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CardHome({ data }) {
  return (
    <div className="text-black w-96 h-80 bg-white rounded-2xl flex flex-col">
      <Link
        className="flex-1  w-full h-1/2 flex justify-center items-center"
        to={`/sneaker/${data.id}`}
      >
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-fit h-full object-cover "
        />
      </Link>
      <div className="flex-1 w-full h-full bg-amber-100 rounded-b-2xl flex flex-col p-4 gap-2">
        <div className="font-bold text-gray-800">{data.brand}</div>
        <div className="font-extrabold">{data.name}</div>
        <div className="font-medium">Size: {data.size}</div>

        <div className="font-medium text-gray-800">Color: {data.colorway}</div>
        <div className="font-bold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
}
