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

function RelicStep3() {
  const [openRelic, setOpenRelic] = useAtom(openRelicState);

  const handleToggle = (key: string) => {
    setOpenRelic(openRelic !== key ? key : null);
  };

  return (
    <>
      <Accordion
        expanded={openRelic === "step3"}
        onChange={() => {
          handleToggle("step3");
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
                marginRight: "5px",
              }}
              alt="BitterMemory"
              src="/bozja/Relics/step3/BitterMemory.png"
            />
            <span style={{ verticalAlign: "middle" }}>
              <strong>Step 3: The Will to Resist</strong>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          Step three requires you to obtain 6{" "}
          <Link href="https://ffxiv.consolegameswiki.com/wiki/Bitter_Memory_of_the_Dying">
            Bitter Memory of the Dying
          </Link>
          <p>
            <u>
              This is step almost idenical to step 2. I&apos;ve underlined some
              key differences for those who have already read that step.
            </u>
          </p>
          <p>
            There are multiple ways to obtain these but the quickest way to do
            every Bozja relic step is to actually do them in Bozja itself.
          </p>
          <p>
            The fastest way to get these memories is to join an omnifarm. These
            farms are hosted on average 1-2 times a month, usually over on CEM
            listed in our NA server list on the{" "}
            <Link component={NextLink} href="/">main guide page.</Link>{" "}
            <u>
              As an important note, a single omnifarm will likely get you enough
              memories for every single relic weapon.
            </u>
          </p>
          <p>
            If you don&apos;t want to wait for an omnifarm, it&apos;s best to
            form a cluster and/or fragment farm party in BSF or see about
            organzing one in a discord server like{" "}
            <Link href="https://discord.gg/foexiv">FOE</Link> as they tend to still be
            as fast as alternative methods like Blue Mage while giving you
            additional items like{" "}
            <Link href="https://ffxiv.consolegameswiki.com/wiki/Bozjan_Cluster">
              Bozjan Clusters
            </Link>{" "}
            in the process.
          </p>
          <Link href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit">
            For more information on fragment and cluster farming please feel
            free to look at this guide
          </Link>
          <p>
            <u>
              Though I heavily suggest omnifarms for this step, it can also be
              done relatively passively if you are leveling as you get 1 for
              doing Leveling Roulette daily.
            </u>
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RelicStep3;
