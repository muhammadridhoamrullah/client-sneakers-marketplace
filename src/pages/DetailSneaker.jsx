import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { formatPrice } from "../components/CardHome";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("id-ID", options); // Menggunakan format Indonesia
};

export default function DetailSneaker() {
  const { id } = useParams();

  const [detailSneaker, setDetailSneaker] = useState({});

  async function getDetailSneaker() {
    try {
      const response = await instance.get(`/sneakers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setDetailSneaker(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getDetailSneaker();
  }, []);
  return (
    <div className="bg-black w-full min-h-screen flex justify-center items-start text-white pt-10">
      <div className="w-[1000px] h-96 border border-white rounded-xl flex ">
        <div className="flex-1 w-full h-full ">
          <img
            src={detailSneaker.imageUrl}
            alt={detailSneaker.name}
            className="w-full h-full object-cover rounded-l-xl  "
          />
        </div>
        <div className="flex-1/5 flex  p-4">
          <div className="w-full flex flex-col gap-4">
            <div className="font-bold text-2xl text-red-400">
              {detailSneaker.brand}
            </div>

            <div className="font-semibold text-3xl">{detailSneaker.name}</div>
            <div className="font-semibold text-lg border border-white w-fit p-2 rounded-lg">
              {detailSneaker.size} - {detailSneaker.condition}
            </div>

            <div className="font-bold text-2xl">
              {formatPrice(detailSneaker.price)}
            </div>
            <div className="font-semibold">
              Release Year : {detailSneaker.releaseYear}
            </div>
          </div>
          <div className="w-full flex flex-col gap-4  ">
            {detailSneaker.collaboration && (
              <div className="font-semibold">{detailSneaker.collaboration}</div>
            )}
            <div className="flex flex-col  gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold w-24">Box</span>:
                <span>{detailSneaker.box}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold w-24">Colorway</span>:
                <span>{detailSneaker.colorway}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold w-24">Authenticity</span>:
                <span>{detailSneaker.authenticityStatus}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold w-24">Email</span>:
                <span>{detailSneaker.User?.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold w-24">Uploaded at</span>:
                <span>{formatDate(detailSneaker.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
