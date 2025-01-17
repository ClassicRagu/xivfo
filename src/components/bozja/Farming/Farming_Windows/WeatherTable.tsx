import { WindowTimes } from "@/types/weather/WindowTimes";
import { ContentCopy } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Image from "next/image";

type WeatherTableProps = {
  snowState: WindowTimes[];
  longerWindowState: boolean;
  findSnowState: number;
  discordTimestampAdjust: string
};

function WeatherTable(props: WeatherTableProps) {
  const { snowState, longerWindowState, findSnowState, discordTimestampAdjust } = props;

  return (
    <TableContainer component={Paper} style={{ width: "80%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>ET</TableCell>
            <TableCell>Windows</TableCell>
            <TableCell>Weathers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {snowState.map((x, index) => {
            if (longerWindowState || x.totalWindows == findSnowState) {
              return (
                <TableRow key={`supermoist-${index}`}>
                  <TableCell key={`${index}`}>
                    {x.startTime.toLocaleString()}
                    <Tooltip title="Copy as Discord Timestamp">
                      <IconButton
                        aria-label="copy"
                        onClick={() => {
                          const timestamp = x.startTime.getTime() / 1000 - (parseInt(discordTimestampAdjust) * 60)
                          navigator.clipboard.writeText(
                            `<t:${timestamp}:F> <t:${timestamp}:R>`
                          );
                        }}
                      >
                        <ContentCopy />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{x.startTimeET}</TableCell>
                  <TableCell>{x.totalWindows}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {x.weathers.map((y, index) => {
                        return (
                          <Image
                            key={index}
                            src={`/weathericons/${y}.png`}
                            alt="weather icon"
                            width={30}
                            height={30}
                          />
                        );
                      })}
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            } else {
              return null;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WeatherTable;
