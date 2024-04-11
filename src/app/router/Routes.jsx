import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../pages/About/About";
import Info from "../pages/Info/Info";
import Cities from "../layout/menu/Cities";
import Map from "../pages/Map/Map";
import Art from "../pages/Art/Art";
import Music from "../pages/Music/Music";
import Food from "../pages/Food/Food";
import Lang from "../pages/Language/Lang";

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
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "art",
        element: <Art />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "lang",
        element: <Lang />,
      },
    ],
  },
]);
