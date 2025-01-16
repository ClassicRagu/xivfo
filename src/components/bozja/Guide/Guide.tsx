"use client";
import { Box, Divider, Link, Modal, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";

const TableOfContent = dynamic(() => import("./TableOfContent"), {
  ssr: false,
});

export default function Guide() {
  const [scalpowderModelState, setScalpowderModelState] = React.useState(false);

  return (
    <div
      style={{
        width: "90%",
        //margin: "0 auto",
        display: "flex",
        justifyContent: "left",
        marginBottom: "30px",
      }}
    >
      <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px" }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
          Welcome to Bozja!
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          This is a guide to help new players through Bozja from start to
          finish.
        </Typography>
        <Link component={NextLink} href="#unlocking">
          <Typography id="unlocking" variant="h3" component="h2" sx={{ mb: 1 }}>
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
          Both quest lines are started in the same location as shown below,
          Kugane (12.2, 12.3).
        </Typography>
        <Box
          component="img"
          sx={{
            width: "40%",
            height: "auto",
          }}
          alt="Bozja Quest Start Location"
          src="/Bozja/Guide/BozjaStart.png"
          onClick={() => {
            setScalpowderModelState(true);
          }}
        />
        <Divider sx={{ m: 2 }} />
        <div>
          <Link component={NextLink} href="#bsf">
            <Typography id="bsf" variant="h3" component="h2" sx={{ mb: 1 }}>
              The Bozjan Southern Front
            </Typography>
          </Link>
          <Typography component="p" sx={{ mb: 2 }}>
            Welcome to the first Save the Queen zone. The game gives a pretty
            good tutorial on how basic things like mettle work but we will
            reiterate it here.
          </Typography>
          <Link component={NextLink} href="#mettle">
            <Typography id="mettle" variant="h4" component="h3" sx={{ mb: 1 }}>
              Mettle and Resistance Rank
            </Typography>
          </Link>
          <Typography component="p" sx={{ mb: 2 }}>
            In StQ zones Mettle acts as your EXP and Resistance Rank acts as
            your level. You can view your current Mettle and Resistance Rank at
            any time in instance on the small red menu the game provides you:
          </Typography>
          <Box
            component="img"
            sx={{
              width: "25%",
              height: "auto",
            }}
            alt="The StQ Resistance Rank Menu"
            src="/Bozja/Guide/BozjaResistanceRank.png"
          />
          <Typography component="p" sx={{ mb: 2 }}>
            Increasing your resistance rank is your main goal in Bozja as it:
            increases your mettle earned, allows you to continue the story,
            unlocks new zones, and allows you to appraise more Forgotten
            Fragments.
            <br /> <br />
            <b>
              It is incredibly important to increase your Resistance Rank
              whenever possible for the Mettle earned increase alone.
            </b>
            <br />
            <br />
            In order to increase your rank you must grind Mettle which can only
            be obtained by completing Skirmishes and Critical Engagements which
            we explain later in this guide.
            <br />
            Once you have enough Mettle to rank up, arrows will appear next to
            the Mettle display in your menu. Once this displays return to base
            camp, this can be done using Return or by walking back, and talk to
            the Resistance Commander:
          </Typography>
        </div>
      </div>
      <TableOfContent />
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
    </div>
  );
}
