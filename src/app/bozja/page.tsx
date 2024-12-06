import Typography from "@mui/material/Typography";
import ButtonBaseDemo from "@/components/shared/HomePageButtons";
import { Box, Container } from "@mui/material";

const images = [
  {
    url: "/WhereEaglesNest.png",
    title: "New Player Guide",
    pageUrl: "/bozja/Guide",
  },
  {
    url: "/Bozjan%20Southern%20Front.png",
    title: "BSF and Zadnor",
    pageUrl: "/bozja/BSF_Zadnor",
  },
  {
    url: "/CLL.png",
    title: "Castrum Lacus Litore and The Dalriada",
    pageUrl: "/bozja/CLL_Dal",
  },
  {
    url: "/DR.png",
    title: "Delubrum Reginae",
    pageUrl: "/bozja/DR",
  },
  {
    url: "",
    title: "Misc",
    pageUrl: "/bozja/Misc",
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Save the Queen
        </Typography>
        <ButtonBaseDemo images={images} />
      </Box>
    </Container>
  );
}
