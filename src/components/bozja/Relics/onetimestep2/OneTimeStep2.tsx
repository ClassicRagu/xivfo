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

function OneTimeStep2() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "onetimestep2"}
        onChange={() => {
          handleToggle("onetimestep2");
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
              alt="Scalepower"
              src="/bozja/Relics/Skirmish.png"
            />
            <span style={{ verticalAlign: "middle" }}>
              <strong>One Time Grind #2: What Dreams Are Made Of</strong>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          This one time step requires you to complete 3 quests each requiring
          items obtained from Skirmishes and CEs:{" "}
          <ul>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Spare_Parts">
                Spare Parts
              </Link>
            </li>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Tell_Me_a_Story">
                Tell Me a Story
              </Link>
            </li>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/A_Fond_Memory">
                A Fond Memory
              </Link>
            </li>
          </ul>
          Each of these quests requires 30 of 2 items. Each item correlates to
          Skirmishes and Critical Engagements in each zone of Zadnor. This is
          simply completed by doing those Skirmishes and Critical Engagements.
          Though you may find that you are lacking the CE items in particular.
          <br />
          <br />
          The alternative raids are almost never worth it for the Skirmish items
          but it&apos;s a completely different story for the CE items. Due to
          the frequency of CEs spawning being quite low on average, it can be a
          better use of your time to do the raids. If you end up completing the
          Skirmish items and still need CE ones, you can queue for the following
          raids:
          <ul>
            <li>
              Spare Parts:{" "}
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Alexander_-_The_Burden_of_the_Father">
                Alexander The Burden of the Father
              </Link>
            </li>
            <li>
              Tell Me a Story:{" "}
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Deltascape_V3.0">
                Deltascape V3.0
              </Link>
            </li>
            <li>
              A Fond Memory:{" "}
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Eden%27s_Gate:_Inundation">
                Eden&apos;s Gate: Inundation
              </Link>
            </li>
          </ul>
          It should be noted, some discord servers, like{" "}
          <Link href="https://discord.gg/agentsofeureka">Agents of Eureka</Link> on
          NA, occasionally host cluster farms in Zadnor. These farms tend to
          spawn almost all of the CEs in the instance so it may be worth trying
          to join the same instance as those farming to complete the CE items.
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default OneTimeStep2;
