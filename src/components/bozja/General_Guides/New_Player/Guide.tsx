"use client";
import { Divider } from "@mui/material";
import dynamic from "next/dynamic";
import Unlockling from "./Unlocking/Unlocking";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

const TableOfContent = dynamic(() => import("@/components/shared/TableOfContent"), {
  ssr: false,
});

export default function Guide() {

  return (
    <div
      style={{
        width: "90%",
        //margin: "0 auto",
        display: "flex",
        justifyContent: "left",
        marginBottom: "30px",
      }}
    >
      <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px" }}>
        <Unlockling />
        <Divider sx={{ m: 2 }} />
        <GeneralInfo />
      </div>
      <TableOfContent />
    </div>
  );
}
