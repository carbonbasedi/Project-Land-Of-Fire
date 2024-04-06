import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../layout/About/About";
import Info from "../layout/Info/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);
