"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid2, Link } from "@mui/material";
import { openKeyState } from "@/hooks/shared/openKeyState";
import { useAtom } from "jotai";

export type BozjaAccordianProps = {
  Name: string;
  Guides: string[][];
  Additional: string[] | React.JSX.Element[];
};

function BozjaAccordians(props: BozjaAccordianProps) {
  const [openKey, setOpenKey] = useAtom(openKeyState);

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : null);
  };

  const card = (
    guideName: string,
    internalGuides: string[][],
    additionalGuides: string[] | React.JSX.Element[]
  ) => {
    const guideList: React.JSX.Element[] = [];

    internalGuides.forEach((element: string[], index) => {
      guideList.push(
        <p key={`${guideName}-${index}`} id={`${guideName}-${index}`}>
          <Link href={element[1]}>{element[0]}</Link>
        </p>
      );
    });

    if (additionalGuides) {
      additionalGuides.forEach((element: string | React.JSX.Element, index) => {
        if (typeof element == "string") {
          guideList.push(
            <p
              id={`additional-${guideName}-${index}`}
              key={`additional-${guideName}-${index}`}
              dangerouslySetInnerHTML={{ __html: element }}
            />
          );
        } else {
          guideList.push(
            <p
              id={`additional-${guideName}-${index}`}
              key={`additional-${guideName}-${index}`}
            >
              {element}
            </p>
          );
        }
      });
    }

    return (
      <Accordion
        expanded={openKey === guideName}
        onChange={() => {
          handleToggle(guideName);
        }}
        sx={{ minWidth: "250px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={guideName}
          id={guideName}
        >
          <Typography>{guideName}</Typography>
        </AccordionSummary>
        <AccordionDetails>{guideList}</AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={props.Name}>
      {card(props.Name, props.Guides, props.Additional)}
    </Grid2>
  );
}

export default BozjaAccordians;
