import GeneratedSidebar, {
  SidebarSection,
} from "@/components/shared/GeneratedSidebar";
import * as React from "react";

export default function PersistentDrawerLeft(props: {
  children: React.ReactNode;
}) {
  const sidebarData: SidebarSection[] = [
    {
      name: "",
      contents: [
        { name: "Bozja Home", url: "/bozja" },
      ],
    },
    {
      name: "General Guides",
      contents: [
        { name: "General Guides Home", url: "/bozja/General_Guides" },
        { name: "Complete Guide (WIP)", url: "/bozja/General_Guides/New_Player" },
        { name: "FAQ", url: "/bozja/General_Guides/FAQ" },
      ],
    },
    {
      name: "Farming",
      contents: [
        { name: "Fragment Map", url: "/bozja/Farming" },
        { name: "Farming Weather", url: "/bozja/Farming/Farming_Windows/Bozjan Southern Front/Care"}
      ],
    },
    {
      name: "Relics",
      contents: [
        { name: "Relic Tracker", url: "/bozja/Relics" },
        { name: "Relic Guide", url: "/bozja/Relics/Guide" }
      ],
    },
    {
      name: "Delubrum Reginae (Savage)",
      contents: [
        {
          name: "DRS Guide",
          url: "https://opalt.gitbook.io/delubrum-savage-basics",
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
