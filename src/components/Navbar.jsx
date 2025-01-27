import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black opacity-90 text-white p-4 font-semibold">
      <Link to={"/"}>Home</Link>
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
