import { Link, Typography } from "@mui/material";
import TableOfContents from "@/components/shared/TableOfContents";
import NextLink from "next/link";

export default function BSFGuide() {
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
        <Link component={NextLink} href="#unlocking">
          <Typography id="unlocking" variant="h3" component="h2" sx={{ mb: 1 }}>
            The Bozjan Southern Front
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Welcome to The Bozjan Southern Front, BSF, the first of the Save the
          Queen zones.
        </Typography>
        <Link component={NextLink} href="#bsfstart">
          <Typography id="bsfstart" variant="h4" component="h3" sx={{ mb: 1 }}>
            What to do in BSF?
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Following most things in mentioned in the general information section
          will do you well in BSF but there are a few more specific details that
          should be mentioned here:
        </Typography>
        <ul>
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
          <li>
            <b>
              And just some points from the general info section as a reminder:
            </b>{" "}
            <ul>
              <li>Do Skirmishes and CEs for Mettle</li>
              <li>Always rank up when possible</li>
              <li>
                Always use an essence when possible (preferably good ones)
              </li>
              <li>Always use actions when possible (preferably good ones)</li>
            </ul>
          </li>
        </ul>
        <Typography component="p" sx={{ mb: 2 }}>
          As long as you follow these points getting through BSF should be a
          breeze.
        </Typography>
        <Link component={NextLink} href="#bsfrank">
          <Typography id="bsfrank" variant="h4" component="h3" sx={{ mb: 1 }}>
            What do I get for increasing my rank in BSF?
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          Increasing your rank is important for the mettle increase mentioned in
          the general info section but there are some more things ranking up
          does.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Increasing your Resistance Rank does the following: increases your
          holster&apos;s capacity, allows you to appraise new fragments, unlocks new
          story quests, and unlocks new subzones. Here is a table the displays
          everything for BSF:
        </Typography>
      </div>
      <TableOfContents />
    </div>
  );
}
