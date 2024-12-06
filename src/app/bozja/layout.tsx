import GeneratedSidebar, {
  SidebarSection,
} from "@/components/shared/GeneratedSidebar";
import * as React from "react";

export default function PersistentDrawerLeft(props: {
  children: React.ReactNode;
}) {
  const sidebarData: SidebarSection[] = [
    {
      name: "BSF + Zadnor",
      contents: [
        { name: "Farming", url: "/BSF_Zadnor/Farming" },
        {
          name: "Fragment Map",
          url: "https://www.bozja.net/map",
          external: true,
        },
      ],
    },
  ];

  return (
    <GeneratedSidebar sidebarSections={sidebarData}>
      {props.children}
    </GeneratedSidebar>
  );
}
