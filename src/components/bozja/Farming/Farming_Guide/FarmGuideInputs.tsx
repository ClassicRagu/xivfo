"use client";
import * as React from "react";
import {
  Autocomplete, Checkbox,
  FormControl,
  FormControlLabel, TextField
} from "@mui/material";
import "leaflet/dist/leaflet.css";

import {
  listActions,
  actions, fragmentList
} from "@/static/bozja/Farming/Fragment_Map/Actions";
import { useAtom } from "jotai";
import { fragmentState } from "@/hooks/bozja/Farming/Fragment_Map/fragmentState";
import { magitekState } from "@/hooks/bozja/Farming/Fragment_Map/magitekState";

function FarmGuideInputs() {
  const [inputValue, setInputValue] = React.useState("");
  const [, setFragment] = useAtom(fragmentState);
  const [magitek, setMagitek] = useAtom(magitekState);
  const [fragmentInputValue, setFragmentInputValue] = React.useState("");

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
              }
            }}
            disablePortal
            id="combo-box-demo"
            options={listActions}
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
            }}
            disablePortal
            id="combo-box-demo"
            options={fragmentList}
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
