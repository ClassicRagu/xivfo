import { Button, Divider } from "@mui/material";
import Unlockling from "./Unlocking/Unlocking";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import TableOfContents from "@/components/shared/TableOfContents";
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
      <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px" }}>
        <Button
          component={NextLink}
          size="large"
          style={{ minWidth: "200px", marginBottom:"30px" }}
          variant={"contained"}
          href={"/bozja/General_Guides/New_Player/BSF"}
        >
          {"The Bozjan Southern Front >"}
        </Button>
        <Unlockling />
        <Divider sx={{ m: 2 }} />
        <GeneralInfo />
        <Button
          component={NextLink}
          size="large"
          style={{ minWidth: "200px" }}
          variant={"contained"}
          href={"/bozja/General_Guides/New_Player/BSF"}
        >
          {"The Bozjan Southern Front >"}
        </Button>
      </div>
      <TableOfContents />
    </div>
  );
}
