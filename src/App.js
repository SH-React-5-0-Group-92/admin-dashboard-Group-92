import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Clients from "./pages/users/Clients";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route path="client" element={<Clients />} />
            </Route>
            <Route path="new" element={<New />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
