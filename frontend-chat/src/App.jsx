import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/pages/Login";
import Register from "./components/pages/Register";
import Chat from "./components/pages/Chat";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
