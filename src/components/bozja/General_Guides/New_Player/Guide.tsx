import { Box, Divider, Link, Typography } from "@mui/material";
import Unlockling from "./Unlocking/Unlocking";
import TableOfContents from "@/components/shared/TableOfContents";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ActionsAndEssences from "./ActionsAndEssences/ActionsAndEssences";
import NextLink from "next/link";

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
      <div style={{ paddingTop: "16px" }}>
        <Unlockling />
        <Divider sx={{ mt: 2, mb: 2 }} />
        <GeneralInfo />
        <Divider sx={{ mt: 2, mb: 2 }} />
        <ActionsAndEssences />
        <Divider sx={{ mt: 2, mb: 2}} />
        <Link component={NextLink} href="#potkit" style={{ display: "flex" }}>
          <Box
            component="img"
            sx={{
              verticalAlign: "middle",
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
            alt={"Resistance Potion Kit"}
            src={`/Bozja/Lost%20Finds/Resistance%20Potion%20Kit.png`}
          />
          <Typography id="potkit" variant="h3" component="h2" sx={{ mb: 1 }}>
            The Resistance Potion Kit
          </Typography>
        </Link>
        <Typography component="p" sx={{ mb: 2 }}>
          This section purely exists to really push the point home just how
          powerful Resistance Potion Kits are. They are obtained from Forgotten
          Fragments of Care at appear at a nearly 50% rate from the fragment.
          <br />
          <br />
          Resistance potion kits restore 50% of your HP when you fall below 50%
          of your HP. On top of this effect they are a 10 minute long buff that
          only has a 50% chance of falling off each time it procs.
          <br />
          <br />
          This incredibly powerful effect, the fact it&apos;s an item rather
          than an action, and it being easy to farm makes it one of the most
          useful tools in StQ. Once you are rank 5 stock up on a ton of these
          and carry them with you always.
          <br />
          <br />
          We&apos;ll have a better farming guide written on this site sometime in the
          future but for now take a look at{" "}
          <Link href="https://docs.google.com/presentation/d/1ax8nkureepnIoTTSdcNhyIHQgCLqbcZzoe_H8kpyunU/edit">
            this guide on how to farm in StQ
          </Link>{" "}
          if you want to start farming it yourself. You can begin farming them at Rank 8 when you unlock Lost Reflect.
        </Typography>
      </div>
      <TableOfContents />
    </div>
  );
}
