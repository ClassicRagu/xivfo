import { Fragments } from "@/types/bozja/Farming/Fragment_Map/Fragments";
import { bsfMonsterLocations } from "./BSFMonsterLocations";
import { zadnorMonsterLocations } from "./ZadnorMonsterLocations";

export const listActions = [
  "Banner of Firm Resolve",
  "Banner of Honed Acuity",
  "Banner of Honored Sacrifice",
  "Banner of Noble Ends",
  "Banner of Solemn Clarity",
  "Banner of Tireless Conviction",
  "Deep Essence of the Aetherweaver",
  "Deep Essence of the Beast",
  "Deep Essence of the Bloodsucker",
  "Deep Essence of the Breathtaker",
  "Deep Essence of the Guardian",
  "Deep Essence of the Irregular",
  "Deep Essence of the Martialist",
  "Deep Essence of the Ordained",
  "Deep Essence of the Platebearer",
  "Deep Essence of the Profane",
  "Deep Essence of the Savior",
  "Deep Essence of the Skirmisher",
  "Deep Essence of the Templar",
  "Deep Essence of the Veteran",
  "Deep Essence of the Watcher",
  "Dynamis Dice",
  "Essence of the Aetherweaver",
  "Essence of the Beast",
  "Essence of the Bloodsucker",
  "Essence of the Breathtaker",
  "Essence of the Guardian",
  "Essence of the Irregular",
  "Essence of the Martialist",
  "Essence of the Ordained",
  "Essence of the Platebearer",
  "Essence of the Profane",
  "Essence of the Savior",
  "Essence of the Skirmisher",
  "Essence of the Templar",
  "Essence of the Veteran",
  "Essence of the Watcher",
  "Light Curtain",
  "Lodestone",
  "Lost Aethershield",
  "Lost Arise",
  "Lost Assassination",
  "Lost Banish III",
  "Lost Blood Rage",
  "Lost Bravery",
  "Lost Bubble",
  "Lost Burst",
  "Lost Chainspell",
  "Lost Cure",
  "Lost Cure II",
  "Lost Cure III",
  "Lost Cure IV",
  "Lost Death",
  "Lost Dervish",
  "Lost Dispel",
  "Lost Excellence",
  "Lost Fair Trade",
  "Lost Focus",
  "Lost Flare Star",
  "Lost Font of Magic",
  "Lost Font of Power",
  "Lost Font of Skill",
  "Lost Full Cure",
  "Lost Incense",
  "Lost Impetus",
  "Lost Manawall",
  "Lost Paralyze III",
  "Lost Perception",
  "Lost Protect",
  "Lost Protect II",
  "Lost Rampage",
  "Lost Reflect",
  "Lost Reraise",
  "Lost Rend Armor",
  "Lost Sacrifice",
  "Lost Seraph Strike",
  "Lost Shell",
  "Lost Shell II",
  "Lost Slash",
  "Lost Spellforge",
  "Lost Stealth",
  "Lost Steelsting",
  "Lost Stoneskin",
  "Lost Stoneskin II",
  "Lost Swift",
  "Mimic",
  "Pure Essence of the Divine",
  "Pure Essence of the Duelist",
  "Pure Essence of the Elder",
  "Pure Essence of the Fiendhunter",
  "Pure Essence of the Gambler",
  "Pure Essence of the Indomitable",
  "Resistance Elixir",
  "Resistance Ether Kit",
  "Resistance Medikit",
  "Resistance Phoenix",
  "Resistance Potion",
  "Resistance Potion Kit",
  "Resistance Reraiser",
];

