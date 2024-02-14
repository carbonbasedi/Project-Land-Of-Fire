import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer";

export default function App() {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: "url(/buta1.jpg)",
        backgroundRepeat: "repeat",
        height: "full",
      }}
    >
      <CssBaseline />
      <Header />
      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </Box>
  );
}
