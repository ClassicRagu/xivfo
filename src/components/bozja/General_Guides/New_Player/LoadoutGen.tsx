"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const buildsObj = [
  {
    name: "Melee or Ranged",
    ranks: ["1-4", "5-8", "8-11", "12-17", "18+"],
    builds: [
      { Essence: "None", Action1: "None", Action2: "None" },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "None",
        Action2: "None",
      },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "Banner of Noble Ends",
        Action2: "None",
      },
      {
        Essence: "Essence of the Skirmisher",
        Action1: "Lost Font of Power",
        Action2: "Banner of Noble Ends",
      },
      {
        Essence: "Essence of the Beast",
        Action1: "Lost Assassinate",
        Action2: "Lost Rampage",
      },
    ],
  },
  {
    name: "Caster DPS",
    ranks: ["1-4", "5-8", "8-11", "12-14", "15-25", "RDM SMN 18+"],
    builds: [
      { Essence: "None", Action1: "None", Action2: "None" },
      {
        Essence: "Essence of the Ordained",
        Action1: "None",
        Action2: "None",
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Banner of Noble Ends",
        Action2: "None",
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Font of Magic",
        Action2: "Banner of Noble Ends",
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Font of Magic",
        Action2: "Lost Flare Star",
      },
      {
        Essence: "Essence of the Ordained",
        Action1: "Lost Chainspell",
        Action2: "Lost Burst",
      },
    ],
  },
  {
    name: "Healer",
    ranks: ["2-8", "8-11", "12-14", "15-17", "18+"],
    builds: [
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "None",
        Action2: "None",
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Banner of Noble Ends",
        Action2: "None",
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Font of Magic",
        Action2: "Banner of Noble Ends",
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Seraph Strike",
        Action2: "Lost Font of Magic",
      },
      {
        Essence: "Essence of the Aetherweaver",
        Action1: "Lost Seraph Strike",
        Action2: "Lost Burst",
      },
    ],
  },
  {
    name: "Tank",
    ranks: ["2-8", "8-11", "12-17", "18+"],
    builds: [
      {
        Essence: "Essence of the Martialist",
        Action1: "None",
        Action2: "None",
      },
      {
        Essence: "Essence of the Martialist",
        Action1: "Banner of Noble Ends",
        Action2: "None",
      },
      {
        Essence: "Essence of the Martialist",
        Action1: "Lost Font of Power",
        Action2: "Banner of Noble Ends",
      },
      {
        Essence: "Essence of the Bloodsucker",
        Action1: "Lost Font of Power",
        Action2: "Lost Rampage",
      },
    ],
  },
];

export default function LoadoutGen() {
  const [role, setRole] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [build, setBuild] = React.useState({
    Essence: "Waiting for Input",
    Action1: "Waiting for Input",
    Action2: "Waiting for Input",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <FormControl style={{ minWidth: "200px", margin: "15px" }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Role"
            onChange={(e: SelectChangeEvent) => {
              setRank("");
              setBuild({
                Essence: "Waiting for Input",
                Action1: "Waiting for Input",
                Action2: "Waiting for Input",
              })
              setRole(e.target.value as string);
            }}
          >
            <MenuItem value={1}>Melee or Ranged</MenuItem>
            <MenuItem value={2}>Caster DPS</MenuItem>
            <MenuItem value={3}>Healer</MenuItem>
            <MenuItem value={4}>Tank</MenuItem>
          </Select>
        </FormControl>
        {role != "" ? (
          <FormControl style={{ minWidth: "200px", margin: "15px" }}>
            <InputLabel id="demo-simple-select-label">Rank</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rank}
              label="Rank"
              onChange={(e: SelectChangeEvent) => {
                setRank(e.target.value as string);
                setBuild(
                  buildsObj[parseInt(role) - 1].builds[
                    parseInt(e.target.value) - 1
                  ]
                );
              }}
            >
              {buildsObj[parseInt(role) - 1].ranks.map((name, index) => {
                return (
                  <MenuItem key={index - 1} value={index + 1}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        ) : null}
      </div>
      <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 800 }}>
        <Table sx={{ minWidth: 650, maxWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Essence</TableCell>
              <TableCell>Action 1</TableCell>
              <TableCell>Action 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {build.Essence}
              </TableCell>
              <TableCell>{build.Action1}</TableCell>
              <TableCell>{build.Action2}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
