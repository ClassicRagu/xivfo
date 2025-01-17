"use client";
import * as React from "react";
import { Button, Grid2 } from "@mui/material";
import { useRouter } from "next/navigation";

function RelicToggle({ mode }: { mode: string }) {
  const router = useRouter();

  return (
    <Grid2
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
      <Grid2
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
      </Grid2>
      <Grid2
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
      </Grid2>
    </Grid2>
  );
}

export default RelicToggle;
