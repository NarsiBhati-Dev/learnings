import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, HomePage, LoginPage, _404 } from "./pages";
import { RecoilRoot } from "recoil";

import React from "react";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
