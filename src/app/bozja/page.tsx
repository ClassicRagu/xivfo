import Typography from "@mui/material/Typography";
import ButtonBaseDemo from "@/components/shared/HomePageButtons";
import { Box, Container } from "@mui/material";

const images = [
  {
    url: "/WhereEaglesNest.webp",
    title: "General Guides",
    pageUrl: "/bozja/General_Guides",
  },
  {
    url: "/Bozjan%20Southern%20Front.webp",
    title: "Farming",
    pageUrl: "/bozja/Farming",
  },
  /*{
    url: "/CLL.png",
    title: "Castrum Lacus Litore and The Dalriada",
    pageUrl: "/bozja/CLL_Dal",
  },
  {
    url: "/DR.png",
    title: "Delubrum Reginae",
    pageUrl: "/bozja/DR",
  },*/
  {
    url: "/BozjaRelics.webp",
    title: "Relics",
    pageUrl: "/bozja/Relics",
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
