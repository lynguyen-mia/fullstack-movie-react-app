import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { APIContextProvider } from "./store/api-context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Browse />
  },
  { path: "/search", element: <Search /> }
]);

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
