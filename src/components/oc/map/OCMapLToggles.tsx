"use client";
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useAtom } from "jotai";
import { bronzeState } from "@/hooks/oc/map/bronzeState";
import { silverState } from "@/hooks/oc/map/sivlerState";
import { potState } from "@/hooks/oc/map/potState";
import { bunnyState } from "@/hooks/oc/map/bunnyState";
import { mapState } from "@/hooks/oc/map/mapState";
import { maxLevelState } from "@/hooks/oc/map/maxLevelState";
import { minLevelState } from "@/hooks/oc/map/minLevelState";

function OCMapToggles() {
  const [bronze, setBronze] = useAtom(bronzeState);
  const [silver, setSilver] = useAtom(silverState);
  const [pot, setPot] = useAtom(potState);
  const [bunny, setBunny] = useAtom(bunnyState);
  const [map, setMapState] = useAtom(mapState);
  const [maxLevel, setMaxLevel] = useAtom(maxLevelState);
  const [minLevel, setMinLevel] = useAtom(minLevelState);

  return (
    <>
      {
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              maxWidth: 800,
              width: "100%",
            }}
            style={{
              textAlign: "center",
              display: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p>Map Mode</p>
              <ToggleButtonGroup
                value={map}
                exclusive
                onChange={(e, value) => {
                  if (value != null) setMapState(value);
                }}
                aria-label="Map Mode"
                sx={{ mb: 2 }}
              >
                <ToggleButton value="Treasure" aria-label="Treasure">
                  Treasure
                </ToggleButton>
                <ToggleButton value="Mobs" aria-label="Mobs">
                  Mob Locations
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            {map == "Treasure" ? (
              <>
                <p>
                  {"Thank you to infi's"}{" "}
                  <Link href="https://github.com/Infiziert90/EurekaTrackerAutoPopper">
                    Eureka Linker
                  </Link>{" "}
                  plugin for providing coordinate data.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ mb: 2, display: "flex" }}>
                    <FormControlLabel
                      style={{
                        alignItems: "left",
                        verticalAlign: "middle",
                        paddingTop: "5px",
                      }}
                      control={
                        <Checkbox
                          checked={bronze}
                          onClick={() => {
                            setBronze(!bronze);
                          }}
                        />
                      }
                      label="Bronze Chests"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      style={{
                        alignItems: "left",
                        verticalAlign: "middle",
                        paddingTop: "5px",
                      }}
                      control={
                        <Checkbox
                          checked={silver}
                          onClick={() => {
                            setSilver(!silver);
                          }}
                        />
                      }
                      label="Silver Chests"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      style={{
                        alignItems: "left",
                        verticalAlign: "middle",
                        paddingTop: "5px",
                      }}
                      control={
                        <Checkbox
                          checked={pot}
                          onClick={() => {
                            setPot(!pot);
                          }}
                        />
                      }
                      label="Pot Locations"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      style={{
                        alignItems: "left",
                        verticalAlign: "middle",
                        paddingTop: "5px",
                      }}
                      control={
                        <Checkbox
                          checked={bunny}
                          onClick={() => {
                            setBunny(!bunny);
                          }}
                        />
                      }
                      label="Bunny Locations"
                    />
                  </FormControl>
                </div>{" "}
              </>
            ) : null}
            {map == "Mobs" ? (
              <>
                <TextField
                  type="numeric"
                  onChange={(e) => {
                    const updatedVal = e.target.value;
                    if (updatedVal.match(/[^0-9]/)) {
                      return e.preventDefault();
                    } else if (updatedVal != "") {
                      setMinLevel(parseInt(updatedVal));
                    }
                  }}
                  defaultValue={minLevel}
                  label={"Minimum Level"}
                  sx={{m: 1}}
                />
                <TextField
                  type="numeric"
                  onChange={(e) => {
                    const updatedVal = e.target.value;
                    if (updatedVal.match(/[^0-9]/)) {
                      return e.preventDefault();
                    } else if (updatedVal != "") {
                      setMaxLevel(parseInt(updatedVal));
                    }
                  }}
                  defaultValue={maxLevel}
                  label="Maximum Level"
                  sx={{m: 1}}
                />
              </>
            ) : null}
          </Card>
        </div>
      }
    </>
  );
}

export default OCMapToggles;
