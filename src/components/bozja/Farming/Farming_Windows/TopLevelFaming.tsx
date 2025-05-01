"use client";
import FarmSelector from "@/components/bozja/Farming/Farming_Windows/FarmSelector";
import FarmSliders from "@/components/bozja/Farming/Farming_Windows/FarmSliders";
import AdditionalSettings from "@/components/bozja/Farming/Farming_Windows/AdditionalSettings";
import WeatherTable from "@/components/bozja/Farming/Farming_Windows/WeatherTable";
import React from "react";
import Image from "next/image";
import HelpIcon from "@mui/icons-material/Help";
import { Stack, Tooltip } from "@mui/material";
import { snowStateAtom } from "@/hooks/bozja/Farming/Farming_Weather/snowStateAtom";
import { useAtom } from "jotai";
import { zoneValueAtom } from "@/hooks/bozja/Farming/Farming_Weather/zoneValueAtom";
import { farmValueAtom } from "@/hooks/bozja/Farming/Farming_Weather/farmValueAtom";
import { findSnowStateAtom } from "@/hooks/bozja/Farming/Farming_Weather/findSnowStateAtom";
import { weekStateAtom } from "@/hooks/bozja/Farming/Farming_Weather/weekStateAtom";

function Weather() {
  const [longerWindowState, setLongerWindowState] = React.useState(true);
  const [discordTimestampAdjust, setDiscordTimestampAdjust] =
    React.useState("0");
  const [initialSnow] = useAtom(snowStateAtom)
  const [weekState, setWeekState] = useAtom(weekStateAtom)
  const [findSnowState, setFindSnowState] = useAtom(findSnowStateAtom)
  const [snowState, setSnowState] = useAtom(snowStateAtom)
  const [zoneValue, setZoneValue] = useAtom(zoneValueAtom)
  const [farmValue, setFarmValue] = useAtom(farmValueAtom)

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(snowState)
      if (
        snowState &&
        snowState.length > 0 &&
        snowState[0].startTime < new Date()
      ) {
        if (
          new Date(
            Number(snowState[0].endTime) -
              (snowState[0].weathers.length - 1) * 1400000
          ) < new Date()
        ) {
          const tempState = snowState;
          tempState[0].weathers.shift();
          tempState[0].startTime = new Date(
            Number(tempState[0].startTime) + 1400000
          );
          if (tempState[0].weathers.length == 0) {
            tempState.shift();
          }
          setSnowState([...tempState]);
        }
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <FarmSelector
        setZoneValue={setZoneValue}
        zoneValue={zoneValue}
        setFarmValue={setFarmValue}
        farmValue={farmValue}
      />
      {zoneValue != "" && farmValue != "" ? (
        <>
          <FarmSliders
            setWeekState={setWeekState}
            weekState={weekState}
            setFindSnowState={setFindSnowState}
            findSnowState={findSnowState}
          />
          <AdditionalSettings
            setLongerWindowState={setLongerWindowState}
            longerWindowState={longerWindowState}
            discordTimestampAdjust={discordTimestampAdjust}
            setDiscordTimestampAdjust={setDiscordTimestampAdjust}
          />
          <Stack spacing={1} sx={{ alignItems: "center", width: "100%" }}>
            {snowState &&
        snowState.length > 0 &&
        snowState[0].startTime < new Date() ? (
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={0.5}
              >
                <div style={{ display: "flex" }}>
                  <Image
                    width={27}
                    height={27}
                    alt={`${snowState[0].weathers[0]} weather image`}
                    src={`/weathericons/${snowState[0].weathers[0]}.png`}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <p>
                    Current window ends at:{" "}
                    {new Date(
                      Number(snowState[0].endTime) -
                        (snowState[0].weathers.length - 1) * 1400000
                    ).toLocaleString()}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <Tooltip
                    title={
                      "Please bear in mind that this value does not update dynamically and requires a page reload or update to refresh"
                    }
                  >
                    <HelpIcon />
                  </Tooltip>
                </div>
              </Stack>
            ) : null}
            {
              // Ensure we have a snowState
              initialSnow != null ? (
                <WeatherTable
                  snowState={snowState ?? initialSnow}
                  longerWindowState={longerWindowState}
                  findSnowState={findSnowState}
                  discordTimestampAdjust={discordTimestampAdjust}
                />
              ) : null
            }
          </Stack>
        </>
      ) : null}
    </>
  );
}

export default Weather;
