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
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Pre-OC Gear Best in Slot
          </Typography>
          <Typography component="p">
            {"These are the best in slot sets for Occult Crescent before you unlock Arcanaut's gear"} <br/>
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
