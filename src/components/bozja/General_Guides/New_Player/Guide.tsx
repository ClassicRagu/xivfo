import { Divider, Link, Typography } from "@mui/material";
import Unlockling from "./Unlocking/Unlocking";
import TableOfContents from "@/components/shared/TableOfContents";
import NextLink from "next/link";
import LoadoutGen from "./LoadoutGen";

export default function Guide() {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "left",
        marginBottom: "30px",
      }}
    >
      <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px" }}>
        <Unlockling />
        <Divider sx={{ m: 2 }} />
        <Link component={NextLink} href="#geninfo">
          <Typography id="geninfo" variant="h3" component="h2" sx={{ mb: 1 }}>
            General Info
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          If you need a racap of the basic mechanics of StQ such as mettle,
          resistance rank, and the lost actions system I heavily suggest reading
          the{" "}
          <Link href="https://ffxiv.consolegameswiki.com/wiki/The_Bozjan_Southern_Front">
            Bozjan Southern Front ConsoleGamesWiki page
          </Link>
          . This page does a better job of explaining basic mechanics than I
          ever could.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Before we go into specific loadouts for each rank and talk about
          playing somewhat optimally we are going to go over a few points we
          consider important to new player that may not be mentioned in the
          ConsoleGamesWiki Guide:
        </Typography>
        <ul>
          <li>
            <b>Always rank up when possible:</b> Every rank up increases the
            amount of mettle you earn from every single Skirmish and Critical
            Engagement you do as well as unlocking more fragments to appraise,
            more holster capacity, more zones, and more story. When you can rank
            up, put everything down and go rank up.{" "}
          </li>
          <li>
            <b>Always use an essence when possible (preferably good ones):</b>{" "}
            Essences in StQ are incredibly important, using essences that
            increase your damage output specifically can make your experience in
            StQ far better. Essences remain active as long as you remain in the
            instance you applied it in, don&apos;t switch jobs, and don&apos;t click it
            off.{" "}
          </li>
          <li>
            <b>Always use actions when possible (preferably good ones):</b> Same
            reason as essences but actions will stay equipped equipped forever
            as long as you do not overwrite them.{" "}
          </li>
          <li>
            <b>
              Ask if there are any cluster farming parties you can join right
              away:
            </b>{" "}
            At base camp there is an NPC named the Resistance Quartermaster.
            This NPC allows you to trade in Bozjan Clusters for various items.
            Most items on this NPC are not important for you right away except
            for two, the riding maps. There are two maps for 25 clusters each
            and both are essential for getting to skirmishes faster. Getting 25
            clusters to at least get the BSF map should be one of your earliest
            goals as it will speed up your grind significantly.{" "}
          </li>
          <li>
            <b>Do not stay in BSF longer than you need to:</b> BSF is not a good
            zone for grinding mettle. Keeping up with the story quests and
            clearing Castrum Lacus Litore at rank 10 are important as the next
            zone, Zadnor, gives significantly more mettle.
          </li>
        </ul>
        <Link component={NextLink} href="#loadoutgen">
          <Typography
            id="loadoutgen"
            variant="h3"
            component="h2"
            sx={{ mb: 1 }}
          >
            What Actions and Essences are good?
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Thank you to Carter Valentine for creating the original builds these suggestions are based on. <br />
          Use the tool provided below to get somewhat ideal builds for your
          rank. Any time it says None that means there is likely just no damage
          based action or essence, feel free to use something else like Lost
          Cure in it&apos;s place.
        </Typography>
        <LoadoutGen />
      </div>
      <TableOfContents />
    </div>
  );
}
