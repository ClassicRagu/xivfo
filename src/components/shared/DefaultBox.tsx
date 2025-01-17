import { Box, Card } from "@mui/material";

function DefaultBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
        }}
        style={{
          textAlign: "center",
          display: "column",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Card>
    </Box>
  );
}

export default DefaultBox;
