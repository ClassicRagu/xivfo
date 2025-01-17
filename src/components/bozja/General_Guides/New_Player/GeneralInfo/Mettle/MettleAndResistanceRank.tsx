"use client";
import { Box, Link, Modal, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function MettleAndResistanceRank() {
  const [resistanceMenuModelState, setResistanceMenuModelState] = React.useState(false);
  const [commanderModelState, setCommanderModelState] = React.useState(false);
  const [commanderLocationModelState, setCommanderLocationModelState] = React.useState(false);

  return (
    <div>
      <Link component={NextLink} href="#mettle">
        <Typography id="mettle" variant="h4" component="h3" sx={{ mb: 1 }}>
          Mettle and Resistance Rank
        </Typography>
      </Link>
      <Typography component="p" sx={{ mb: 2 }}>
        In StQ zones Mettle acts as your EXP and Resistance Rank acts as your
        level. You can view your current Mettle and Resistance Rank at any time
        in instance on the small red menu the game provides you:
      </Typography>
      <Box
        component="img"
        sx={{
          minWidth: "250px",
          width: "25%",
          height: "auto",
        }}
        alt="The StQ Resistance Rank Menu"
        src="/Bozja/Guide/BozjaResistanceRank.png"
        onClick={() => {
          setResistanceMenuModelState(true);
        }}
      />
      <Typography component="p" sx={{ mb: 2 }}>
        Increasing your resistance rank is your main goal in Bozja as it:
        increases your mettle earned, allows you to continue the story, unlocks
        new zones, and allows you to appraise more Forgotten Fragments.
        <br /> <br />
        <b>
          It is incredibly important to increase your Resistance Rank whenever
          possible for the Mettle earned increase alone.
        </b>
        <br />
        <br />
        In order to increase your rank you must grind Mettle which can only be
        obtained by completing Skirmishes and Critical Engagements which we
        explain later in this guide.
        <br />
        Once you have enough Mettle to rank up, arrows will appear next to the
        Mettle display in your menu. Once this displays return to base camp,
        this can be done using Return or by walking back, and talk to the
        Resistance Commander:
      </Typography>
      <div style={{flexDirection: "row",}}>
      <Box
        component="img"
        sx={{
          minWidth: "250px",
          width: "25%",
          height: "auto",
        }}
        alt="The StQ Resistance Rank Menu"
        src="/Bozja/Guide/BozjaCommander.png"
        onClick={() => {
          setCommanderModelState(true);
        }}
      />
      <Box
        component="img"
        sx={{
          minWidth: "250px",
          width: "25%",
          height: "auto",
        }}
        alt="The StQ Resistance Rank Menu"
        src="/Bozja/Guide/BozjaCommanderLocation.png"
        onClick={() => {
          setCommanderLocationModelState(true);
        }}
      />
      </div>
      <Modal
        open={resistanceMenuModelState}
        onClose={() => setResistanceMenuModelState(false)}
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
            maxWidth: 700,
          }}
          src="/Bozja/Guide/BozjaResistanceRank.png"
        />
      </Modal>
      <Modal
        open={commanderModelState}
        onClose={() => setCommanderModelState(false)}
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
            maxWidth: 700,
          }}
          src="/Bozja/Guide/BozjaCommander.png"
        />
      </Modal>
      <Modal
        open={commanderLocationModelState}
        onClose={() => setCommanderLocationModelState(false)}
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
            maxWidth: 700,
          }}
          src="/Bozja/Guide/BozjaCommanderLocation.png"
        />
      </Modal>
    </div>
  );
}