export const actions = [
  {
    ActionName: "Essence of the Aetherweaver",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Martialist",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Platebearer",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Savior",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Veteran",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Breathtaker",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Guardian",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Irregular",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Ordained",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Profane",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Skirmisher",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Watcher",
    Fragment: "Awakening",
  },
  {
    ActionName: "Lost Arise",
    Fragment: "Compassion",
  },
  {
    ActionName: "Lost Cure II",
    Fragment: "Compassion",
  },
  {
    ActionName: "Lost Cure IV",
    Fragment: "Compassion",
  },
  {
    ActionName: "Resistance Medikit",
    Fragment: "Compassion",
  },
  {
    ActionName: "Resistance Ether Kit",
    Fragment: "Care",
  },
  {
    ActionName: "Resistance Potion Kit",
    Fragment: "Care",
  },
  {
    ActionName: "Resistance Reraiser",
    Fragment: "Care",
  },
  {
    ActionName: "Lost Cure",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Cure III",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Incense",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Manawall",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Protect",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Shell",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Stealth",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Bravery",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Reflect",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Stoneskin",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Death",
    Fragment: "Violence",
  },
  {
    ActionName: "Lost Focus",
    Fragment: "Violence",
  },
  {
    ActionName: "Lost Slash",
    Fragment: "Violence",
  },
  {
    ActionName: "Resistance Phoenix",
    Fragment: "Preparation",
  },
  {
    ActionName: "Resistance Potion",
    Fragment: "Preparation",
  },
  {
    ActionName: "Lost Banish III",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Dispel",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Paralyze III",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Spellforge",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Steelsting",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Swift",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Banner of Firm Resolve",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Honed Acuity",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Honored Sacrifice",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Noble Ends",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Solemn Clarity",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Tireless Conviction",
    Fragment: "Resolve",
  },
  {
    ActionName: "Deep Essence of the Aetherweaver",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Martialist",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Platebearer",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Savior",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Veteran",
    Fragment: "Mastery",
  },
  {
    ActionName: "Lost Font of Magic",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Lost Font of Power",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Lost Font of Skill",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Essence of the Beast",
    Fragment: "Superstition",
  },
  {
    ActionName: "Essence of the Bloodsucker",
    Fragment: "Superstition",
  },
  {
    ActionName: "Essence of the Templar",
    Fragment: "Superstition",
  },
  {
    ActionName: "Deep Essence of the Beast",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Bloodsucker",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Templar",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Breathtaker",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Guardian",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Irregular",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Ordained",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Profane",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Skirmisher",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Watcher",
    Fragment: "Becoming",
  },
  {
    ActionName: "Dynamis Dice",
    Fragment: "Caprice",
  },
  {
    ActionName: "Lost Fair Trade",
    Fragment: "Caprice",
  },
  {
    ActionName: "Mimic",
    Fragment: "Caprice",
  },
  {
    ActionName: "Pure Essence of the Elder",
    Fragment: "Clarity",
  },
  {
    ActionName: "Lost Flare Star",
    Fragment: "Clarity",
  },
  {
    ActionName: "Pure Essence of the Duelist",
    Fragment: "Contention",
  },
  {
    ActionName: "Lost Rend Armor",
    Fragment: "Contention",
  },
  {
    ActionName: "Pure Essence of the Gambler",
    Fragment: "Deception",
  },
  {
    ActionName: "Pure Essence of the Divine",
    Fragment: "Divinity",
  },
  {
    ActionName: "Lost Seraph Strike",
    Fragment: "Divinity",
  },
  {
    ActionName: "Pure Essence of the Fiendhunter",
    Fragment: "Finesse",
  },
  {
    ActionName: "Lost Dervish",
    Fragment: "Finesse",
  },
  {
    ActionName: "Pure Essence of the Indomitable",
    Fragment: "Fortitude",
  },
  {
    ActionName: "Lost Aethershield",
    Fragment: "Fortitude",
  },
  {
    ActionName: "Lost Sacrifice",
    Fragment: "Loss",
  },
  {
    ActionName: "Lost Perception",
    Fragment: "Observation",
  },
  {
    ActionName: "Lost Rereaise",
    Fragment: "Hope",
  },
  {
    ActionName: "Light Curtain",
    Fragment: "Moonlight",
  },
  {
    ActionName: "Lost Stoneskin II",
    Fragment: "Rage",
  },
  {
    ActionName: "Lost Burst",
    Fragment: "Rage",
  },
  {
    ActionName: "Lost Rampage",
    Fragment: "Ferocity",
  },
  {
    ActionName: "Lost Protect II",
    Fragment: "Desperation",
  },
  {
    ActionName: "Lost Shell II",
    Fragment: "Desperation",
  },
  {
    ActionName: "Lost Bubble",
    Fragment: "Tenacity",
  },
  {
    ActionName: "Lodestone",
    Fragment: "History",
  },
  {
    ActionName: "Lost Impetus",
    Fragment: "Inspiration",
  },
  {
    ActionName: "Lost Chainspell",
    Fragment: "Artistry",
  },
  {
    ActionName: "Lost Assassination",
    Fragment: "Artistry",
  },
  {
    ActionName: "Resistance Elixir",
    Fragment: "Heroism",
  },
  {
    ActionName: "Lost Excellence",
    Fragment: "Heroism",
  },
  {
    ActionName: "Lost Blood Rage",
    Fragment: "Cunning",
  },
  {
    ActionName: "Lost Full Cure",
    Fragment: "Revelation",
  },
  {
    ActionName: "Lost Reraise",
    Fragment: "Hope",
  },
];

