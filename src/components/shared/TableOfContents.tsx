"use client"
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const TableOfContent = dynamic(
  () => import("@/components/shared/TableOfContent"),
  {
    ssr: false,
  }
);

function TableOfContents() {
  return (
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
  );
}

export default TableOfContents;
