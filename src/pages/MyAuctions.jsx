import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { useEffect, useState } from "react";
import CardMyAuctions from "../components/CardMyAuctions";

export default function MyAuctions() {
  const [myAuction, setMyAuction] = useState([]);

  async function getMyAuctions() {
    try {
      const response = await instance.get("/auctions/user", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response.data.data, "in");

      setMyAuction(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getMyAuctions();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex flex-wrap justify-center items-start pt-10 text-white gap-4">
      {myAuction.map((el, i) => {
        return <CardMyAuctions key={i} data={el} />;
      })}
    </div>
  );
}
