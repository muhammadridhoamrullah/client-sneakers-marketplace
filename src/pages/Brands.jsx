import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardBrands from "../components/CardBrands";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const response = await instance.get("/brands", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setBrands(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex flex-wrap justify-center items-start text-white pt-10 gap-4">
      {brands.map((el, i) => {
        return <CardBrands key={i} data={el} />;
      })}
    </div>
  );
}
