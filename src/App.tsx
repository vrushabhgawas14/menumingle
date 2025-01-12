import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/services"
            element={<h2 className="text-center text-2xl">Services</h2>}
          />
          <Route
            path="/product"
            element={<h2 className="text-center text-2xl">Product</h2>}
          />
          <Route
            path="/about"
            element={<h2 className="text-center text-2xl">About</h2>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
