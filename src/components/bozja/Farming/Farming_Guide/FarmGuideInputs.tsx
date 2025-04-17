"use client";
import * as React from "react";
import {
  Autocomplete, Checkbox,
  FormControl,
  FormControlLabel, TextField
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import {
  actions
} from "@/static/bozja/Farming/Fragment_Map/Actions";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/bozja/Farming/Fragment_Map/fragmentState";
import { magitekState } from "@/hooks/bozja/Farming/Fragment_Map/magitekState";
import { limitedActionList, limitedFragmentList } from "@/static/bozja/Farming/Farming_Guide/LimitedLists";
import { roleState } from "@/hooks/bozja/Farming/Farming_Guide/roleState";
import { valorState } from "@/hooks/bozja/Farming/Farming_Guide/valorState";
import { roleInputState } from "@/hooks/bozja/Farming/Farming_Guide/roleInputState";

function FarmGuideInputs() {
  const [inputValue, setInputValue] = React.useState("");
  const [, setFragment] = useAtom(fragmentState);
  const [magitek, setMagitek] = useAtom(magitekState);
  const [fragmentInputValue, setFragmentInputValue] = React.useState("");
  const [, setValor] = useAtom(valorState)
  const [, setRole] = useAtom(roleState)
  const [, setRoleInput] = useAtom(roleInputState)

  const resetStates = () => {
    setValor(0)
    setRole("")
    setRoleInput(-1)
  }

  return (
    <div style={{
      display: "flex"
    }}>
      {!magitek ?
        <>
          <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              if (newInputValue !== undefined) {
                setInputValue(newInputValue);
              } else {
                setInputValue("");
              }
            }}
            value={inputValue}
            onChange={(event, newValue) => {
              const val = actions.filter(
                (x) => x.ActionName === newValue
              )[0];
              if (val) {
                setFragment(val.Fragment);
                setFragmentInputValue(val.Fragment);
                resetStates()
              }
            }}
            disablePortal
            id="combo-box-demo"
            options={limitedActionList}
            style={{
              float: "left",
            }}
            sx={{ m: 1, minWidth: 350 }}
            renderInput={(params) => (
              <TextField {...params} label="Action/Essence/Item" />
            )}
          />
          <Autocomplete
            inputValue={fragmentInputValue}
            value={fragmentInputValue}
            onInputChange={(event, newInputValue) => {
              setFragmentInputValue(newInputValue);
            }}
            onChange={(event, newValue) => {
              setFragment(newValue ?? "");
              setInputValue("");
              resetStates()
            }}
            disablePortal
            id="combo-box-demo"
            options={limitedFragmentList}
            style={{
              float: "left",
            }}
            sx={{ m: 1, minWidth: 275 }}
            renderInput={(params) => (
              <TextField {...params} label="Fragment" />
            )}
          />
        </> : null}
      <FormControl sx={{ m: 1 }}>
        <FormControlLabel
          style={{
            alignItems: "left",
            verticalAlign: "middle",
            paddingTop: "5px",
          }}
          control={
            <Checkbox
              checked={magitek}
              onClick={() => {
                setFragment("")
                setInputValue("")
                setFragmentInputValue("")
                resetStates()
                setMagitek(!magitek);
              }}
            />
          }
          label="Cluster Farming"
        />
      </FormControl>
    </div>
  );
}

export default FarmGuideInputs;
