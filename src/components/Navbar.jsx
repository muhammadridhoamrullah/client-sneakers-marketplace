import { Link, redirect, useNavigate } from "react-router-dom";

function logout() {
  localStorage.removeItem("access_token");
  redirect("/login");
}

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black opacity-90 text-white p-4 font-semibold">
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/add-sneaker"}>Add Sneaker</Link>
        <Link to={"/popular-sneakers"}>Popular</Link>
        <Link to={"/brands"}>Brands</Link>
        <Link to={"/auctions"}>Auction</Link>
      </div>
      <div className="flex gap-4">
        <Link to={"/sneakers/user"}>My Sneakers</Link>
        <Link
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
