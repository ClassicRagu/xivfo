"use client";
import { openRelicState } from "@/hooks/bozja/Relics/openRelicState";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Box
} from "@mui/material";
import { useAtom } from "jotai";
import NextLink from "next/link";

function RelicStep2() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step2"}
        onChange={() => {
          handleToggle("step2");
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
              alt="TorturedMemory"
              src="/bozja/Relics/step2/TorturedMemory.png"
            />
            <Box
              component="img"
              sx={{
                width: "30px",
                height: "30px",
                verticalAlign: "middle",
                marginRight: "5px"
              }}
              alt="SorrowfulMemory"
              src="/bozja/Relics/step2/SorrowfulMemory.png"
            />
            <Box
              component="img"
              sx={{
                width: "30px",
                height: "30px",
                verticalAlign: "middle",
                marginRight: "5px"
              }}
              alt="HarrowingMemory"
              src="/bozja/Relics/step2/HarrowingMemory.png"
            />
            <span style={{ verticalAlign: "middle" }}>
          <strong>Step 2: For Want of a Memory</strong>
          </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Step two requires you to obtain 20 of 3 types of memories:
          <ul>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Tortured_Memory_of_the_Dying">
                Tortured Memory of the Dying
              </Link>
            </li>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Sorrowful_Memory_of_the_Dying">
                Sorrowful Memory of the Dying
              </Link>
            </li>
            <li>
              <Link href="https://ffxiv.consolegameswiki.com/wiki/Harrowing_Memory_of_the_Dying">
                Harrowing Memory of the Dying
              </Link>
            </li>
          </ul>
          There are multiple ways to obtain these but the quickest way to do
          every Bozja relic step is to actually do them in Bozja itself.
          <p>
            The fastest way to get these memories is to join an omnifarm. These
            farms are hosted on average 1-2 times a month, usually over on CEM
            listed in our NA server list on the{" "}
            <Link component={NextLink} href="/">main guide page.</Link>
            <br />
            Omnifarms give on average 4-5 weapons worth of memories making them
            easily the best way to obtain them in the game.
          </p>
          <p>
            If you don&apos;t want to wait for an omnifarm, it&apos;s best to
            form a cluster and/or fragment farm party in BSF or see about
            organzing one in a discord server like{" "}
            <Link href="https://discord.gg/foexiv">FOE</Link> (NA Only) as they tend
            to still be as fast as alternative methods like Blue Mage while
            giving you additional items like{" "}
            <Link href="https://ffxiv.consolegameswiki.com/wiki/Bozjan_Cluster">
              Bozjan Clusters
            </Link>{" "}
            in the process.
          </p>
          <p>
            <Link href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit">
              For more information on fragment and cluster farming please feel
              free to look at this guide
            </Link>
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep2;
