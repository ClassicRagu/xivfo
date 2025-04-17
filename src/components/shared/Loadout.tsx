import { actions } from "@/static/bozja/Farming/Fragment_Map/Actions"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

type LoadoutProps = {
  Action1: string
  Action2: string
  Essence: string
}

export const Loadout = (props: LoadoutProps) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
      <Table
        sx={{ maxWidth: 800 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Essence</TableCell>
            <TableCell>Action 1</TableCell>
            <TableCell>Action 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>Build</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {props.Essence != "None" ? (
                <Box
                  component="img"
                  sx={{
                    verticalAlign: "middle",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt={props.Essence}
                  src={`/Bozja/Lost%20Finds%20SD/${props.Essence.replace(
                    " ",
                    "%20"
                  )}.png`}
                />
              ) : null}
              {props.Essence}
            </TableCell>
            <TableCell>
              {props.Action1 != "None" ? (
                <Box
                  component="img"
                  sx={{
                    verticalAlign: "middle",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt={props.Action1}
                  src={`/Bozja/Lost%20Finds%20SD/${props.Action1.replace(
                    " ",
                    "%20"
                  )}.png`}
                />
              ) : null}
              {props.Action1}
            </TableCell>
            <TableCell>
              {props.Action2 != "None" ? (
                <Box
                  component="img"
                  sx={{
                    verticalAlign: "middle",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt={props.Action2}
                  src={`/Bozja/Lost%20Finds%20SD/${props.Action2.replace(
                    " ",
                    "%20"
                  )}.png`}
                />
              ) : null}
              {props.Action2}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Fragments</b>
            </TableCell>
            <TableCell component="th" scope="row">
              {props.Essence != "None"
                ? actions.filter((x) => x.ActionName === props.Essence)[0]
                  .Fragment
                : props.Essence}
            </TableCell>
            <TableCell>
              {props.Action1 != "None"
                ? actions.filter((x) => x.ActionName === props.Action1)[0]
                  .Fragment
                : props.Action1}
            </TableCell>
            <TableCell>
              {props.Action2 != "None"
                ? actions.filter((x) => x.ActionName === props.Action2)[0]
                  .Fragment
                : props.Action2}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}