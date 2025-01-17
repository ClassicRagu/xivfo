"use client";
import { openRelicState } from "@/hooks/bozja/Relics/openRelicState";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Modal,
} from "@mui/material";
import { useAtom } from "jotai";
import * as React from "react";

function RelicStep1() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);
  const [scalpowderModelState, setScalpowderModelState] = React.useState(false);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step1"}
        onChange={() => {
          handleToggle("step1");
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div>
            <Box
              component="img"
              sx={{
                width: "30px",
                height: "30px",
                verticalAlign: "middle",
                marginRight: "5px"
              }}
              alt="Scalepower"
              src="/Bozja/Relics/step1/Scalepowder.png"
            />
            <span style={{ verticalAlign: "middle" }}>
              <strong>Step 1: Resistance Is (Not) Futile</strong>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Step one requires you to obtain 4{" "}
          <Link href="https://ffxiv.consolegameswiki.com/wiki/Thavnairian_Scalepowder">
            Thavnairian Scalepowder
          </Link>{" "}
          which can be bought for a total of 1000 Allagan Tomestones of Poetics
          in Mor Dhona.
          <br />
          These can be obtained from Auriana in the location shown below in the
          &quot;Special Arms&quot; menu.
          <br />
          <br />
          <Box
            component="img"
            sx={{
              width: "50%",
              height: "auto",
            }}
            alt="Scalepower Location"
            src="/Bozja/Relics/step1/ScalepowderLocation.PNG"
            onClick={() => {
              setScalpowderModelState(true);
            }}
          />
        </AccordionDetails>
      </Accordion>
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
          src="/Bozja/Relics/step1/ScalepowderLocation.PNG"
        />
      </Modal>
    </>
  );
}

export default RelicStep1;
