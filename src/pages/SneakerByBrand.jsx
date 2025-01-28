import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardHome from "../components/CardHome";

export default function SneakerByBrand() {
  const { brand } = useParams();

  const [sneakerByBrand, setSneakerByBrand] = useState([]);

  async function getSneakerByBrand() {
    try {
      const response = await instance.get(`/sneakers/brand/${brand}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response.data.data, "ini response di sneaker by brand");

      setSneakerByBrand(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getSneakerByBrand();
  }, []);

  return (
    <div className="bg-black w-full min-h-screen flex flex-wrap justify-center items-start text-white pt-10 gap-4">
      {sneakerByBrand.map((el, i) => {
        return <CardHome key={i} data={el} />;
      })}
    </div>
  );
}
