import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { data } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component={Paper} sx={{ width: "100%", marginY: 2 }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          indicatorColor="none"
        >
          {data &&
            data.map((x) => (
              <Tab
                disableRipple
                key={x.key}
                label={x.label}
                {...a11yProps(x.key)}
                sx={{
                  backgroundColor: "#3F4C3B",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              />
            ))}
        </Tabs>
      </Box>
      <Box sx={{ width: "100%", paddingX: 8, paddingY: 2 }}>
        {data &&
          data[value].texts.map((x) => (
            <Stack
              sx={{ borderLeftWidth: 4, borderColor: "#3F4C3B", marginY: 2 }}
              spacing={5}
              key={x.key}
              value={value}
              index={x.key}
            >
              <Item>{x.text}</Item>
            </Stack>
          ))}
      </Box>
    </Box>
  );
}

BasicTabs.propTypes = {
  data: PropTypes.array,
};
