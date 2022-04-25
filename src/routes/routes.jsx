import { Route, Routes } from "react-router-dom";
import Countries from "../views/countries";
import Graphs from "../views/graphs";
import Home from "../views/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/graphs" element={<Graphs />} />
    <Route path="/countries" element={<Countries />} />
  </Routes>
);

export default Routing;
