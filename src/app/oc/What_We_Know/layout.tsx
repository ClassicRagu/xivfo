import { Link, Typography } from "@mui/material";
import NextLink from "next/link"

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
          style={{ padding: "16px", paddingBottom: "0px", borderRadius: "8px", marginLeft: "0px" }}
        >
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            What We Know About Occult Crescent {"(as of 3/14/25)"}
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            Occult Crescent will be released in Patch 7.25 on May 27th 2025.<br/>
            <Link href="https://www.youtube.com/live/fydpys-4P4w" component={NextLink}>FINAL FANTASY XIV Letter from the Producer LIVE Part LXXXVI</Link><br />
            Thank you to Miuna and iluna minori in the FFXIV Reddit discord for translating much of the information in the live letter that is used here.<br />
            Additionally thank you to those in FOE and Savage Slimes who helped translate additional images.
          </Typography>
        </div>
      </div>
      {props.children}
    </>
  );
}
