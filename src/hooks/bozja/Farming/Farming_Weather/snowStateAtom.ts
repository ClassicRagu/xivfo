"use client"
import { WindowTimes } from "@/types/weather/WindowTimes";
import { atom } from "jotai";
import { farmInfoAtom } from "./farmInfoAtom";
import { getWindows } from "@/functions/weather/getWindows";
import { weekStateAtom } from "./weekStateAtom";
import { findSnowStateAtom } from "./findSnowStateAtom";
import { zoneValueAtom } from "./zoneValueAtom";

const realSnowStateAtom = atom<WindowTimes[] | null>(null);

export const snowStateAtom = atom(
  (get) => {
    const realSnowState = get(realSnowStateAtom);
    if (realSnowState) {
      return realSnowState
    } else {
      const farmInfo = get(farmInfoAtom);
      const weekState = get(weekStateAtom);
      const findSnowState = get(findSnowStateAtom);
      const zoneValue = get(zoneValueAtom);
      if (farmInfo.weathers[0] != "") {
        return getWindows(
          new Date(),
          weekState,
          findSnowState,
          zoneValue,
          farmInfo.weathers,
          farmInfo.time
        );
      } else {
        return null;
      }
    }
  },
  (_get, set, newText) => {
    set(realSnowStateAtom, <WindowTimes[] | null>newText)
  }
);
