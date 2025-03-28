import { GridInternal, GridMain } from "@/styles/shared/GridStyles";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import { ChangeEvent } from "react";

type AdditionalSettingsProps = {
  setLongerWindowState: React.Dispatch<React.SetStateAction<boolean>>;
  longerWindowState: boolean;
  setDiscordTimestampAdjust: React.Dispatch<React.SetStateAction<string>>;
  discordTimestampAdjust: string;
};

function AdditionalSettings(props: AdditionalSettingsProps) {
  const {
    setLongerWindowState,
    longerWindowState,
    setDiscordTimestampAdjust,
    discordTimestampAdjust,
  } = props;

  const handleDiscordAdjust = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setDiscordTimestampAdjust(e.target.value);
    }
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginBottom: "10px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          ...GridMain,
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            ...GridInternal,
          }}
        >
          <FormGroup style={{ alignItems: "center", verticalAlign: "middle", marginLeft: "25px" }}>
            <FormControlLabel
              control={
                <Switch
                  checked={longerWindowState}
                  onChange={(e) => setLongerWindowState(e.target.checked)}
                />
              }
              label="Show longer windows"
            />
          </FormGroup>
        </Grid>
        <Grid
          style={{
            ...GridInternal,
          }}
        >
          <TextField
            label="Subtract from Timestamp"
            id="outlined-start-adornment"
            sx={{ width: "79%" }}
            value={discordTimestampAdjust}
            onChange={handleDiscordAdjust}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">Minutes</InputAdornment>
                ),
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AdditionalSettings;
