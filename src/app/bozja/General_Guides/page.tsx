"use client";
import React from "react";
import BozjaAccordians, {
  BozjaAccordianProps,
} from "@/components/shared/BozjaAccordians";
import { Box, Grid2 } from "@mui/material";

const guides = require("@/static/General_Guides/Guide_Links/guides.json");

export default function Home() {
  const formattedGuides: React.JSX.Element[] = [];

  guides.forEach((element: BozjaAccordianProps) => {
    formattedGuides.push(<BozjaAccordians {...element} key={`accordian-${element.Name}`}/>);
  });

  return (
    <Box
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        spacing={1}
        sx={{alignItems: "top", justifyContent: "center", width: "85%"}}
        style={{ minHeight: "200px" }}
      >
        {formattedGuides}
      </Grid2>
    </Box>
  );
}
