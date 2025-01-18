"use client";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";
import LoadoutGen from "./LoadoutGen";

export default function ActionsAndEssences() {
  return (
    <>
      <Link component={NextLink} href="#loadoutgen">
        <Typography id="loadoutgen" variant="h3" component="h2" sx={{ mb: 1 }}>
          What Actions and Essences are good?
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        Thank you to Carter Valentine for creating the original builds these
        suggestions are based on. <br />
        Use the tool provided below to get somewhat ideal builds for your rank.
        Any time it says None that means there is likely just no damage based
        action or essence, feel free to use something else like Lost Cure in
        it&apos;s place.
      </Typography>
      <LoadoutGen />
    </>
  );
}
