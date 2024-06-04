import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./pages/home/home";

import type { Config } from "./dist";

import { LaunchedProvider } from "./dist";
import { tags } from "./siteSchema";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const config: Config<typeof tags> = {
  tags,
};

root.render(
  // <React.StrictMode>
  <LaunchedProvider config={config}>
    <App />
  </LaunchedProvider>,
  // </React.StrictMode>
);
