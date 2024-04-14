import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer";

export default function App() {
  const location = useLocation();

  let backgroundImage;
  switch (location.pathname) {
    case "/info/1":
      backgroundImage = "url(/baku_image.jpg)";
      break;
    default:
      backgroundImage = "url(/buta.svg)";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "full",
        backgroundColor: "rgba(0,0,0,.3)",
        backgroundBlendMode: "multiply",
        gap: 5,
      }}
    >
      <CssBaseline />
      <Header />
      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </Box>
  );
}
