import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/products";
import Signup from "./components/Auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "react-toastify/dist/ReactToastify.css";
import ClientList from "./components/table/ClientTable";
import useToken from "./components/Auth/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="client" element={<ClientList />} />
            <Route element={<ProtectedRoutes />}></Route>
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
