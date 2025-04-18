type Build = {
  Action1: string
  Action2: string
  Essence: string
  HowTo: string
  IdealJobs: string[]
  OkJobs: string[]
  BadJobs: string[]
  VideoURL: string
  LostProtect: boolean
  Risky: boolean
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
  VideoURL: "XySwoI2ByC0",
  LostProtect: true,
  Risky: false
}

const RampageAssassinate : Build = {
  Action1: "Lost Assassination",
  Action2: "Lost Rampage",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["MNK", "DNC", "BRD", "MCH"],
  OkJobs: ["NIN","DRG"],
  BadJobs: ["RPR", "SAM", "VPR"],
  VideoURL: "",
  LostProtect: true,
  Risky: false
}

const Tank0Valor : Build = {
  Action1: "Lost Rampage",
  Action2: "Banner of Tireless Conviction",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "xJRCKc-ACFU",
  LostProtect: false,
  Risky: false
}

const TankMagitek : Build = {
  Action1: "Lost Rampage",
  Action2: "Lost Spellforge",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "efxFpalAqYc",
  LostProtect: false,
  Risky: false
}

const RampageAssassinateMagitek : Build = {
  Action1: "Lost Assassination",
  Action2: "Lost Rampage",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["MNK", "DNC", "BRD", "MCH"],
  OkJobs: ["NIN","DRG"],
  BadJobs: ["RPR", "SAM", "VPR"],
  VideoURL: "wBMMjiGpj-Y",
  LostProtect: true,
  Risky: false
}

const Death: Build = {
  Action1: "Lost Death",
  Action2: "None",
  Essence: "Essence of the Ordained",
  HowTo: "Explanations are WIP",
  IdealJobs: ["WHM", "RDM"],
  OkJobs: ["AST", "SCH", "SGE", "SMN", "PCT"],
  BadJobs: ["BLM"],
  VideoURL: "",
  LostProtect: false,
  Risky: false
}

const SpriteTank: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "Essence of the Irregular",
  HowTo: "Explanations are WIP",
  IdealJobs: ["PLD", "WAR", "DRK", "GNB"],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "B387LCruI2I",
  LostProtect: false,
  Risky: false
}

const Sprite: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "None",
  HowTo: "Explanations are WIP",
  IdealJobs: [],
  OkJobs: [],
  BadJobs: [],
  VideoURL: "B387LCruI2I",
  LostProtect: false,
  Risky: false
}

const LowCasterCluster: Build = {
  Action1: "Lost Protect II",
  Action2: "Lost Burst",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["BLM"],
  OkJobs: ["SMN", "RDM", "PCT"],
  BadJobs: [],
  VideoURL: "bgGcjXxtQjU",
  LostProtect: false,
  Risky: false
}

const RiskyCasterCluster: Build = {
  Action1: "Lost Flare Star",
  Action2: "Lost Burst",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  IdealJobs: ["BLM"],
  OkJobs: ["SMN", "RDM", "PCT"],
  BadJobs: [],
  VideoURL: "",
  LostProtect: true,
  Risky: true
}

const RiskyHealerCluster: Build = {
  Action1: "Lost Seraph Strike",
  Action2: "Lost Burst",
  Essence: "Essence of the Templar",
  HowTo: "Explanations are WIP",
  IdealJobs: ["SGE"],
  OkJobs: ["WHM", "AST"],
  BadJobs: ["SCH"],
  VideoURL: "",
  LostProtect: true,
  Risky: true
}

const FasterHealerCluster: Build = {
  Action1: "Lost Seraph Strike",
  Action2: "Lost Burst",
  Essence: "Essence of the Aetherweaver",
  HowTo: "Explanations are WIP",
  IdealJobs: ["SGE"],
  OkJobs: ["WHM", "AST"],
  BadJobs: ["SCH"],
  VideoURL: "",
  LostProtect: true,
  Risky: true
}

const RiskyHealerNormal: Build = {
  Action1: "Lost Seraph Strike",
  Action2: "Lost Burst",
  Essence: "Deep Essence of the Templar",
  HowTo: "Explanations are WIP",
  IdealJobs: ["SGE"],
  OkJobs: ["WHM", "AST"],
  BadJobs: ["SCH"],
  VideoURL: "",
  LostProtect: true,
  Risky: true
}

const DefaultBuild: FarmingBuildByRays = {
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
    "Caster": LowCasterCluster,
    "Melee": RampageAssassinateMagitek,
    "Phys Ranged": RampageAssassinateMagitek
  }
}

const RiskyBuild: FarmingBuildByRays = {
  "Normal": {
    "Healer": RiskyHealerNormal
  },
  "Sprite": {
    "Tank (Ideal)": SpriteTank,
    "Everything Else": Sprite
  },
  "Star": {
    "Caster/Healer": Death
  },
  "Cluster": {
    "Caster": RiskyCasterCluster,
    "Healer": RiskyHealerCluster,
    "Extra Risk Healer": FasterHealerCluster
  }
}

export const builds: {[index: string]: FarmingBuildByRays} = {
  "Default": DefaultBuild,
  "Risky": RiskyBuild
}
