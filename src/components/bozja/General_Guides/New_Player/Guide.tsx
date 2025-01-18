"use client";
import { Box, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import Unlockling from "./Unlocking/Unlocking";
import GeneralInfo from "./GeneralInfo/GeneralInfo";

const TableOfContent = dynamic(
  () => import("@/components/shared/TableOfContent"),
  {
    ssr: false,
  }
);

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
      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
        <nav
          style={{
            width: "350px",
            padding: "16px",
            alignSelf: "flex-start",
            position: "sticky",
            top: "48px",
            maxHeight: "calc(100vh - 70px)",
            overflow: "auto",
            marginTop: "150px",
          }}
        >
          <h1>{"On this page"}</h1>
          <TableOfContent />
        </nav>
      </Box>
    </div>
  );
}
