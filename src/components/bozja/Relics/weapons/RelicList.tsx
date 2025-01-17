"use client";
import { Box, TableCell, TableRow } from "@mui/material";
import IconBox from "./IconBox";

const basicSX = {
  height: "auto",
  maxWidth: "50px",
  width: "auto",
  verticalAlign: "middle",
  marginRight: "5px",
};

const jobs = [
  { jobAbv: "PLD", jobName: "paladin" },
  { jobAbv: "WAR", jobName: "warrior" },
  { jobAbv: "DRK", jobName: "darkknight" },
  { jobAbv: "GNB", jobName: "gunbreaker" },
  { jobAbv: "WHM", jobName: "whitemage" },
  { jobAbv: "SCH", jobName: "scholar" },
  { jobAbv: "AST", jobName: "astrologian" },
  { jobAbv: "MNK", jobName: "monk" },
  { jobAbv: "DRG", jobName: "dragoon" },
  { jobAbv: "NIN", jobName: "ninja" },
  { jobAbv: "SAM", jobName: "samurai" },
  { jobAbv: "BRD", jobName: "bard" },
  { jobAbv: "MCH", jobName: "machinist" },
  { jobAbv: "DNC", jobName: "dancer" },
  { jobAbv: "BLM", jobName: "blackmage" },
  { jobAbv: "SMN", jobName: "summoner" },
  { jobAbv: "RDM", jobName: "redmage" },
];

function RelicList() {
  return (
    <>
      {jobs.map((job, index) => (
        <TableRow key={`job-${index}`}>
          <TableCell>
            <Box
              component="img"
              sx={{
                ...basicSX,
                width: "50px",
                height: "50px",
              }}
              alt={`${job.jobName} Job Icon`}
              src={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobName}.png`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={0}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_1_HD.png`}
              altText={`${job.jobName} Step 1`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={1}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_1_HD.png`}
              altText={`${job.jobName} Step 2`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={2}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_1_HD.png`}
              altText={`${job.jobName} Step 3`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={3}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_2_HD.png`}
              altText={`${job.jobName} Step 4`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={4}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_2_HD.png`}
              altText={`${job.jobName} Step 5`}
            />
          </TableCell>
          <TableCell>
            <IconBox
              step={5}
              job={index}
              relicImage={`/bozja/Relics/weapons/${job.jobAbv}/${job.jobAbv}_3_HD.png`}
              altText={`${job.jobName} Step 6`}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default RelicList;
