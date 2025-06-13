import Typography from "@mui/material/Typography";
import ButtonBaseDemo from "@/components/shared/HomePageButtons";
import { Box, Container } from "@mui/material";

const images = [
  {
    url: "/OC/THREE_OF_THEM.jpg",
    title: "OC Gearing",
    pageUrl: "/oc/Gearing",
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
