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
          { name: "What We Know", url: "/oc/What_We_Know" },
          { name: "Pre-OC Best In Slot", url: "/oc/Pre_BiS" },
          { name: "Countdown", url: "/oc/Countdown" },
        ],
      },
    ];
  
    return (
      <GeneratedSidebar sidebarSections={sidebarData} pageName="Occult Crescent">
        {props.children}
      </GeneratedSidebar>
    );
  }
  