"use client";
import * as React from "react";
import {
  Autocomplete,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import {
  listActions,
  actions,
  fragments,
  fragmentList,
} from "@/static/bozja/Farming/Fragment_Map/Actions";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/bozja/Farming/Fragment_Map/fragmentState";
import dynamic from "next/dynamic";
import { magitekState } from "@/hooks/bozja/Farming/Fragment_Map/magitekState";
import FarmGuideInputs from "@/components/bozja/Farming/Farming_Guide/FarmGuideInputs";
import { farmingBuildsByValor, roles } from "@/static/bozja/Farming/Farming_Guide/FarmingBuilds";
import { Loadout } from "@/components/shared/Loadout";

const FragmentMap = dynamic(() => import("@/components/bozja/Farming/Fragment_Map/FragmentMap"), {
  ssr: false,
});

function FragmentLookup() {
  const [inputValue, setInputValue] = React.useState("");
  const [fragment, setFragment] = useAtom(fragmentState);
  const [magitek, setMagitek] = useAtom(magitekState);
  const [fragmentInputValue, setFragmentInputValue] = React.useState("");
  const [valor, setValor] = React.useState(0)
  const [roleValue, setRoleValue] = React.useState(-1)
  const [role, setRole] = React.useState("")

  return (
    <>
      <FarmGuideInputs />
      <div style={{ display: "flex" }}>
        {magitek || fragment != "" ?
          <div style={{ display: "flex", margin: "8px" }}>
            <FormControl sx={{ width: "100px" }}>
              <InputLabel>Rays of Valor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valor}
                label="Rays of Valor"
                onChange={(e) => setValor(e.target.value as number)}
              >
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </div>
          : null}
        {valor > 0 ?
          <div style={{ display: "flex", margin: "8px" }}>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel>Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={roleValue}
                label="Role"
                onChange={(e) => {
                  console.log(e.target.value)
                  setRole(roles[e.target.value])
                  setRoleValue(e.target.value)
                }}
              >
                {roles.map((x, index) => {
                  return <MenuItem value={index}>{x}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div> : null
        }
      </div>
      {role != "" ?
        <div>
          <Loadout Action1={farmingBuildsByValor[valor - 1][role].Action1} Action2={farmingBuildsByValor[valor - 1][role].Action2} Essence={farmingBuildsByValor[valor - 1][role].Essence} />
        </div> : null
      }
      {fragment &&
        (fragments[fragment].BSF ||
          fragments[fragment].CLL ||
          fragments[fragment].DR ||
          fragments[fragment].DRS ||
          (fragments[fragment].Quartermaster && !fragments[fragment].Zadnor)) ? (
        <FragmentMap mapName="BSF" farm={true} />
      ) : null}
      {fragment && (fragments[fragment].Zadnor || fragments[fragment].Dal) ? (
        <FragmentMap mapName="Zadnor" farm={true} />
      ) : null}
    </>
  );
}

export default FragmentLookup;
