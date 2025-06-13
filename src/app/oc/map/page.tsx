"use client";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { useAtom } from "jotai";
import { bronzeState } from "@/hooks/oc/map/bronzeState";
import { silverState } from "@/hooks/oc/map/sivlerState";
import { potState } from "@/hooks/oc/map/potState";
import { bunnyState } from "@/hooks/oc/map/bunnyState";

const FragmentMap = dynamic(() => import("@/components/oc/map/OCMap"), {
  ssr: false,
});

function OccultCrescentMap() {
  const [bronze, setBronze] = useAtom(bronzeState);
  const [silver, setSilver] = useAtom(silverState);
  const [pot, setPot] = useAtom(potState);
  const [bunny, setBunny] = useAtom(bunnyState);

  return (
    <>
      {
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
              {"Thank you to infi's"}{" "}
              <Link href="https://github.com/Infiziert90/EurekaTrackerAutoPopper">
                Eureka Linker
              </Link>{" "}
              plugin for providing coordinate data.
            </p>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{mb: 2, display:"flex"}}>
                <FormControlLabel
                  style={{
                    alignItems: "left",
                    verticalAlign: "middle",
                    paddingTop: "5px",
                  }}
                  control={
                    <Checkbox
                      checked={bronze}
                      onClick={() => {
                        setBronze(!bronze);
                      }}
                    />
                  }
                  label="Bronze Chests"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  style={{
                    alignItems: "left",
                    verticalAlign: "middle",
                    paddingTop: "5px",
                  }}
                  control={
                    <Checkbox
                      checked={silver}
                      onClick={() => {
                        setSilver(!silver);
                      }}
                    />
                  }
                  label="Silver Chests"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  style={{
                    alignItems: "left",
                    verticalAlign: "middle",
                    paddingTop: "5px",
                  }}
                  control={
                    <Checkbox
                      checked={pot}
                      onClick={() => {
                        setPot(!pot);
                      }}
                    />
                  }
                  label="Pot Locations"
                />
              </FormControl>
              <FormControl>
                <FormControlLabel
                  style={{
                    alignItems: "left",
                    verticalAlign: "middle",
                    paddingTop: "5px",
                  }}
                  control={
                    <Checkbox
                      checked={bunny}
                      onClick={() => {
                        setBunny(!bunny);
                      }}
                    />
                  }
                  label="Bunny Locations"
                />
              </FormControl>
            </div>
          </Card>
        </div>
      }
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
