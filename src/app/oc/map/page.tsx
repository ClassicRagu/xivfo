"use client";
import {
  Card
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import OCMapToggles from "@/components/oc/map/OCMapLToggles";

const FragmentMap = dynamic(() => import("@/components/oc/map/OCMap"), {
  ssr: false,
});

function OccultCrescentMap() {

  return (
    <>
      <OCMapToggles />
      <div
        style={{
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
        }}
      >
        <FragmentMap dragging={true} maxZoom={8} maxWidth={800} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
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
          <p>
            FINAL FANTASY XIV © 2010 - 2025 SQUARE ENIX CO., LTD. FINAL FANTASY,
            FINAL FANTASY XIV, and FFXIV are registered trademarks or trademarks
            of Square Enix Holdings Co., Ltd. All material used under license.
          </p>
        </Card>
      </div>
    </>
  );
}

export default OccultCrescentMap;
