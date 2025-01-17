import { AllowedWeathers } from "xivweather/lib/static/AllowedWeathers";

export type FarmInfo = {
  weathers: AllowedWeathers[],
  time: number
};