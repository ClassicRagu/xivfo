"use client";
import * as React from "react";
import {
  Autocomplete, Checkbox,
  FormControl,
  FormControlLabel, TextField
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import {
  actions, listActions
} from "@/static/bozja/Farming/Fragment_Map/Actions";
import { useAtom } from "jotai";
import { limitedFragmentList } from "@/static/bozja/Farming/Farming_Guide/LimitedLists";
import { roleState } from "@/hooks/bozja/Farming/Farming_Guide/roleState";
import { valorState } from "@/hooks/bozja/Farming/Farming_Guide/valorState";
import { roleInputState } from "@/hooks/bozja/Farming/Farming_Guide/roleInputState";
import { guideFragmentState } from "@/hooks/bozja/Farming/Farming_Guide/guideFragmentState";
import { guideMagitekState } from "@/hooks/bozja/Farming/Farming_Guide/guideMagitekState";

function FarmGuideInputs() {
  const [inputValue, setInputValue] = React.useState("");
  const [, setFragment] = useAtom(guideFragmentState);
  const [magitek, setMagitek] = useAtom(guideMagitekState);
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
      display: "flex",
      flexWrap: "wrap"
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
            options={listActions}
            style={{
              float: "left",
            }}
            sx={{ m: 1, minWidth: 350, display:"flex" }}
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
            sx={{ m: 1, minWidth: 275, display:"flex" }}
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
            display:"flex"
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
