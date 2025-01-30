import { formatDate } from "../pages/DetailSneaker";
import { formatPrice } from "./CardHome";

export default function CardPreorders({ data }) {
  return (
    <div className="w-[500px] h-fit border border-white rounded-md flex flex-col p-4 justify-between gap-4">
      <div className="flex">
        <label className="w-28  font-semibold">NAME</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.name}
        </div>
      </div>

      <div className="flex">
        <label className="w-28  font-semibold">BRAND</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.brand}
        </div>
      </div>

      <div className="flex">
        <label className="w-28  font-semibold">RELEASE DATE</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {formatDate(data.releaseDate)}
        </div>
      </div>

      <div className="flex">
        <label className="w-28  font-semibold">EXPECTED DELIVERY DATE</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {formatDate(data.expectedDeliveryDate)}
        </div>
      </div>

      <div className="flex">
        <label className="w-28  font-semibold">PRICE</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {formatPrice(data.price)}
        </div>
      </div>

      <div className="flex">
        <label className="w-28  font-semibold">RETAIL PRICE</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {formatPrice(data.retailPrice)}
        </div>
      </div>

      {/* <div className="flex">
        <label className="w-28  font-semibold">DESCRIPTION</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md truncate">
          {data.description}
        </div>
      </div> */}

      <div className="flex">
        <label className="w-28  font-semibold truncate">GUARANTEED</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.guaranteed ? "YES" : "NO"}
        </div>
      </div>

      {/* <div className="flex">
        <label className="w-24  font-semibold">REFUND POLICY</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.refundPolicy}
        </div>
      </div> */}

      <div className="flex">
        <label className="w-24  font-semibold">STATUS</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.status}
        </div>
      </div>

      <div className="flex">
        <label className="w-24  font-semibold">TOTAL SLOTS</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.totalSlots}
        </div>
      </div>

      <div className="flex">
        <label className="w-24  font-semibold truncate">REMAINING SLOTS</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.remainingSlots}
        </div>
      </div>

      <div className="flex">
        <label className="w-24  font-semibold">CREATED AT</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {formatDate(data.createdAt)}
        </div>
      </div>

      <div className="flex">
        <label className="w-24  font-semibold">SELLER</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.User?.email}
        </div>
      </div>

      <div className="flex">
        <label className="w-24  font-semibold truncate">VERIFICATION</label>
        <div className="w-full  flex justify-center items-center border border-white rounded-md">
          {data.User?.resellerVerificationStatus}
        </div>
      </div>

      {/* hai */}
    </div>
  );
}

// [
//     {
//         "id": 2,
//         "name": "Asics GT-2160 Paris",
//         "brand": "Asics",
//         "releaseDate": "2025-02-28T17:00:00.000Z",
//         "expectedDeliveryDate": "2025-03-14T17:00:00.000Z",
//         "price": 2000000,
//         "retailPrice": 1800000,
//         "description": "Sneaker GT-2160™ yang dibuat untuk menghormati bahasa desain teknis.",
//         "imageUrl": "https://www.planetsports.asia/media/catalog/product/cache/d115ea397cb76e5ae9b04f346a5e8967/0/1/01-ASICS-FFSSEASIA-ASI23A570750-Cream.jpg",
//         "retailStore": "Asics Official Store",
//         "guaranteed": true,
//         "refundPolicy": "Refund hanya dapat dilakukan jika pesanan dibatalkan sebelum dikirim.",
//         "status": "Active",
//         "UserId": 2,
//         "totalSlots": 200,
//         "remainingSlots": 200,
//         "createdAt": "2025-01-24T07:42:51.388Z",
//         "updatedAt": "2025-01-24T07:42:51.388Z",
//         "User": {
//             "id": 2,
//             "email": "seller1@gmail.com",
//             "role": "Seller",
//             "isVerifiedReseller": true,
//             "resellerVerificationStatus": "Verified",
//             "createdAt": "2025-01-23T15:28:45.523Z",
//             "updatedAt": "2025-01-23T15:28:45.523Z"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Asics GT-2160 ",
//         "brand": "Asics",
//         "releaseDate": "2025-02-28T17:00:00.000Z",
//         "expectedDeliveryDate": "2025-03-14T17:00:00.000Z",
//         "price": 2000000,
//         "retailPrice": 1800000,
//         "description": "Sneaker GT-2160™ yang dibuat untuk menghormati bahasa desain teknis.",
//         "imageUrl": "https://www.planetsports.asia/media/catalog/product/cache/d115ea397cb76e5ae9b04f346a5e8967/0/1/01-ASICS-FFSSEASIA-ASI23A570750-Cream.jpg",
//         "retailStore": "Asics Official Store",
//         "guaranteed": true,
//         "refundPolicy": "Refund hanya dapat dilakukan jika pesanan dibatalkan sebelum dikirim.",
//         "status": "Active",
//         "UserId": 2,
//         "totalSlots": 200,
//         "remainingSlots": 200,
//         "createdAt": "2025-01-24T08:03:24.576Z",
//         "updatedAt": "2025-01-24T08:03:24.576Z",
//         "User": {
//             "id": 2,
//             "email": "seller1@gmail.com",
//             "role": "Seller",
//             "isVerifiedReseller": true,
//             "resellerVerificationStatus": "Verified",
//             "createdAt": "2025-01-23T15:28:45.523Z",
//             "updatedAt": "2025-01-23T15:28:45.523Z"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Flex Advantage 5.0 Men's Training Shoes",
//         "brand": "Skechers",
//         "releaseDate": "2025-01-30T00:00:00.000Z",
//         "expectedDeliveryDate": "2025-02-14T00:00:00.000Z",
//         "price": 799000,
//         "retailPrice": 999000,
//         "description": "Sepatu bertali dengan bahan rajutan berteknologi serta Air-Cooled Memory Foam",
//         "imageUrl": "https://www.skechers.id/media/catalog/product/cache/9481fad4f13408bc2383878983252d71/0/8/0888-SKE232826BKY00511H-1.jpg",
//         "retailStore": "Skechers.id",
//         "guaranteed": true,
//         "refundPolicy": "Refund hanya dapat dilakukan jika pesanan dibatalkan sebelum dikirim.",
//         "status": "Active",
//         "UserId": 6,
//         "totalSlots": 100,
//         "remainingSlots": 100,
//         "createdAt": "2025-01-29T14:40:02.892Z",
//         "updatedAt": "2025-01-29T14:40:02.892Z",
//         "User": {
//             "id": 6,
//             "email": "leehyein@gmail.com",
//             "role": "Seller",
//             "isVerifiedReseller": true,
//             "resellerVerificationStatus": "Verified",
//             "createdAt": "2025-01-24T13:20:02.370Z",
//             "updatedAt": "2025-01-24T14:16:06.324Z"
//         }
//     }
// ]
