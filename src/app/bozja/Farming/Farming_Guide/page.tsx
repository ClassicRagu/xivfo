"use client";
import * as React from "react";
import {
  Box,
  FormControl, IconButton,
  InputLabel, MenuItem,
  Modal,
  Select, Tooltip
} from "@mui/material";
import "leaflet/dist/leaflet.css";
import MapIcon from '@mui/icons-material/Map';

import {
  fragments
} from "@/static/bozja/Farming/Fragment_Map/Actions";
import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import FarmGuideInputs from "@/components/bozja/Farming/Farming_Guide/FarmGuideInputs";
import { farmingBuildsByValor } from "@/static/bozja/Farming/Farming_Guide/FarmingBuilds";
import { Loadout } from "@/components/shared/Loadout";
import { valorState } from "@/hooks/bozja/Farming/Farming_Guide/valorState";
import { roleState } from "@/hooks/bozja/Farming/Farming_Guide/roleState";
import { roleInputState } from "@/hooks/bozja/Farming/Farming_Guide/roleInputState";
import { findNextWeatherWindow, ZONE_BOZJAN_SOUTHERN_FRONT, ZONE_ZADNOR } from "xivweather";
import Image from "next/image";
import { guideMagitekState } from "@/hooks/bozja/Farming/Farming_Guide/guideMagitekState";
import { guideFragmentState } from "@/hooks/bozja/Farming/Farming_Guide/guideFragmentState";

const FragmentMap = dynamic(() => import("@/components/bozja/Farming/Fragment_Map/FragmentMap"), {
  ssr: false,
});

function FragmentLookup() {
  const [fragment] = useAtom(guideFragmentState);
  const [magitek] = useAtom(guideMagitekState);
  const [valor, setValor] = useAtom(valorState)
  const [roleInput, setRoleInput] = useAtom(roleInputState)
  const [role, setRole] = useAtom(roleState)
  const [openState, setOpenState] = React.useState(false)

  return (
    <>
      <FarmGuideInputs />
      <div style={{ display: "flex" }}>
        {magitek || (fragment != "" && fragments[fragment].IsStandardFarm) ?
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
                value={roleInput}
                label="Role"
                onChange={(e) => {
                  console.log(e.target.value)
                  setRole(Object.keys(fragment != "" ? farmingBuildsByValor[valor - 1][fragments[fragment].FarmType] : farmingBuildsByValor[valor - 1]["Cluster"])[e.target.value as number])
                  setRoleInput(e.target.value as number)
                }}
              >
                {Object.keys(fragment != "" ? farmingBuildsByValor[valor - 1][fragments[fragment].FarmType] : farmingBuildsByValor[valor - 1]["Cluster"]).map((x, index) => {
                  return <MenuItem value={index} key={index}>{x}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div> : null
        }
        {role != "" || (fragment && !fragments[fragment].IsStandardFarm) ?
          <Tooltip title="Show Map" sx={{ margin: "8px" }}>
            <IconButton
              aria-label="map"
              onClick={() => setOpenState(true)}
            >
              <MapIcon />
            </IconButton>
          </Tooltip>
          : null
        }
        {role != "" && fragment != "" && fragments[fragment].BSFWeather ?
            findNextWeatherWindow(new Date(), ZONE_BOZJAN_SOUTHERN_FRONT, fragments[fragment].BSFWeather).map((x) => {
              return <div style={{ display: "flex", margin: "8px", alignItems: "center" }} key={x.weathers[0]}>
                <p style={{marginRight: "2px"}}>Next BSF Weather:</p>
                <Image
                  width={22}
                  height={22}
                  alt={`${x.weathers[0]} weather image`}
                  src={`/weathericons/${x.weathers[0]}.png`}
                />
                <p>{x.startTime < new Date() ? "Active Now" : x.startTime.toLocaleTimeString()}</p>
              </div>
            }) : null
        }
        {role != "" && fragment != "" && fragments[fragment].ZadnorWeather ?
            findNextWeatherWindow(new Date(), ZONE_ZADNOR, fragments[fragment].ZadnorWeather).map((x) => {
              return <div style={{ display: "flex", margin: "8px", alignItems: "center" }} key={x.weathers[0]}>
                <p style={{marginRight: "2px"}}>Next Zadnor Weather:</p>
                <Image
                  width={22}
                  height={22}
                  alt={`${x.weathers[0]} weather image`}
                  src={`/weathericons/${x.weathers[0]}.png`}
                />
                <p style={{marginLeft: "8px"}}>{x.startTime < new Date() ? "Active Now" : x.startTime.toLocaleTimeString()}</p>
              </div>
            }) : null
        }
      </div>
      {role != "" ?
        <div style={{ marginLeft: "8px" }}>
          <div style={{ marginBottom: "8px" }}>
            {fragment != "" ?
              <Loadout Action1={farmingBuildsByValor[valor - 1][fragments[fragment].FarmType][role].Action1}
                Action2={farmingBuildsByValor[valor - 1][fragments[fragment].FarmType][role].Action2}
                Essence={farmingBuildsByValor[valor - 1][fragments[fragment].FarmType][role].Essence} /> :
              <Loadout Action1={farmingBuildsByValor[valor - 1]["Cluster"][role].Action1}
                Action2={farmingBuildsByValor[valor - 1]["Cluster"][role].Action2}
                Essence={farmingBuildsByValor[valor - 1]["Cluster"][role].Essence} />
            }
          </div>
          <div>
            {fragment != "" ? farmingBuildsByValor[valor - 1][fragments[fragment].FarmType][role].HowTo :
              farmingBuildsByValor[valor - 1]["Cluster"][role].HowTo}
          </div>
        </div> : null
      }
      {fragment && !fragments[fragment].IsStandardFarm ?
      <div style={{margin: "8px"}}>
        This fragment is not farmable. It is obtained via {fragments[fragment].FarmType}.
      </div> : null
      }
      <Modal
        open={openState}
        onClose={() => setOpenState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "auto",
            maxWidth: 650,
          }}
        >
          {(magitek || fragment) &&
            (magitek ||
              fragments[fragment].BSF ||
              fragments[fragment].CLL ||
              fragments[fragment].DR ||
              fragments[fragment].DRS ||
              (fragments[fragment].Quartermaster && !fragments[fragment].Zadnor)) ? (
            <FragmentMap mapName="BSF" farm={true} dragging={false} maxZoom={4} maxWidth={650} guidePage={true}/>
          ) : fragment && (fragments[fragment].Zadnor || fragments[fragment].Dal) ? (
            <FragmentMap mapName="Zadnor" farm={true} dragging={false} maxZoom={4} maxWidth={650} guidePage={true}/>
          ) : null}
        </Box>
      </Modal>
    </>
  );
}

export default FragmentLookup;
