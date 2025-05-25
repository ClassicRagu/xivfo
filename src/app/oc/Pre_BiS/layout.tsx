import { Link, Typography } from "@mui/material";

export default function Home(props: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            padding: "16px",
            paddingBottom: "0px",
            borderRadius: "8px",
            marginLeft: "0px",
          }}
        >
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Pre-OC Gear Best in Slot {"(last updated 5/25/25)"}
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            These are the best in slot sets for Occult Crescent going into patch
            7.2.
            <br />
            It is possible to calcuate these sets ahead of time as we know the
            IL sync of the content will be 700.
            <br />
            <Link href={"https://discord.gg/foexiv"}>
              Most of these builds were made over on the Field Op Enjoyers
              Discord, you can join by clicking this.
            </Link>
          </Typography>
        </div>
      </div>
      {props.children}
    </>
  );
}