const bsfResolveCEs = [
  {
    Monster: "Trampled under Hoof",
    Level: "Critical Engagement",
    Location: [9.9, 18.0],
    radius: 0.75,
  },
  {
    Monster: "Where Strode the Behemoth",
    Level: "Critical Engagement",
    Location: [23.3, 15.0],
    radius: 0.75,
  },
  {
    Monster: "Metal Fox Chaos",
    Level: "Critical Engagement",
    Location: [14.2, 18.3],
    radius: 0.75,
  },
];

const zadnorTenacityCEs = [
  {
    Monster: "Feeling the Burn",
    Level: "Critical Engagement",
    Location: [16.7, 17.0],
    radius: 0.6,
  },
  {
    Monster: "Lean, Mean, Magitek Machines",
    Level: "Critical Engagement",
    Location: [15.2, 12.9],
    radius: 0.6,
  },
  {
    Monster: "Looks to Die For",
    Level: "Critical Engagement",
    Location: [17.3, 9.9],
    radius: 0.6,
  },
  {
    Monster: "Worn to a Shadow",
    Level: "Critical Engagement",
    Location: [11.7, 7.6],
    radius: 0.6,
  },
];

export const quartermasterCoords = [32.6, 9.653];

export const fragmentList = [
  "All_BSF",
  "All_Zadnor",
  "Artistry",
  "Awakening",
  "Becoming",
  "Caprice",
  "Care",
  "Caution",
  "Clarity",
  "Compassion",
  "Contention",
  "Cunning",
  "Deception",
  "Desperation",
  "Divinity",
  "Ferocity",
  "Finesse",
  "Fortitude",
  "Heroism",
  "Hope",
  "History",
  "Ingenuity",
  "Inspiration",
  "Loss",
  "Mastery",
  "Moonlight",
  "Observation",
  "Preparation",
  "Rage",
  "Resolve",
  "Revelation",
  "Sagacity",
  "Skill",
  "Superstition",
  "Support",
  "Tenacity",
  "Transcendence",
  "Violence",
];

