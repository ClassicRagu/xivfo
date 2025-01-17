"use client";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAtom } from "jotai";
import { weaponState } from "../RelicTracker";

const imageStyle = {
  width: "30px",
  height: "30px",
  verticalAlign: "middle",
  marginRight: "5px",
};

function RelicRemainingItems() {
  const [currentWeaponState] = useAtom(weaponState);

  const sumOfFalses = currentWeaponState.map((x) => {
    const initialValue = 0;
    const sumOfTrue = x.reduce(
      (accumulator, currentVal) => accumulator + Number(currentVal),
      initialValue
    );
    return 17 - sumOfTrue;
  });

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Remaining</TableCell>
                <TableCell>Additional Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sumOfFalses[0] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="Scalepower"
                        src="/Bozja/Relics/step1/Scalepowder.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Thavnairian Scalepowder
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[0] * 4}</TableCell>
                  <TableCell>{sumOfFalses[0] * 1000} Poetics</TableCell>
                </TableRow>
              ) : null}
              {sumOfFalses[1] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="TorturedMemory"
                        src="/Bozja/Relics/step2/TorturedMemory.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Tortured/Sorrowful/Harrowing Memories
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[1] * 20} each</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ) : null}
              {sumOfFalses[2] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="BitterMemory"
                        src="/Bozja/Relics/step3/BitterMemory.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Bitter Memories
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[2] * 6}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ) : null}
              {sumOfFalses[3] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="LoathsomeMemory"
                        src="/Bozja/Relics/step4/LoathsomeMemory.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Loathsome Memories
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[3] * 15}</TableCell>
                  <TableCell>{sumOfFalses[3] * 3} CLLs</TableCell>
                </TableRow>
              ) : null}
              {sumOfFalses[4] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="TimewornArtifact"
                        src="/Bozja/Relics/step5/TimewornArtifact.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Timeworn Artifacts
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[4] * 15}</TableCell>
                  <TableCell>{sumOfFalses[4] * 5} DRNs</TableCell>
                </TableRow>
              ) : null}
              {sumOfFalses[5] > 0 ? (
                <TableRow>
                  <TableCell>
                    <div>
                      <Box
                        component="img"
                        sx={imageStyle}
                        alt="RawEmotion"
                        src="/Bozja/Relics/step6/RawEmotion.png"
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Raw Emotions
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{sumOfFalses[5] * 15}</TableCell>
                  <TableCell>
                    {sumOfFalses[4] * 5} DRNs +{" "}
                    {Math.ceil(
                      (sumOfFalses[5] * 15 - sumOfFalses[4] * 5 * 2) / 3
                    )}{" "}
                    Dal
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default RelicRemainingItems;
