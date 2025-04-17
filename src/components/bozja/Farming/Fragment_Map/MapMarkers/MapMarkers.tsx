import { mapXY } from "@/functions/bozja/Farming/Fragment_Map/mapXY";
import { setColor } from "@/functions/bozja/Farming/Fragment_Map/setColor";
import { MonsterLocation } from "@/types/bozja/Farming/Fragment_Map/MonsterLocation";
import { Icon, LatLngExpression, LatLngTuple } from "leaflet";
import { Circle, Marker, Polygon, Popup } from "react-leaflet";

type MapMarkerProps = {
  fragment: string
  zone: MonsterLocation[][] | undefined
  farm: boolean
}

export function MapMarkers(props: MapMarkerProps) {
  const {fragment, zone} = props

  if (fragment !== "") {
    const tmp: React.JSX.Element[] = [];
    if (zone)
    zone.forEach((locations, index) => {
      locations.forEach((monster) => {
        if (monster.Level === "Star" && monster.Location && (!props.farm || (props.farm && monster.Farm))) {
          tmp.push(
            <Marker
              key={`${monster.Monster}-${index}`}
              position={[42.9 - monster.Location[1], monster.Location[0]]}
              icon={
                new Icon({
                  iconUrl: "/Bozja/Farming/Fragment_Map/starsmile.png",
                  iconSize: [41, 41],
                  iconAnchor: [20, 21],
                })
              }
            >
              <Popup>
                {monster.Monster} <br /> Level:{monster.Level}
              </Popup>
            </Marker>
          );
        } else if (monster && (!props.farm || (props.farm && monster.Farm))) {
          if (monster.Positions) {
            const positions = monster.Positions.map((x) => {
              return mapXY(x[0], x[1]);
            });
            tmp.push(
              <Polygon
                key={`${monster.Monster}-${index}`}
                pathOptions={{
                  fillColor: setColor(monster.Level),
                  color: setColor(monster.Level),
                }}
                positions={positions as LatLngTuple[]}
              >
                <Popup>
                  {monster.Monster} <br /> Level:{monster.Level} <br />{" "}
                  {monster.additionalInfo}
                </Popup>
              </Polygon>
            );
          } else if (monster.Level == "Critical Engagement") {
            if (monster.Location) {
              tmp.push(
                <Circle
                  key={`${monster.Monster}-${index}`}
                  center={
                    mapXY(
                      monster.Location[0],
                      monster.Location[1]
                    ) as LatLngExpression
                  }
                  pathOptions={{
                    fillColor: setColor(monster.Level),
                    color: setColor(monster.Level),
                  }}
                  radius={monster.radius ?? 1}
                >
                  <Popup>
                    {monster.Monster} <br /> Level:{monster.Level} <br />{" "}
                    {monster.additionalInfo}
                  </Popup>
                </Circle>
              );
            }
          }
        }
      });
    });
    return tmp;
  } else {
    return null;
  }
}
