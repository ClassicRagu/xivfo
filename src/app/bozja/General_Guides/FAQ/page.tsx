import BozjaAccordians from "@/components/shared/BozjaAccordians";
import { Box, Grid2, Link } from "@mui/material";
import * as React from "react";

const faqs = require("@/static/bozja/General_Guides/FAQ/FAQ.json");

type FAQ = {
  Name: string;
  Info: string[];
  Links: string[][];
};

function FAQ() {
  const formattedFAQs: React.JSX.Element[] = [];

  faqs.forEach((element: FAQ) => {
    const formattedLinks: React.JSX.Element[] = [];
    element.Info.forEach((info: string, index) => {
      const splitInfo = info.split("<LINK>");
      const guideLink = splitInfo.length > 1 ? (
        <Link href={`${element.Links[index][1]}`}>
          {element.Links[index][0]}
        </Link> 
      ): null;
      formattedLinks.push(
        <>
          {splitInfo[0]}
          {guideLink}
          {splitInfo.length > 1 ? splitInfo[1] : null}
        </>
      );
    });
    formattedFAQs.push(
      <BozjaAccordians
        Name={element.Name}
        Guides={[]}
        Additional={formattedLinks}
        key={`FAQ-${element.Name}`}
      />
    );
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
        sx={{ alignItems: "top", justifyContent: "center", width: "75%" }}
        style={{ minHeight: "200px" }}
      >
        {formattedFAQs}
      </Grid2>
    </Box>
  );
}

export default FAQ;
