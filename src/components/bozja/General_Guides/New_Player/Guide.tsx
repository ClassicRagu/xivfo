import { Divider } from "@mui/material";
import Unlockling from "./Unlocking/Unlocking";
import TableOfContents from "@/components/shared/TableOfContents";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ActionsAndEssences from "./ActionsAndEssences/ActionsAndEssences";

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
        <GeneralInfo />
        <Divider sx={{ m: 2 }} />
        <ActionsAndEssences />
      </div>
      <TableOfContents />
    </div>
  );
}
