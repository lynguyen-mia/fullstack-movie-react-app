import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <HashRouter> */}
      {/* <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes> */}
      {/* </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;
