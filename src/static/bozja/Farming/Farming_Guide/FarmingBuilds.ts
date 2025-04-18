type Build = {
  Action1: string
  Action2: string
  Essence: string
  HowTo: string
  IdealJobs: string[]
  OkJobs: string[]
  BadJobs: string[]
  VideoURL: string
}

type Role = {
  [index: string]: Build
}

type FarmingBuildByRays = {
  [index: string]: Role,
}



const SleepStar : Build = {
  Action1: "Lost Cure",
  Action2: "Lost Flare Star",
  Essence: "Essence of the Veteran",
  HowTo: "Explanations are WIP",
  IdealJobs: ["BLM"],
  OkJobs: ["SMN", "RDM", "PCT"],
  BadJobs: [],
  VideoURL: ""
}

const RampageAssassinate : Build = {
  Action1: "Lost Assassination",
  Action2: "Lost Rampage",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["MNK", "DNC", "BRD", "MCH"],
  OkJobs: ["NIN","DRG"],
  BadJobs: ["RPR", "SAM", "VPR"],
  VideoURL: ""
}

const Tank0Valor : Build = {
  Action1: "Lost Rampage",
  Action2: "Banner of Tireless Conviction",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: ""
}

const TankMagitek : Build = {
  Action1: "Lost Rampage",
  Action2: "Lost Spellforge",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "VfBqgJkhPzk"
}

const Death: Build = {
  Action1: "Lost Death",
  Action2: "None",
  Essence: "Essence of the Ordained",
  HowTo: "Explanations are WIP",
  IdealJobs: ["WHM", "RDM"],
  OkJobs: ["AST", "SCH", "SGE", "SMN", "PCT"],
  BadJobs: ["BLM"],
  VideoURL: ""
}

const SpriteTank: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "Essence of the Irregular",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: ""
}

const Sprite: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "None",
  HowTo: "Explanations are WIP",
  IdealJobs: [],
  OkJobs: [],
  BadJobs: [],
  VideoURL: ""
}

const LowCasterCluster: Build = {
  Action1: "Lost Protect II",
  Action2: "Lost Burst",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["BLM"],
  OkJobs: ["SMN", "RDM", "PCT"],
  BadJobs: [],
  VideoURL: ""
}

export const farmingBuildsByValor: FarmingBuildByRays[] = [
  {},
  {},
  {},
  {
    "Normal": {
      "Tank": Tank0Valor,
      "Melee": RampageAssassinate,
      "Phys Ranged": RampageAssassinate,
      "Caster": SleepStar
    },
    "Sprite": {
      "Tank (Ideal)": SpriteTank,
      "Everything Else": Sprite
    },
    "Star": {
      "Caster/Healer": Death
    },
    "Cluster": {
      "Tank": TankMagitek,
      "Caster": LowCasterCluster
    }
  }
]
