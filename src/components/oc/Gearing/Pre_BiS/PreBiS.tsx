import BiSTable from "@/components/shared/BiSTable";

const jobs = [
  {
    setName: "Omni-Tank",
    jobAbvs: ["PLD", "WAR", "DRK", "GNB"],
    jobNames: ["paladin", "warrior", "darkknight", "gunbreaker"],
    xivgear:
      "https://xivgear.app/?page=sl%7C81c2034a-96d1-4682-a8fd-9a3d5601bca5",
    credit: "mortia.",
  },
  {
    setName: "PLD",
    jobAbvs: ["PLD"],
    jobNames: ["paladin"],
    xivgear:
      "https://xivgear.app/?page=sl%7C81bc8450-dd1f-4c7b-b6bb-0be5ee58fae8",
    credit: "vesselfragment",
  },
  {
    setName: "WAR",
    jobAbvs: ["WAR"],
    jobNames: ["warrior"],
    xivgear:
      "https://xivgear.app/?page=sl%7C109c203d-e2db-4839-9423-4d86b7ab97b8",
    credit: "mortia.",
  },
  {
    setName: "DRK",
    jobAbvs: ["DRK"],
    jobNames: ["darkknight"],
    xivgear:
      "https://xivgear.app/?page=sl%7C9a810ed5-3699-435e-8cdb-059b82c4561b",
    credit: "mortia.",
  },
  {
    setName: "GNB",
    jobAbvs: ["GNB"],
    jobNames: ["gunbreaker"],
    xivgear:
      "https://xivgear.app/?page=sl%7Ce7e9fa5d-4c91-43f2-b191-af7807180a20",
    credit: "myka",
  },
  {
    setName: "Omni-Healer",
    jobAbvs: ["WHM", "SCH", "AST", "SGE"],
    jobNames: ["whitemage", "scholar", "astrologian", "sage"],
    xivgear:
      "https://xivgear.app/?page=sl%7C0e86cfda-0da0-4c83-8433-f6c561e48875",
    credit: "alttrois",
  },
  {
    setName: "WHM",
    jobAbvs: ["WHM"],
    jobNames: ["whitemage"],
    xivgear:
      "https://xivgear.app/?page=sl%7C3391a2ab-e084-433c-83a4-892ff7d18039",
    credit: "faefiyaa",
  },
  {
    setName: "SCH",
    jobAbvs: ["SCH"],
    jobNames: ["scholar"],
    xivgear:
      "https://xivgear.app/?page=sl%7C79591072-f579-4131-aba3-fb0302c62454",
    credit: "faefiyaa",
  },
  {
    setName: "AST",
    jobAbvs: ["AST"],
    jobNames: ["astrologian"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cd8635d1e-05a0-4388-8a74-0666e3b5c795",
    credit: "faefiyaa",
  },
  {
    setName: "SGE",
    jobAbvs: ["SGE"],
    jobNames: ["sage"],
    xivgear:
      "https://xivgear.app/?page=sl%7C4b0a21d4-e2f8-4a3a-b0b0-0eb107e23d7e",
    credit: "faefiyaa",
  },
  {
    setName: "MNK",
    jobAbvs: ["MNK"],
    jobNames: ["monk"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cd4c053a4-8efd-4e47-b493-965743e0d1b7",
    credit: "mortia.",
  },
  {
    setName: "DRG and RPR",
    jobAbvs: ["DRG", "RPR"],
    jobNames: ["dragoon", "reaper"],
    xivgear:
      "https://xivgear.app/?page=sl%7C7e37702b-d6ee-4ae7-8c35-4a5746c273bc",
    credit: "alttrois and theothnormie",
  },
  {
    setName: "NIN",
    jobAbvs: ["NIN"],
    jobNames: ["ninja"],
    xivgear:
      "https://xivgear.app/?page=sl%7C11f42af9-b714-4648-8a0d-dc9c62a5eb84",
    credit: "classicragu",
  },
  {
    setName: "SAM",
    jobAbvs: ["SAM"],
    jobNames: ["samurai"],
    xivgear:
      "https://xivgear.app/?page=sl%7C8c0c636b-fd18-4608-bc01-ab5cd2fd15b4",
    credit: ".ref.",
  },
  {
    setName: "VPR",
    jobAbvs: ["VPR"],
    jobNames: ["viper"],
    xivgear:
      "https://xivgear.app/?page=sl%7C079f0244-5822-45fc-9b24-24192bb74d6d",
    credit: ".ref.",
  },
  {
    setName: "BRD",
    jobAbvs: ["BRD"],
    jobNames: ["bard"],
    xivgear:
      "https://xivgear.app/?page=sl%7C83330bab-cf35-4e38-8462-f1e7d6a86363",
    credit: "mortia.",
  },
  {
    setName: "MCH",
    jobAbvs: ["MCH"],
    jobNames: ["machinist"],
    xivgear:
      "https://xivgear.app/?page=sl%7C193115df-987a-45ca-9135-91ae8b023193",
    credit: "mortia.",
  },
  {
    setName: "DNC",
    jobAbvs: ["DNC"],
    jobNames: ["dancer"],
    xivgear:
      "https://xivgear.app/?page=sl%7C82a95a08-8304-42d7-a0b7-89ffc6ad9328",
    credit: ".ref.",
  },
  {
    setName: "Non-BLM Caster",
    jobAbvs: ["SMN", "RDM", "PCT"],
    jobNames: ["summoner", "redmage", "pictomancer"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cd6ca1381-18fc-44c6-a1fc-f0b3f4dca185",
    credit: "mortia.",
  },
  {
    setName: "RDM and PCT",
    jobAbvs: ["RDM", "PCT"],
    jobNames: ["redmage", "pictomancer"],
    xivgear:
      "https://xivgear.app/?page=sl%7C4edd4e11-a29a-4521-ae2d-2f386dd331db",
    credit: ".spider",
  },
  {
    setName: "BLM",
    jobAbvs: ["BLM"],
    jobNames: ["blackmage"],
    xivgear:
      "https://xivgear.app/?page=sl%7Cfdc8f54c-a455-4448-9c55-e88b917dddf9",
    credit: "gutrune",
  },
];

export default function PreBiS() {
  return (
    <BiSTable jobs={jobs} />
  );
}
