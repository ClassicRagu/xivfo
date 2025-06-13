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
          { name: "Occult Crescent Home", url: "/oc" },
          { name: "OC Gearing", url: "/oc/Gearing" },
        ],
      },
    ];
  
    return (
      <GeneratedSidebar sidebarSections={sidebarData} pageName="Occult Crescent">
        {props.children}
      </GeneratedSidebar>
    );
  }
  