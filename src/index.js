import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProvider } from "./context/productcontex";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
