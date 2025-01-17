"use client";
import { marks, snow } from "@/static/weather/SliderMarks";
import { GridInternal, GridMain } from "@/styles/shared/GridStyles";
import { Grid2, Slider, Typography } from "@mui/material";

type FarmSlidersProps = {
  setWeekState: React.Dispatch<React.SetStateAction<number>>;
  weekState: number;
  setFindSnowState: React.Dispatch<React.SetStateAction<number>>;
  findSnowState: number;
};

function FarmSliders(props: FarmSlidersProps) {
  const {setWeekState, weekState, setFindSnowState, findSnowState} = props

  return (
    <Grid2
      container
      spacing={2}
      style={{
        ...GridMain,
        marginBottom: "30px"
      }}
    >
      <Grid2
        style={{
          ...GridInternal,
          marginBottom: "20px"
        }}
      >
        <Typography gutterBottom>Weeks</Typography>
        <Slider
          style={{ width: "90%", maxWidth: "600px" }}
          aria-label="Weeks"
          value={weekState}
          onChange={(e, newValue) => {
            if (typeof newValue == "number") setWeekState(newValue);
          }}
          max={8}
          min={1}
          step={null}
          valueLabelDisplay="off"
          marks={marks}
        />
      </Grid2>
      <Grid2
        style={{
          ...GridInternal
        }}
      >
        <Typography gutterBottom>Windows</Typography>
        <Slider
          style={{ width: "90%", maxWidth: "600px" }}
          aria-label="Weeks"
          value={findSnowState}
          onChange={(e, newValue) => {
            if (typeof newValue == "number") setFindSnowState(newValue);
          }}
          max={5}
          min={1}
          step={1}
          valueLabelDisplay="off"
          marks={snow}
        />
      </Grid2>
    </Grid2>
  );
}

export default FarmSliders;
