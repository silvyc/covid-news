import { Route, Routes } from "react-router-dom";
import Country from "../views/country";
import About from "../views/about";
import Daily from "../views/daily"
import Home from "../views/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/daily" element={<Daily />} />
    <Route path="/about" element={<About />} />
    <Route path="/country" element={<Country />} />
  </Routes>
);

export default Routing;
