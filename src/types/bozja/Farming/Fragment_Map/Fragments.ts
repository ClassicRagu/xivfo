import { AllowedWeathers } from "xivweather/lib/static/AllowedWeathers";
import { MonsterLocation } from "./MonsterLocation";

export type Fragments = {
  BSF?: MonsterLocation[][];
  Zadnor?: MonsterLocation[][];
  Quartermaster?: boolean
  CLL?: boolean
  Dal?: boolean
  DR?: boolean
  DRS?: boolean,
  FarmType: string
  BSFWeather?: AllowedWeathers[]
  ZadnorWeather?: AllowedWeathers[]
  IsStandardFarm: boolean
};

