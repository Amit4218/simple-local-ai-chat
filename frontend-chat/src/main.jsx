import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./context/userAuth.jsx";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer theme="dark" autoClose={700} transition={Slide} />
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);
