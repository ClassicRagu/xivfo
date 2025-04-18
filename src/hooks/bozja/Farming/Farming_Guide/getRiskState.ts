import { atom } from "jotai"
import { riskState } from "./riskState"

export const getRiskAtom = atom((get) => {
  const risk = get(riskState)
  return risk ? "Risky" : "Default"
})