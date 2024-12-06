import theme from "@/theme";
import {
  Box,
  CssBaseline
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";

export default function BaseLayout(props: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  marginTop: "30px"
                }}
              >
                {props.children}
              </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
