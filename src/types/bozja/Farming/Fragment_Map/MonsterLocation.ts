export type MonsterLocation = {
  Monster: string;
  Level: number | string;
  Positions?: number[][];
  Location?: number[];
  radius?: number;
  additionalInfo?: string;
};