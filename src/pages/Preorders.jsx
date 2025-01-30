import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardPreorders from "../components/CardPreorders";

export default function Preorders() {
  const [getPreorders, setGetPreorders] = useState([]);

  async function getAllPreorders() {
    try {
      const response = await instance.get("/preorders", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response.data.data, "ini response data");

      setGetPreorders(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getAllPreorders();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex flex-wrap justify-center items-start pt-10 gap-4 text-white">
      {getPreorders.map((el, i) => {
        return <CardPreorders key={i} data={el} />;
      })}
    </div>
  );
}
