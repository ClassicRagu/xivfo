import { Box, Button, Grid, Typography } from "@mui/material";
import NextLink from "next/link";

const routes = [
  { name: "Complete Guide (WIP)", route: "/bozja/General_Guides/New_Player" },
  { name: "General Guides Home", route: "/bozja/General_Guides" },
  //{ name: "Lost Action Guide", route: "./General_Guides/Lost_Actions" },
  { name: "FAQ", route: "/bozja/General_Guides/FAQ" },
];

export default function Home(props: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <div>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Guides
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
      {props.children}
    </div>
  );
}
