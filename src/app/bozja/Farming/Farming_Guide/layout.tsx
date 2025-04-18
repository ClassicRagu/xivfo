import { Typography } from "@mui/material";

export default function Home(props: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <div
          style={{ padding: "16px", paddingBottom: "0px", borderRadius: "8px", marginLeft: "0px" }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Solo Farming Guide (WIP)
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            Welcome to the farming guide, this is another page that is still a work in progress but the goal of it is to put builds, locations, and weather windows all in one place.
          </Typography>
        </div>
      </div>
      {props.children}
    </>
  );
}
