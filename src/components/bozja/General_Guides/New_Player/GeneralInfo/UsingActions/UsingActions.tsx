"use client";
import { Link, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function UsingActions() {

  return (
    <div>
      <Link component={NextLink} href="#actions">
        <Typography id="actions" variant="h4" component="h3" sx={{ mb: 1 }}>
          Using Actions
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        There are a large variety of actions in StQ with different effects
        that we won&apos;t be going over in detail here. However there is one general
        type of action that I do think it&apos;s important to talk about here and
        it&apos;s actions that give you damage buffs.
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        StQ does not actually give you any damage boosting actions until rank
        8 with the first 2 notable ones being &quot;Banner of Noble Ends&quot; and &quot;Banner
        of Honored Sacrifice.&quot; Using them is quite simple, generally just use them on 2 minute windows!
      </Typography>
      <Typography component="p" sx={{ mb: 2 }}>
        Most of your damage in StQ is going to come from your burst windows under Lost Action buffs so make sure to use damage based Lost Actions as often as possible.
      </Typography>
    </div>
  );
}
