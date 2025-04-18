import { atom } from "jotai"
import { guideFragmentState } from "./guideFragmentState"
import { farmingBuildsByValor } from "@/static/bozja/Farming/Farming_Guide/FarmingBuilds"
import { valorState } from "./valorState"
import { fragments } from "@/static/bozja/Farming/Fragment_Map/Actions"
import { roleState } from "./roleState"
import { guideMagitekState } from "./guideMagitekState"

const emptyBuild = {
  Action1: "None",
  Action2: "None",
  Essence: "None",
  HowTo: "None",
  IdealJobs: [],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "",
  LostProtect: false
}

export const farmStateAtom = atom((get) => {
  const fragmentState = get(guideFragmentState)
  const magitekState = get(guideMagitekState)
  const valor = get(valorState)
  const role = get(roleState)
  if (role) {
    if (fragmentState != "") {
      return farmingBuildsByValor[valor - 1][fragments[fragmentState].FarmType][role]
    } else if (magitekState) {
      return farmingBuildsByValor[valor - 1]["Cluster"][role]
    }
  }
  return emptyBuild
})