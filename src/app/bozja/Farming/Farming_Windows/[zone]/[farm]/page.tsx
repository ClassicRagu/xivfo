"use client";
import FarmSelector from "@/components/bozja/Farming/Farming_Windows/FarmSelector";
import FarmSliders from "@/components/bozja/Farming/Farming_Windows/FarmSliders";
import AdditionalSettings from "@/components/bozja/Farming/Farming_Windows/AdditionalSettings";
import WeatherTable from "@/components/bozja/Farming/Farming_Windows/WeatherTable";
import { getWindows } from "@/functions/weather/getWindows";
import { FarmInfo } from "@/types/weather/FarmInfo";
import { WindowTimes } from "@/types/weather/WindowTimes";
import React from "react";
import { listEurekaFarms } from "@/static/weather/Farms";

function Weather({ params }: { params: Promise<{ zone: string; farm: string }> }) {
  const {zone, farm} = React.use(params)
  const [longerWindowState, setLongerWindowState] = React.useState(true);
  const [discordTimestampAdjust, setDiscordTimestampAdjust] =
    React.useState("0");
  const [weekState, setWeekState] = React.useState(1);
  const [findSnowState, setFindSnowState] = React.useState(2);
  const [snowState, setSnowState] = React.useState<WindowTimes[] | null>(null);
  const [zoneValue, setZoneValue] = React.useState(zone.replaceAll("%20", " "));
  const [farmValue, setFarmValue] = React.useState(
    farm.replaceAll("%20", " ")
  );
  const [farmInfo, setFarmInfo] = React.useState<FarmInfo>(
    listEurekaFarms
      .find((x) => x.name == zone.replaceAll("%20", " "))
      ?.farms.find((x) => x.name == farm.replaceAll("%20", " "))?.info ?? {
      weathers: [""],
      time: -1,
    }
  );

  React.useEffect(() => {
    setSnowState(
      getWindows(
        new Date(),
        weekState,
        findSnowState,
        zoneValue,
        farmInfo.weathers,
        farmInfo.time
      )
    );
  }, [weekState, findSnowState, zoneValue, farmInfo]);

  React.useEffect(() => {
    const farmName = farm.replaceAll("%20", " ");
    const farmVals = listEurekaFarms
      .find((x) => x.name == zone.replaceAll("%20", " "))
      ?.farms.find((x) => x.name == farmName)?.info ?? {
      weathers: [""],
      time: -1,
    };

    setSnowState(
      getWindows(
        new Date(),
        1,
        2,
        zone.replaceAll("%20", " "),
        farmVals.weathers,
        farmVals.time
      )
    );
  }, [farm, zone]);

  return (
    <>
      <FarmSelector
        setZoneValue={setZoneValue}
        zoneValue={zoneValue}
        setFarmValue={setFarmValue}
        farmValue={farmValue}
        setFarmInfo={setFarmInfo}
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
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginBottom: "10px",
              width: "100%"
            }}
          >
            {
              // Ensure we have a snowState
              snowState != null ? (
                <WeatherTable
                  snowState={snowState}
                  longerWindowState={longerWindowState}
                  findSnowState={findSnowState}
                  discordTimestampAdjust={discordTimestampAdjust}
                />
              ) : null
            }
          </div>
        </>
      ) : null}
    </>
  );
}

export default Weather;
