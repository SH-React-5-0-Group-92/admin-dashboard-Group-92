import React from "react";
import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import Clients from "./pages/users/Clients";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Signup from "./components/Auth/Signup";
import Products from './pages/products/products'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="users">
              <Route path="client" element={<Clients />} />
            </Route>
            <Route path="new" element={<New />} />
            <Route path=":userId" element={<Single />} />

            <Route element={<ProtectedRoutes />}></Route>
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
