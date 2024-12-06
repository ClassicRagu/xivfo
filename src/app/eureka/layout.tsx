import GeneratedSidebar, {
  SidebarSection,
} from "@/components/shared/GeneratedSidebar";
import { Box, Container } from "@mui/material";
import * as React from "react";

export default function PersistentDrawerLeft(props: {
  children: React.ReactNode;
}) {
  const sidebarData: SidebarSection[] = [
    {
      name: "Eureka",
      contents: [
        {
          name: "lynn.pet",
          url: "https://www.lynn.pet",
          external: true,
        },
      ],
    },
  ];

  return (
    <GeneratedSidebar sidebarSections={sidebarData}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children}
        </Box>
      </Container>
    </GeneratedSidebar>
  );
}
