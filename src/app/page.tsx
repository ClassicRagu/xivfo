import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonBaseDemo from '@/components/shared/HomePageButtons';
import { AppBar, Toolbar } from '@mui/material';

const images = [
  {
    url: '/Eureka%20Anemos.png',
    title: 'The Forbidden Land Eureka',
    pageUrl: "/eureka"
  },
  {
    url: '/Bozjan%20Southern%20Front.png',
    title: 'Save the Queen (Bozja)',
    pageUrl: "/bozja"
  },
  {
    url: '',
    title: 'Shade\'s Triangle (Coming in 7.X)',
    pageUrl: ""
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            XIV Field Operations
          </Typography>
        </Toolbar>
      </AppBar>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          FFXIV Field Operations Guides and Tools
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          As a note this site is in very early Alpha and will be subject to plenty of change 
        </Typography>
        <ButtonBaseDemo images={images} />
      </Box>
    </Container>
  );
}