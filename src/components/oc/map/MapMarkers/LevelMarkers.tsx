import { mapXY } from "@/functions/bozja/Farming/Fragment_Map/mapXY";
import { setColor } from "@/functions/bozja/Farming/Fragment_Map/setColor";
import { levelzones } from "@/static/oc/map/levelzones";
import { MonsterLocation } from "@/types/bozja/Farming/Fragment_Map/MonsterLocation";
import { Icon, LatLngExpression, LatLngTuple } from "leaflet";
import { Circle, Marker, Polygon, Popup } from "react-leaflet";

export function MapMarkers(props: {
  minInputLevel: number;
  maxInputLevel: number;
}) {
  const tmp: React.JSX.Element[] = [];
  const newZones = levelzones.slice(props.minInputLevel, props.maxInputLevel);
  newZones.forEach((levels, index) => {
    levels.forEach((level, levelIndex) => {
      const positions = level.map((x) => {
        return mapXY(x[0], x[1]);
      });
      tmp.push(
        <Polygon
          key={`${index}-${levelIndex}`}
          pathOptions={{
            fillColor: setColor(index % 4),
            color: setColor(index % 4),
          }}
          positions={positions as LatLngTuple[]}
        />
      );
    });
  });
  return tmp;
}
