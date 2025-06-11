import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/pages/Login";
import Register from "./components/pages/Register";
import Chat from "./components/pages/Chat";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
      <ToastContainer theme="dark" autoClose={700}  />
    </BrowserRouter>
  );
}

export default App;
