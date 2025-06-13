import BiSTable from "@/components/shared/BiSTable";

const jobs = [
  {
    setName: "PLD",
    jobAbvs: ["PLD"],
    jobNames: ["paladin"],
    xivgear:
      "https://xivgear.app/?page=sl%7C9ac01a54-51cb-429f-87ff-7cc5e4ca4b5d",
    credit: "classicragu",
  },
  {
    setName: "WAR",
    jobAbvs: ["WAR"],
    jobNames: ["warrior"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cfdef7aa9-63c4-4a21-a662-80e89c2b47dd",
    credit: "The Balance",
  },
  {
    setName: "DRK",
    jobAbvs: ["DRK"],
    jobNames: ["darkknight"],
    xivgear:
      "https://xivgear.app/?page=sl%7C2f50f25f-7407-4e54-abbb-cf117dddb657",
    credit: "onlymlems",
  },
  {
    setName: "GNB",
    jobAbvs: ["GNB"],
    jobNames: ["gunbreaker"],
    xivgear:
      "https://xivgear.app/?page=sl%7C8e76936e-04f1-4bdc-9678-bcf7befc434b",
    credit: "onlymlems",
  },
  {
    setName: "MNK",
    jobAbvs: ["MNK"],
    jobNames: ["monk"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cf0ab23e1-840d-464e-a6fa-34649ae11d02",
    credit: "The Balance",
  },
  {
    setName: "DRG",
    jobAbvs: ["DRG"],
    jobNames: ["dragoon"],
    xivgear:
      "https://xivgear.app/?page=sl%7C67d9c5cd-dc1f-45c6-8d66-e3708683c255",
    credit: "classicragu and onlymlems",
  },
  {
    setName: "NIN",
    jobAbvs: ["NIN"],
    jobNames: ["ninja"],
    xivgear:
      "https://xivgear.app/?page=sl%7Ce40d37a2-cdfe-4750-9a2d-c9b0b2f8c238",
    credit: "classicragu",
  },
  {
    setName: "SAM",
    jobAbvs: ["SAM"],
    jobNames: ["samurai"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cf557853e-2782-4227-bcea-5eef202dfed0",
    credit: "gutrune",
  },
  {
    setName: "RPR",
    jobAbvs: ["RPR"],
    jobNames: ["reaper"],
    xivgear:
      "https://xivgear.app/?page=sl%7Ced61963e-702a-4fe0-bccf-5895118d8baa",
    credit: "onlymlems",
  },
  {
    setName: "VPR",
    jobAbvs: ["VPR"],
    jobNames: ["viper"],
    xivgear:
      "https://xivgear.app/?page=sl%7Ce7d88947-4cf9-49c6-bbf7-92d6567625a8",
    credit: ".ref. and classicragu",
  },
  {
    setName: "BLM",
    jobAbvs: ["BLM"],
    jobNames: ["blackmage"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cc487f0df-6f9f-4daf-b0b2-54863c1c8202",
    credit: "gutrune",
  },
];

export default function BiS() {
  return (
    <BiSTable jobs={jobs} />
  );
}
