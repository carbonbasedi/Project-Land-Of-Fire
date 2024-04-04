import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  Button,
  AppBar,
} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import data from "../data/data.json";
import { MapOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {data.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.head} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ opacity: "70%", backgroundColor: "black" }}>
        <Toolbar sx={{ my: 1, mr: 3, ml: 3 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component={Link}
            to="/"
            fontWeight="700"
            sx={{ flexGrow: 1 }}
          >
            LAND OF FIRE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {data.map((item) => (
              <Box
                variant="h2"
                component={Link}
                to={item.path}
                key={item.key}
                sx={{ color: "#fff", fontSize: "15px" }}
                fontWeight="700"
              >
                <Button color="inherit">
                  <Typography>{item.head}</Typography>
                </Button>
              </Box>
            ))}
            <Button variant="h2" component="h1">
              <MapOutlined />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};
