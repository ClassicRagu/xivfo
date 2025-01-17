"use client";
import { openRelicState } from "@/hooks/bozja/Relics/openRelicState";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link
} from "@mui/material";
import { useAtom } from "jotai";

function OneTimeStep1() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "onetimestep1"}
        onChange={() => {
          handleToggle("onetimestep1");
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
                maxWidth: "30px",
                height: "auto",
                width: "auto",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
              alt="HauntingMemory"
              src="/Bozja/Relics/onetimestep1/HauntingMemory.png"
            />
            <Box
              component="img"
              sx={{
                maxWidth: "30px",
                height: "auto",
                width: "auto",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
              alt="VexatiousMemory"
              src="/Bozja/Relics/onetimestep1/VexatiousMemory.png"
            />
            <span style={{ verticalAlign: "middle" }}>
              <strong>One Time Grind #1: The Resistance Remembers</strong>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          This one time step requires you to obtain 18 of 2 types of memories:{" "}
          <ul>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Haunting_Memory_of_the_Dying">
                Haunting Memory of the Dying
              </Link>
            </li>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Vexatious_Memory_of_the_Dying">
                Vexatious Memory of the Dying
              </Link>
            </li>
          </ul>
          This one time step is the only step that cannot be completed at all in
          Bozja.
          <p>
            Haunting memories drop 3 at a time from the level 60 Alliance Raids
            while Vexatious memories drop 3 at a time from the level 70 Alliance
            Raids.
            <br />
            <br />
            According{" "}
            <Link href="https://ffxiv.consolegameswiki.com/wiki/Resistance_Weapons">
              ConsoleGamesWiki
            </Link>
            , they also drop at an estimated 61% per FATE completed in
            Stormblood Areas with Haunting dropping from Gyr Abania and
            Vexatious dropping from Othard.
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default OneTimeStep1;
