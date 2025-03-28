import { Box, Button, Grid, Typography } from "@mui/material";
import NextLink from "next/link";

const routes = [
  { name: "Fragment Map", route: "/bozja/Farming" },
  { name: "Farming Weather", route: "/bozja/Farming/Farming_Windows/Bozjan%20Southern%20Front/Care" },
];

export default function Home(props: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div>
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Farming
          </Typography>
        </div>
        <div>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                minHeight: "75px",
                maxWidth: "1250px",
                marginBottom: "5px",
                alignItems: "top",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {routes.map((route, index) => (
                <Grid
                  key={`${route.name}-${index}`}
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    maxHeight: "50px",
                    minWidth: "250px",
                  }}
                >
                  <Button
                    component={NextLink}
                    size="large"
                    style={{ minWidth: "250px" }}
                    variant={"contained"}
                    href={route.route}
                  >
                    {route.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
      {props.children}
    </>
  );
}
