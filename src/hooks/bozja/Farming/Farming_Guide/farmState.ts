import { atom } from "jotai"
import { guideFragmentState } from "./guideFragmentState"
import { builds } from "@/static/bozja/Farming/Farming_Guide/FarmingBuilds"
import { fragments } from "@/static/bozja/Farming/Fragment_Map/Actions"
import { roleState } from "./roleState"
import { guideMagitekState } from "./guideMagitekState"
import { getRiskAtom } from "./getRiskState"

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
  const getRisk = get(getRiskAtom)
  const role = get(roleState)
  if (role) {
    if (fragmentState != "") {
      return builds[getRisk][fragments[fragmentState].FarmType][role]
    } else if (magitekState) {
      return builds[getRisk]["Cluster"][role]
    }
  }
  return emptyBuild
})