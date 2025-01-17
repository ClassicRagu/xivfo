"use client";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";
import MettleAndResistanceRank from "./Mettle/MettleAndResistanceRank";
import ActionsEssencesAndItems from "./LostFindsCache/LostFindsCache";

export default function GeneralInfo() {

  return (
    <div>
      <Link component={NextLink} href="#geninfo">
        <Typography id="geninfo" variant="h3" component="h2" sx={{ mb: 1 }}>
          General Info
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        Before we enter The Bozjan Southern Front for the first time we&apos;ll go
        over some basic information. The game gives a pretty good tutorial on
        how basic things like mettle work but we will reiterate it here.
      </Typography>
      <MettleAndResistanceRank />
      <ActionsEssencesAndItems />
    </div>
  );
}
