import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { UrlParameter } from "../UrlParameter";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page1/detailA" element={<Page1DetailA />} />
      <Route path="/page1/detailB" element={<Page1DetailB />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page2/:id" element={<UrlParameter />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
