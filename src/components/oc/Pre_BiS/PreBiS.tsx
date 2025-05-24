import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const basicSX = {
  height: "auto",
  maxWidth: "50px",
  width: "auto",
  verticalAlign: "middle",
  marginRight: "5px",
};

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
      "https://xivgear.app/?page=sl%7Cf483b624-7b0e-4ae3-8a7b-805a95e5ad8c",
    credit: ".ref.",
  },
  {
    setName: "VPR",
    jobAbvs: ["VPR"],
    jobNames: ["viper"],
    xivgear:
      "https://xivgear.app/?page=sl%7C7fbe1b9e-7280-422c-9c65-f6b3bd545158",
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
      "https://xivgear.app/?page=sl%7Ce55db780-138e-465a-972c-021580313da8",
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

function JobList() {
  return (
    <>
      {jobs.map((job, index) => (
        <TableRow key={`job-${index}`}>
          <TableCell>
            {job.jobAbvs.map((abv, jobIndex) => {
              return (
                <Box
                  key={jobIndex}
                  component="img"
                  sx={{
                    ...basicSX,
                    width: "25px",
                    height: "25px",
                  }}
                  alt={`${job.jobNames[jobIndex]} Job Icon`}
                  src={`/Bozja/Relics/weapons/${abv}/${job.jobNames[jobIndex]}.png`}
                />
              );
            })}
            {job.setName}
          </TableCell>
          <TableCell>
            <Link
              href={job.xivgear}
              style={{ display: "flex" }}
            >
              {job.xivgear}
            </Link>
          </TableCell>
          <TableCell>
            {job.credit}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default function PreBiS() {
  return (
    <div style={{ padding: "16px", borderRadius: "8px", marginLeft: "0px", maxWidth:"1000px" }}>
      <TableContainer component={Paper} style={{ marginTop: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell>Build Link</TableCell>
              <TableCell>Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <JobList />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
