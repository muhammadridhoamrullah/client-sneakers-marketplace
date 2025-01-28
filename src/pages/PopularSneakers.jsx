import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import CardHome from "../components/CardHome";

export default function PopularSneakers() {
  const [popularSneakers, setPopularSneakers] = useState([]);

  async function getPopularSneakers() {
    try {
      const response = await instance.get("/sneakers/popular", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setPopularSneakers(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getPopularSneakers();
  }, []);
  return (
    <div className="bg-gray-900 w-full min-h-screen flex flex-col items-center justify-start text-white pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Popular Sneakers</h1>
      <div className="w-[500px] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {popularSneakers.map((sneaker, index) => (
              <tr
                key={sneaker.id}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
