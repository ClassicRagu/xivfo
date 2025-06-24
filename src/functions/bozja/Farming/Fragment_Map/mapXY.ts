import { LatLngTuple } from "leaflet";

export function mapXY(x:number, y: number) : LatLngTuple {
  return [42.9 - y, x];
}