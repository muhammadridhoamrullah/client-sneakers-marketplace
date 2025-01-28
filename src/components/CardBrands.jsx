import { Link } from "react-router-dom";

export default function CardBrands({ data }) {
  return (
    <Link
      to={`/brand/${data.brand}`}
      className="w-40 h-40 border border-white rounded-4xl flex justify-center items-center"
    >
      <div className="font-extrabold text-xl">{data.brand}</div>
    </Link>
  );
}
