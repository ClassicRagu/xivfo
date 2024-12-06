"use client";
import { Box, Divider, Link, Modal, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function Guide() {
  const [scalpowderModelState, setScalpowderModelState] = React.useState(false);

  return (
    <>
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Welcome to Bozja!
      </Typography>
      <Link component={NextLink} href="#unlocking">
        <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
          Unlocking Bozja
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        Bozja is unlocked by first completing the{" "}
        <Link href="https://ffxiv.consolegameswiki.com/wiki/Return_to_Ivalice">
          Return to Ivalice
        </Link>{" "}
        questline. <br />
        Once Return to Ivalice is completed you can begin the quest{" "}
        <Link href="https://ffxiv.consolegameswiki.com/wiki/Hail_to_the_Queen">
          Hail to the Queen
        </Link>
        .<br />
        Both quest lines are started in the same location as shown below, Kugane
        (12.2, 12.3).
      </Typography>
      <Box
        component="img"
        sx={{
          width: "15%",
          height: "auto",
        }}
        alt="Bozja Quest Start Location"
        src="/Bozja/Guide/BozjaStart.png"
        onClick={() => {
          setScalpowderModelState(true);
        }}
      />
      <Divider sx={{ m: 2 }} />
      <div id="bsf">
        <Link component={NextLink} href="#bsf">
          <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
            I&apos;ve unlocked The Bozjan Southern Front, now what?
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Garbagetext <br />
          Once Return to Ivalice is completed you can begin the quest{" "}
          <Link href="https://ffxiv.consolegameswiki.com/wiki/Hail_to_the_Queen">
            Hail to the Queen
          </Link>
          .<br />
          Both quest lines are started in the same location as shown below,
          Kugane (12.2, 12.3).
        </Typography>
      </div>
      <div id="next">
      <Link component={NextLink} href="#next">
        <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
          Test
        </Typography>
      </Link>
      </div>
      <Modal
        open={scalpowderModelState}
        onClose={() => setScalpowderModelState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "auto",
            maxWidth: 900,
          }}
          src="/Bozja/Guide/BozjaStart.png"
        />
      </Modal>
    </>
  );
}
