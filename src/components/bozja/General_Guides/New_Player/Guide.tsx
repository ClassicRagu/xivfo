import { Divider, Typography } from "@mui/material";
import Unlockling from "./Unlocking/Unlocking";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import TableOfContents from "@/components/shared/TableOfContents";

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
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Welcome to Bozja!
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          This is a guide to help players through Bozja from start to finish.
        </Typography>
        <Unlockling />
        <Divider sx={{ m: 2 }} />
        <GeneralInfo />
      </div>
      <TableOfContents />
    </div>
  );
}
