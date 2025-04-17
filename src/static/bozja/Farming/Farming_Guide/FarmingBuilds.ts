type Build = {
  Action1: string
  Action2: string
  Essence: string
  HowTo: string
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
  VideoURL: ""
}

const RampageAssassinate : Build = {
  Action1: "Lost Assassination",
  Action2: "Lost Rampage",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const Tank0Valor : Build = {
  Action1: "Lost Rampage",
  Action2: "Banner of Tireless Conviction",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const TankMagitek : Build = {
  Action1: "Lost Rampage",
  Action2: "Lost Spellforge",
  Essence: "Essence of the Bloodsucker",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const Death: Build = {
  Action1: "Lost Death",
  Action2: "Lost Spellforge",
  Essence: "Essence of the Ordained",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const SpriteTank: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "Essence of the Irregular",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const Sprite: Build = {
  Action1: "Lost Reflect",
  Action2: "Lost Impetus",
  Essence: "None",
  HowTo: "Explanations are WIP",
  VideoURL: ""
}

const LowCasterCluster: Build = {
  Action1: "Lost Protect II",
  Action2: "Lost Burst",
  Essence: "Essence of the Beast",
  HowTo: "Explanations are WIP",
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
