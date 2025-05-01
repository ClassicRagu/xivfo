import { listEurekaFarms } from "@/static/weather/Farms";
import { atom } from "jotai";
import { zoneValueAtom } from "./zoneValueAtom";
import { farmValueAtom } from "./farmValueAtom";
import { FarmInfo } from "@/types/weather/FarmInfo";

export const farmInfoAtom = atom<FarmInfo>((get) => {
  const zone = get(zoneValueAtom);
  const farm = get(farmValueAtom);
  return listEurekaFarms.find((x) => x.name == zone)?.farms.find((x) => x.name == farm)
    ?.info ?? {
    weathers: [""],
    time: -1,
  };
});
