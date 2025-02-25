import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wall } from "./screens/Wall";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Wall />
  </StrictMode>,
);
