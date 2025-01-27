import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardHome from "../components/CardHome";

export default function Home() {
  const [dataSneakers, setFormDataSneakers] = useState([]);
  console.log(dataSneakers, "ini data sneakers di home");

  async function getSneakers() {
    try {
      const response = await instance.get("/sneakers", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response.data.data, "ini response di home");

      setFormDataSneakers(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getSneakers();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen  flex flex-wrap justify-center items-start gap-10 p-10 ">
      {dataSneakers.map((el, i) => {
        return <CardHome key={i} data={el} />;
      })}
    </div>
  );
}
