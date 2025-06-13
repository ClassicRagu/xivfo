import { Typography } from "@mui/material";

export default function Home(props: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div>
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            OC Map
          </Typography>
        </div>
      </div>
      {props.children}
    </>
  );
}
