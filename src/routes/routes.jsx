import { Route, Routes } from "react-router-dom";
import Graphs from "../views/graphs";
import Home from "../views/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/graphs" element={<Graphs />} />
  </Routes>
);

export default Routing;
