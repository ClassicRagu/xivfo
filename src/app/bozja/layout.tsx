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
        { name: "General Guides", url: "/bozja/General_Guides" },
      ],
    },
    {
      name: "Everything Else",
      contents: [
        {
          name: "bozja.net",
          url: "https://www.bozja.net",
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
