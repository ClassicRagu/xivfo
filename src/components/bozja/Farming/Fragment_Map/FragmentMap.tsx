"use client";
import { Card } from "@mui/material";
import {
  MapContainer,
  ImageOverlay,
  Popup,
  Marker,
  Circle,
} from "react-leaflet";

import { fragments } from "@/static/bozja/Farming/Fragment_Map/Actions";
import L, { Icon, LatLngBoundsExpression, LatLngTuple } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/bozja/Farming/Fragment_Map/fragmentState";
import { mapXY } from "@/functions/bozja/Farming/Fragment_Map/mapXY";
import { BSFClusterMobs } from "@/static/bozja/Farming/Fragment_Map/BSFClusterMobs";
import { magitekState } from "@/hooks/bozja/Farming/Fragment_Map/magitekState";
import { MapMarkers } from "./MapMarkers/MapMarkers";
import { ZadnorClusterMobs } from "@/static/bozja/Farming/Fragment_Map/ZadnorClusterMobs";

const bounds: LatLngBoundsExpression = [
  [1, 1],
  [42, 42],
];

type FragmentMapProps = {
  mapName: string
}

function FragmentMap(props: FragmentMapProps) {
  const {mapName} = props;
  const [fragment] = useAtom(fragmentState);
  const [magitek] = useAtom(magitekState);

  return (
    <div
      style={{
        justifyContent: "center",
        justifyItems: "center",
        display:"flex"
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
            maxZoom={8}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            crs={L.CRS.Simple}
            bounds={bounds}
          >
            {magitek && mapName == "BSF"
              ? BSFClusterMobs.map((x, index) => {
                  return (
                    <Circle
                      key={`cluster-mob-${index}`}
                      center={mapXY(x[0], x[1]) as LatLngTuple}
                      radius={0.06}
                      color={"grey"}
                    ></Circle>
                  );
                })
              : null}
            {magitek && mapName == "Zadnor"
              ? ZadnorClusterMobs.map((x, index) => {
                  return (
                    <Circle
                      key={`cluster-mob-${index}`}
                      center={mapXY(x[0], x[1]) as LatLngTuple}
                      radius={0.06}
                      color={"grey"}
                    ></Circle>
                  );
                })
              : null}
            {fragment && fragments[fragment].Quartermaster ? (
              <Marker
                position={mapXY(14.2, 29.6) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/Bozja/Farming/Fragment_Map/starsmile.png",
                    iconSize: [41, 41],
                    iconAnchor: [20, 21],
                  })
                }
              >
                <Popup>Resistance Quartermaster</Popup>
              </Marker>
            ) : null}
            {fragment && fragments[fragment].CLL ? (
              <Marker
                position={mapXY(18.9, 13.0) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/Bozja/Farming/Fragment_Map/CLL.png",
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                  })
                }
              >
                <Popup>CLL Prisoner Chests</Popup>
              </Marker>
            ) : null}
            {fragment && (fragments[fragment].DR || fragments[fragment].DRS) ? (
              <Marker
                position={mapXY(12.5, 32.1) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/Bozja/Farming/Fragment_Map/Save The Queen.png",
                    iconSize: [34, 34],
                    iconAnchor: [17, 17],
                  })
                }
              >
                <Popup>
                  Delubrum Reginae {fragments[fragment].DRS ? "(Savage)" : null}
                </Popup>
              </Marker>
            ) : null}
            {fragment && fragments[fragment].Dal ? (
              <Marker
                position={mapXY(25.9, 8.2) as LatLngTuple}
                icon={
                  new Icon({
                    iconUrl: "/Bozja/Farming/Fragment_Map/CLL.png",
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                  })
                }
              >
                <Popup>First Boss Dal Chest</Popup>
              </Marker>
            ) : null}
            <MapMarkers fragment={fragment} zone={mapName == "BSF" ? fragments[fragment].BSF : fragments[fragment].Zadnor} />
            <ImageOverlay url={mapName == "BSF" ? "/Bozja/Farming/Fragment_Map/The Bozjan Southern Front.jpg" : "/Bozja/Farming/Fragment_Map/Zadnor.jpg"} bounds={bounds} />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default FragmentMap;
