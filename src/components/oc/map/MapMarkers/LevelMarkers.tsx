import { levelzones } from "@/static/oc/map/levelzones";
import { MonsterLocation } from "@/types/bozja/Farming/Fragment_Map/MonsterLocation";
import { Icon, LatLngExpression, LatLngTuple } from "leaflet";
import { Circle, Marker, Polygon, Popup } from "react-leaflet";

function mapXY(x:number, y: number) : LatLngTuple {
  return [42.9 - y, x];
}

const setColor = (level: number | string) => {
    switch (level) {
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "red";
      case 4:
        return "purple";
      case 5:
        return "blue";
      case "Critical Engagement":
        return "white";
      default:
        return "black";
    }
  };

export function MapMarkers(props: {
  minInputLevel: number;
  maxInputLevel: number;
}) {
  const tmp: React.JSX.Element[] = [];
  const newZones = levelzones.slice(props.minInputLevel, props.maxInputLevel);
  newZones.forEach((levels, index) => {
    levels.forEach((level, levelIndex) => {
      const positions: LatLngTuple[][] = level.map((x) => {
        return x.map((fourDArraysSuck) => {
          return mapXY(fourDArraysSuck[0], fourDArraysSuck[1]);
        })
      });
      tmp.push(
        <Polygon
          key={`${index}-${levelIndex}`}
          pathOptions={{
            fillColor: setColor(index % 6),
            color: setColor(index % 6),
          }}
          positions={positions}
        />
      );
    });
  });
  return tmp;
}
