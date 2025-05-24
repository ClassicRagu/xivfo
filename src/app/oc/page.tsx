import Typography from "@mui/material/Typography";
import ButtonBaseDemo from "@/components/shared/HomePageButtons";
import { Box, Container } from "@mui/material";

const images = [
  {
    url: "/OC/OCPreview.jpg",
    title: "What We Know So Far",
    pageUrl: "/oc/What_We_Know",
  },
  {
    url: "/OC/THREE_OF_THEM.jpg",
    title: "Pre-OC Best In Slot",
    pageUrl: "/oc/What_We_Know",
  },
  {
    url: "",
    title: "Countdown",
    pageUrl: "/oc/Countdown",
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
          Occult Crescent
        </Typography>
        <ButtonBaseDemo images={images} />
      </Box>
    </Container>
  );
}
