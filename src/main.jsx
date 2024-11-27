import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { root } from "./root";
import ProiverConf from "./tools/provider";

createRoot(document.getElementById("root")).render(
  <ProiverConf>
    <RouterProvider router={root} />
  </ProiverConf>
);
