import { Link, Typography } from "@mui/material";
import NextLink from "next/link"

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
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Farming Guide (WIP)
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            Welcome to the farming guide, this is another page that is still a work in progress but the goal of it is to put builds, locations, and weather windows all in one place. <br/>
            Current functionality expects at least Rank 25 with 4 Rays of Valor due to me wanting to test all builds myself and only have 1 account with less than 10 rays in StQ.
          </Typography>
        </div>
      </div>
      {props.children}
    </>
  );
}
