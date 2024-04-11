import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer";

export default function App() {
  const location = useLocation();
  const backgroundImage =
    location.pathname === "/info" ? "url(/baku_image.jpg)" : "url(/buta.svg)";

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
      }}
    >
      <CssBaseline />
      <Header />
      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </Box>
  );
}
