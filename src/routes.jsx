import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import PopularSneakers from "./pages/PopularSneakers";
import DetailSneaker from "./pages/DetailSneaker";
import Brands from "./pages/Brands";
import SneakerByBrand from "./pages/SneakerByBrand";
import AddEditSneaker from "./pages/AddEditSneaker";
import SneakerByUser from "./pages/SneakerByUser";
import Auctions from "./pages/Auctions";
import AddAuction from "./pages/AddAuction";
import DetailAuction from "./pages/DetailAuction";
import AddBid from "./pages/AddBid";
import DetailBidByAuctionId from "./pages/DetailBidByAuctionId";
import MyAuctions from "./pages/MyAuctions";
import AddPreorder from "./pages/AddPreorder";
import Preorders from "./pages/Preorders";

function checkLogin() {
  if (!localStorage.access_token) {
    return redirect("/login");
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
  },
  {
    path: "/",
    element: <MainLayout />,
    loader: checkLogin,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-sneaker",
        element: <AddEditSneaker type={"add"} />,
      },
      {
        path: "edit-sneaker/:id",
        element: <AddEditSneaker type={"edit"} />,
      },
      {
        path: "popular-sneakers",
        element: <PopularSneakers />,
      },
      {
        path: "sneaker/:id",
        element: <DetailSneaker />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "brand/:brand",
        element: <SneakerByBrand />,
      },
      {
        path: "sneakers/user",
        element: <SneakerByUser />,
      },
      {
        path: "auctions",
        element: <Auctions />,
      },
      {
        path: "add-auction/:id",
        element: <AddAuction />,
      },
      {
        path: "auction/:id",
        element: <DetailAuction />,
      },
      {
        path: "add-bid/:id",
        element: <AddBid />,
      },
      {
        path: "bid-auction/:id",
        element: <DetailBidByAuctionId />,
      },
      {
        path: "my-auctions",
        element: <MyAuctions />,
      },
      {
        path: "add-preorder",
        element: <AddPreorder />,
      },
      {
        path: "/preorders",
        element: <Preorders />,
      },
    ],
  },
]);

export default router;
