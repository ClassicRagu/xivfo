"use client";
import { Card } from "@mui/material";
import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";

import L, { Icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import { mapXY } from "@/functions/bozja/Farming/Fragment_Map/mapXY";
import { bronze, bunny, pot, silver } from "@/static/oc/map/chests";
import { useAtom } from "jotai";
import { bronzeState } from "@/hooks/oc/map/bronzeState";
import { silverState } from "@/hooks/oc/map/sivlerState";
import { potState } from "@/hooks/oc/map/potState";
import { bunnyState } from "@/hooks/oc/map/bunnyState";
import { MapMarkers } from "./MapMarkers/LevelMarkers";

const bounds: LatLngBoundsExpression = [
  [1, 1],
  [42, 42],
];

type FragmentMapProps = {
  dragging: boolean;
  maxZoom: number;
  maxWidth: number;
};

function OCMap(props: FragmentMapProps) {
  const [bronzes] = useAtom(bronzeState)
    const [silvers] = useAtom(silverState)
    const [pots] = useAtom(potState)
    const [bunnies] = useAtom(bunnyState)

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: props.maxWidth,
        width: "100%",
      }}
      style={{
        textAlign: "center",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", height: "650px" }} className="App">
        <MapContainer
          center={[21.5, 21.5]}
          zoom={4}
          minZoom={4}
          maxZoom={props.maxZoom}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
          crs={L.CRS.Simple}
          bounds={bounds}
          dragging={props.dragging}
        >
          {bronzes ? bronze.map((x, index) => {
            return (
              <Marker
                key={`bronze-chest-${index}`}
                position={mapXY(x[0], x[1]) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/OC/map/060356_hr1.png",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  })
                }
              >
                <Popup>
                  X:{x[0]}, Y:{x[1]}
                </Popup>
              </Marker>
            );
          }) : null}
          {silvers ? silver.map((x, index) => {
            return (
              <Marker
                key={`silver-chest-${index}`}
                position={mapXY(x[0], x[1]) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/OC/map/060355_hr1.png",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  })
                }
              >
                <Popup>
                  X:{x[0]}, Y:{x[1]}
                </Popup>
              </Marker>
            );
          }) : null}
          {pots ? pot.map((x, index) => {
            return (
              <Marker
                key={`silver-chest-${index}`}
                position={mapXY(x[0], x[1]) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/OC/map/060354_hr1.png",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  })
                }
              >
                <Popup>
                  X:{x[0]}, Y:{x[1]}
                </Popup>
              </Marker>
            );
          }) : null}
          {bunnies ? bunny.map((x, index) => {
            return (
              <Marker
                key={`silver-chest-${index}`}
                position={mapXY(x[0], x[1]) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/OC/map/025207_hr1.png",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  })
                }
              >
                <Popup>
                  X:{x[0]}, Y:{x[1]}
                </Popup>
              </Marker>
            );
          }) : null}
          <MapMarkers minInputLevel={0} maxInputLevel={30} />
          <ImageOverlay url={"/OC/map/o6b1.png"} bounds={bounds} />
        </MapContainer>
      </div>
    </Card>
  );
}

export default OCMap;
