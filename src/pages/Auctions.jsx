import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardAuction from "../components/CardAuction";

export default function Auctions() {
  const [auctions, setAuctions] = useState([]);

  async function getSneakerAuction() {
    try {
      const response = await instance.get("/auctions", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response.data.data, "ini response di auction");

      setAuctions(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getSneakerAuction();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex flex-wrap justify-center items-start text-white py-10 gap-4">
      {auctions.map((el, i) => {
        return <CardAuction key={i} data={el} />;
      })}
    </div>
  );
}
