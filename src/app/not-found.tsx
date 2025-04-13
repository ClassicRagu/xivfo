import ButtonBaseDemo from '@/components/shared/HomePageButtons';
import {
    AppBar,
    Box, Toolbar
} from "@mui/material";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
    title: "FFXIV Field Operations",
    description: "A website that provides and links guides for various FFXIV Field Operations content",
};

const images = [
    {
        url: '/Eureka%20Anemos.webp',
        title: 'The Forbidden Land Eureka',
        pageUrl: "/eureka"
    },
    {
        url: '/Bozjan%20Southern%20Front.webp',
        title: 'Save the Queen (Bozja)',
        pageUrl: "/bozja"
    },
    {
        url: '/OC/OCPreview.jpg',
        title: 'Occult Crescent (Coming in 7.25)',
        pageUrl: "/oc"
    },
];

export default function NotFound() {

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                pt: 3,
                marginTop: "30px"
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
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
                                404 - Not Found
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                        404 - Not Found
                    </Typography>
                    <Typography component="p" sx={{ mb: 2 }}>
                        While this page might not exist, these do:
                    </Typography>
                    <ButtonBaseDemo images={images} />
                </Box>
            </Container>
        </Box>
    );
}
