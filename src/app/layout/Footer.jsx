import { Box, Container, Link, Typography } from "@mui/material";
import data from "../data/data.json";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="left">
      {"©"} {new Date().getFullYear()}{" "}
      {"Freud Museum London. All rights reserved. "}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ opacity: "95%", backgroundColor: "black" }}>
      <Container
        sx={{
          opacity: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            gap: 20,
          }}
        >
          {data &&
            data.map((entry) => (
              <Box
                key={entry.key}
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography color="white" variant="body2" fontWeight={600}>
                  {entry.head}
                </Typography>
                {entry.links.map((x) => (
                  <Link sx={{ color: "white" }} key={x.key} href="#">
                    {x.title}
                  </Link>
                ))}
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: { xs: 2, sm: 4 },
            width: "100%",
          }}
        >
          <Typography sx={{ color: "white" }}>tel: +99465-465-46-44</Typography>
          <Typography sx={{ color: "white" }}>
            email: info@freud.org.uk
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 2, sm: 4 },
            width: "100%",
          }}
        >
          <div>
            <Link sx={{ color: "white" }} color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link sx={{ color: "white" }} color="text.secondary" href="#">
              Terms of Service
            </Link>
            <Copyright />
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              site by | ENTER GENERIC NAME |
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
