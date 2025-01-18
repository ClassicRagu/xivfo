import { Typography } from "@mui/material";

const routes = [
  { name: "Unlocking/General Info", route: "/bozja/General_Guides/New_Player" },
  { name: "The Bozjan Southern Front", route: "/bozja/General_Guides/New_Player/BSF" },
  { name: "Delubrum Reginae", route: "/bozja/General_Guides/New_Player/DRN" },
  { name: "Zadnor", route: "/bozja/General_Guides/New_Player/Zadnor" },
  { name: "The Dalriada", route: "/bozja/General_Guides/Dal" },
];

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
            Welcome to Bozja!
          </Typography>
          <Typography component="p" sx={{ mb: 2 }}>
            This is a guide to help players through Bozja from start to finish.
          </Typography>
          
        </div>
      </div>
      {props.children}
    </>
  );
}
