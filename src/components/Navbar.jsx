import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black opacity-90 text-white p-4 font-semibold">
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/add-sneaker"}>Add Sneaker</Link>
        <Link to={"/popular-sneakers"}>Popular</Link>
      </div>
      <Link to={"/add-auction"}>Add Auction</Link>
      <Link
        onClick={() => {
          localStorage.clear();
        }}
      >
        Logout
      </Link>
    </div>
  );
}
