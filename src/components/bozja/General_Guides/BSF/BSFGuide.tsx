import { Button, Divider, Link, Typography } from "@mui/material";
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
          Welcome to The Bozjan Southern Front, the first of the Save the Queen zones.
        </Typography>
      </div>
      <TableOfContents />
    </div>
  );
}
