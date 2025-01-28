import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import AddSneaker from "./pages/AddSneaker";
import PopularSneakers from "./pages/PopularSneakers";
import DetailSneaker from "./pages/DetailSneaker";

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
        element: <AddSneaker />,
      },
      {
        path: "popular-sneakers",
        element: <PopularSneakers />,
      },
      {
        path: "sneaker/:id",
        element: <DetailSneaker />,
      },
    ],
  },
]);

export default router;