export const fragments: { [key: string]: Fragments } = {
  Skill: { 
    FarmType: "Normal",
    IsStandardFarm: true, 
    BSF: [bsfMonsterLocations.Zone1.Normal] 
  },
  Awakening: { 
    FarmType: "Normal",
    IsStandardFarm: true,
    BSF: [bsfMonsterLocations.Zone2.Normal] 
  },
  Compassion: {
    FarmType: "Normal",
    IsStandardFarm: true,
    BSF: [bsfMonsterLocations.Zone3.Normal],
    Zadnor: [zadnorMonsterLocations.Zone3.Normal5],
  },
  Care: {
    FarmType: "Sprite",
    IsStandardFarm: true,
    BSFWeather: ["Wind", "Dust Storms"],
    BSF: [bsfMonsterLocations.Zone2.Ashkin, bsfMonsterLocations.Zone2.Sprites],
    Zadnor: [zadnorMonsterLocations.Zone2.Ashkin],
  },
  Caution: { 
    FarmType: "Star",
    IsStandardFarm: true,
    Quartermaster: true, 
    BSF: [bsfMonsterLocations.Zone1.Star] },
  Support: {
    FarmType: "Sprite",
    IsStandardFarm: true,
    BSFWeather: ["Wind"],
    BSF: [bsfMonsterLocations.Zone3.Sprites],
    Zadnor: [zadnorMonsterLocations.Zone3.Sprites],
  },
  Violence: {
    FarmType: "Star",
    IsStandardFarm: true,
    BSF: [bsfMonsterLocations.Zone3.Ashkin, bsfMonsterLocations.Zone3.Star],
  },
  Preparation: {
    FarmType: "Sprite",
    IsStandardFarm: true,
    BSFWeather: ["Thunder"],
    BSF: [bsfMonsterLocations.Zone1.Ashkin, bsfMonsterLocations.Zone1.Sprites],
    Zadnor: [zadnorMonsterLocations.Zone1.Ashkin],
  },
  Ingenuity: { 
    FarmType: "Star",
    IsStandardFarm: true,
    Quartermaster: true, 
    BSF: [bsfMonsterLocations.Zone2.Star] },
  Resolve: { FarmType: "CE", IsStandardFarm: false, BSF: [bsfResolveCEs] },
  Mastery: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Sagacity: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Superstition: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Transcendence: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Becoming: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Caprice: { FarmType: "CLL", IsStandardFarm: false, CLL: true },
  Clarity: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Contention: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Deception: { FarmType: "DRS", IsStandardFarm: false, DRS: true },
  Divinity: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Finesse: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Fortitude: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Loss: { FarmType: "DR", IsStandardFarm: false, DR: true },
  Observation: { FarmType: "Cluster", IsStandardFarm: true, DR: true, Quartermaster: true },
  Hope: { FarmType: "Cluster", IsStandardFarm: true, Quartermaster: true },
  Moonlight: { FarmType: "Normal", IsStandardFarm: true, Zadnor: [zadnorMonsterLocations.Zone2.Normal] },
  Rage: {
    IsStandardFarm: true,
    FarmType: "Normal",
    Zadnor: [
      zadnorMonsterLocations.Zone1.NormalRage,
      zadnorMonsterLocations.Zone1.NormalBoth,
    ],
  },
  Ferocity: {
    FarmType: "Normal",
    IsStandardFarm: true,
    Zadnor: [
      zadnorMonsterLocations.Zone1.NormalFerocity,
      zadnorMonsterLocations.Zone1.NormalBoth,
    ],
  },
  Desperation: { FarmType: "Normal", IsStandardFarm: true, Zadnor: [zadnorMonsterLocations.Zone3.Normal] },
  Tenacity: { FarmType: "CE", IsStandardFarm: false, Zadnor: [zadnorTenacityCEs] },
  History: {
    FarmType: "Sprite",
    IsStandardFarm: true,
    ZadnorWeather: ["Wind"],
    Zadnor: [
      zadnorMonsterLocations.Zone1.Sprites,
      zadnorMonsterLocations.Zone1.Star,
    ],
  },
  Inspiration: {
    FarmType: "Star",
    IsStandardFarm: true,
    Zadnor: [
      zadnorMonsterLocations.Zone3.Ashkin,
      zadnorMonsterLocations.Zone3.Star,
    ],
  },
  Artistry: {
    FarmType: "Sprite",
    IsStandardFarm: true,
    ZadnorWeather: ["Rain", "Thunder"],
    Zadnor: [
      zadnorMonsterLocations.Zone2.Sprites,
      zadnorMonsterLocations.Zone2.Star,
    ],
  },
  Heroism: { FarmType: "Dal", IsStandardFarm: false, Dal: true },
  Cunning: { FarmType: "Dal", IsStandardFarm: false, Dal: true },
  Revelation: { FarmType: "Dal", IsStandardFarm: false, Dal: true },
  All_BSF: {
    FarmType: "",
    IsStandardFarm: false,
    Quartermaster: true,
    CLL: true,
    BSF: [
      bsfMonsterLocations.Zone1.Normal,
      bsfMonsterLocations.Zone2.Normal,
      bsfMonsterLocations.Zone3.Normal,
      bsfMonsterLocations.Zone1.Ashkin,
      bsfMonsterLocations.Zone2.Ashkin,
      bsfMonsterLocations.Zone3.Ashkin,
      bsfMonsterLocations.Zone1.Sprites,
      bsfMonsterLocations.Zone2.Sprites,
      bsfMonsterLocations.Zone3.Sprites,
      bsfMonsterLocations.Zone1.Star,
      bsfMonsterLocations.Zone2.Star,
      bsfMonsterLocations.Zone3.Star,
      bsfResolveCEs,
    ],
  },
  All_Zadnor: {
    FarmType: "",
    IsStandardFarm: false,
    Dal: true,
    Zadnor: [
      zadnorMonsterLocations.Zone1.NormalRage,
      zadnorMonsterLocations.Zone1.NormalFerocity,
      zadnorMonsterLocations.Zone1.NormalBoth,
      zadnorMonsterLocations.Zone2.Normal,
      zadnorMonsterLocations.Zone3.Normal,
      zadnorMonsterLocations.Zone3.Normal5,
      zadnorMonsterLocations.Zone1.Ashkin,
      zadnorMonsterLocations.Zone2.Ashkin,
      zadnorMonsterLocations.Zone3.Ashkin,
      zadnorMonsterLocations.Zone1.Sprites,
      zadnorMonsterLocations.Zone2.Sprites,
      zadnorMonsterLocations.Zone3.Sprites,
      zadnorMonsterLocations.Zone1.Star,
      zadnorMonsterLocations.Zone2.Star,
      zadnorMonsterLocations.Zone3.Star,
      zadnorTenacityCEs,
    ],
  },
};
