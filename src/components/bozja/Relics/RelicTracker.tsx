"use client";
import {
  Box,
  Button,
  Grid2,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { defaultList } from "./weapons/defaultList";
import { atomWithStorage } from "jotai/utils";
import RelicList from "./weapons/RelicList";
import RelicRemainingItems from "./weapons/RelicRemainingItems";
import { useState } from "react";
import { useAtom } from "jotai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const weaponState = atomWithStorage<boolean[][]>(
  "weaponState",
  defaultList
);

function RelicTracker() {
  const [weaponList, setWeaponList] = useAtom(weaponState);
  const [exportState, setExportState] = useState(false);
  const [importState, setImportState] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imported, setImported] = useState<boolean | null | string>(false);
  const [importValue, setImportValue] = useState("");

  const validateImport = (importValue: null | string) => {
    if (importValue != null) {
      try {
        // I'm so sorry
        if (importValue.toLocaleLowerCase() == "bee" || importValue.toLocaleLowerCase() == "b") {
          var snd = new Audio("bee.mp3");
          snd.volume = 0.2;
          snd.play();
          setImported("bee");
          return;
        }
        // Real importing stuff
        const parsedVal = JSON.parse(importValue);
        if (parsedVal.length != 6) {
          setImported(null);
          return;
        }
        parsedVal.forEach((x: boolean[]) => {
          if (x.length != 17) {
            setImported(null);
            return;
          } else {
            x.forEach((y: boolean) => {
              if (y != true && y != false) {
                setImported(null);
                return;
              }
            });
          }
        });
        setWeaponList(parsedVal);
        setImported(true);
        return;
      } catch {
        setImported(null);
        return;
      }
    } else {
      setImported(null);
    }
  };

  return (
    <>
      <div style={{ padding: "10px", textAlign: "left", width: "100%", paddingTop: "0px" }}>
        <RelicRemainingItems />
        <Grid2
          container
          spacing={2}
          style={{
            minHeight: "30px",
            maxWidth: "1000px",
            alignItems: "top",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid2
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "30px",
              minWidth: "250px",
            }}
          >
            <Button
              size="small"
              style={{ minWidth: "250px" }}
              onClick={() => {
                setImportState(true);
              }}
              variant={"contained"}
            >
              Import
            </Button>
          </Grid2>
          <Grid2
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "30px",
              minWidth: "250px",
            }}
          >
            <Button
              size="small"
              style={{ minWidth: "250px" }}
              onClick={() => {
                setExportState(true);
              }}
              variant={"contained"}
            >
              Export
            </Button>
          </Grid2>
        </Grid2>
        <TableContainer component={Paper} style={{marginTop: "10px"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job</TableCell>
                <TableCell>Step 1</TableCell>
                <TableCell>Step 2</TableCell>
                <TableCell>Step 3</TableCell>
                <TableCell>Step 4</TableCell>
                <TableCell>Step 5</TableCell>
                <TableCell>Step 6</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RelicList />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal
        open={exportState}
        onClose={() => {
          setExportState(false);
          setCopied(false);
        }}
      >
        <Box sx={style}>
          <h2>Export</h2>
          <textarea
            readOnly={true}
            style={{ width: "100%", minHeight: "200px", resize: "none" }}
            value={JSON.stringify(weaponList)}
          ></textarea>
          <Button
            size="small"
            style={{ minWidth: "250px", marginTop: "10px" }}
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(weaponList));
              setCopied(true);
            }}
            variant={"contained"}
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </Box>
      </Modal>
      <Modal
        open={importState}
        onClose={() => {
          setImportState(false);
          setImported(false);
          setImportValue("");
        }}
      >
        <Box sx={style}>
          <h2>Import</h2>
          <textarea
            value={importValue}
            onChange={(e) => {
              setImportValue(e.target.value);
            }}
            style={{ width: "100%", minHeight: "200px", resize: "none" }}
          ></textarea>
          <Button
            size="small"
            style={{ minWidth: "250px", marginTop: "10px" }}
            onClick={() => {
              validateImport(importValue);
            }}
            variant={"contained"}
          >
            {imported == true
              ? "Imported!"
              : imported == "bee" ? "BEE" :
              imported == null
              ? "Invalid Import"
              : "Import"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default RelicTracker;
