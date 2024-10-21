// src/routes.jsx
import { createBrowserRouter, } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import ProductInfo from "./pages/ProductInfo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import RestrictedRoute from "./components/auth/RestrictedRoute";
import Chat from "./pages/Chat";
import Authenticated from "./components/auth/Authenticated";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product/:id",
        element: <ProductInfo />
      },
      {
        path: "/chat",
        element: <Authenticated>
          <Chat />
        </Authenticated>
      },
      {
        path: "/login",
        element: (
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <RestrictedRoute>
            <Register />
          </RestrictedRoute>
        ),
      },
      {
        path: "/forget-password",
        element: (
          <RestrictedRoute>
            <ForgetPassword />
          </RestrictedRoute>
        ),
      },
      {
        path: "/recover",
        element: (
          <RestrictedRoute>
            <PasswordRecovery />
          </RestrictedRoute>
        ),
      },
    ],
  },
]);

export default router;
