import "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
