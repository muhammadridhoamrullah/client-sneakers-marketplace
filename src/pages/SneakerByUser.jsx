import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import instance from "../axiosInstance";
import { Link } from "react-router-dom";

export default function SneakerByUser() {
  const [sneakersByUser, setSneakersByUser] = useState([]);

  async function getSneakersByUser() {
    try {
      const response = await instance.get("/sneakers/user", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setSneakersByUser(response.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getSneakersByUser();
  }, []);

  async function deleteSneaker(sneakerId) {
    try {
      const response = await instance.delete(`/sneakers/${sneakerId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      getSneakersByUser();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }
  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-start text-white pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">My Sneakers</h1>
      <div className="w-fit bg-gray-800 rounded-lg shadow-lg overflow-hidden ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                No
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Release Year
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Size
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Condition
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Colorway
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Collaboration
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Image URL
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Box
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {sneakersByUser.map((sneaker, index) => (
              <tr
                key={sneaker.id}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.price}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.brand}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.releaseYear}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.size}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.condition}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.colorway}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.collaboration}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={sneaker.imageUrl}>Link</Link>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {sneaker.box}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                  <Link
                    to={`/edit-sneaker/${sneaker.id}`}
                    className="cursor-pointer w-fit h-fit p-2 bg-orange-500 rounded-md hover:bg-orange-400"
                  >
                    Edit
                  </Link>
                  <button
                    className="cursor-pointer w-fit h-fit p-2 bg-red-500 rounded-md hover:bg-red-400"
                    onClick={() => {
                      deleteSneaker(sneaker.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
