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

type Job = {
  setName: string;
  jobAbvs: string[];
  jobNames: string[];
  xivgear: string;
  credit: string;
};

function JobList(props: { jobs: Job[] }) {
  const { jobs } = props;
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
            <Link href={job.xivgear} style={{ display: "flex" }}>
              {job.xivgear}
            </Link>
          </TableCell>
          <TableCell>{job.credit}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default function BiSTable(props: { jobs: Job[] }) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "8px",
        marginLeft: "0px",
        maxWidth: "1000px",
      }}
    >
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
            <JobList jobs={props.jobs} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
