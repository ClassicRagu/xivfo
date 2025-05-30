"use client";
import { listAreas } from "@/static/weather/Areas";
import { listEurekaFarms } from "@/static/weather/Farms";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FarmSelectorProps = {
  setZoneValue: React.Dispatch<React.SetStateAction<string>>;
  zoneValue: string;
  setFarmValue: React.Dispatch<React.SetStateAction<string>>;
  farmValue: string;
};

function FarmSelector(props: FarmSelectorProps) {
  const { setZoneValue, zoneValue, setFarmValue, farmValue } =
    props;

  const router = useRouter();

  return (
    <div style={{ display: "inline" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Zone</InputLabel>
        <Select
          onChange={(event) => {
            if (event.target.value !== undefined) {
              setZoneValue(event.target.value);
              setFarmValue("");
            } else {
              setZoneValue("");
              setFarmValue("");
            }
          }}
          value={zoneValue}
          id="combo-box-demo"
          label={"Zone"}
          style={{
            minWidth: "350px",
            float: "left",
          }}
        >
          {listAreas.map((x) => {
            return (
              <MenuItem key={x} value={x}>
                {x}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {zoneValue != "" ? (
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-label">Farm</InputLabel>
          <Select
            onChange={(event) => {
              if (event.target.value !== undefined) {
                setFarmValue(event.target.value);
                router.push(`/bozja/Farming/Farming_Windows/${zoneValue}/${event.target.value}`)
              }
            }}
            value={farmValue}
            id="combo-box-demo"
            label={"Farm"}
            style={{
              minWidth: "350px",
              float: "left",
            }}
          >
            {listEurekaFarms
              .find((x) => x.name == zoneValue)
              ?.farms.map((x) => {
                return (
                  <MenuItem value={x.name} key={x.name}>
                    <div style={{ display: "flex" }}>
                      <Image
                        width={22}
                        height={22}
                        alt={`${x.name} weather image`}
                        src={x.weatherIcon}
                      />
                      <Typography>{x.name}</Typography>
                    </div>
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      ) : null}
    </div>
  );
}

export default FarmSelector;
