"use client";
import * as React from "react";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

function RelicToggle({ mode }: { mode: string }) {
  const router = useRouter();

  return (
    <Grid
      container
      spacing={2}
      style={{
        minHeight: "75px",
        maxWidth: "1000px",
        alignItems: "top",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          maxHeight: "50px",
          minWidth: "250px",
        }}
      >
        <Button
          size="large"
          style={{ minWidth: "250px" }}
          onClick={() => router.push(`/bozja/Relics`)}
          variant={mode != "guide" ? "contained" : "outlined"}
        >
          Tracker
        </Button>
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          maxHeight: "50px",
          minWidth: "250px",
        }}
      >
        <Button
          size="large"
          style={{ minWidth: "250px" }}
          onClick={() => router.push(`/bozja/Relics/Guide`)}
          variant={mode == "guide" ? "contained" : "outlined"}
        >
          Guide
        </Button>
      </Grid>
    </Grid>
  );
}

export default RelicToggle;
