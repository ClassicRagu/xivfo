"use client";
import * as React from "react";
import { Avatar, Button, Grid } from "@mui/material";

function CLL() {
  const [startTime, setStartTime] = React.useState<number>(0);
  const [now, setNow] = React.useState<number>(0);
  const [cllTime, setCLLTime] = React.useState(3600);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      // Update the current time every 500ms.
      // The lower this is the more accurately it updates
      setNow(Date.now());
    }, 500);
  }

  function handleStop() {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;
  let minutesRemaining = 0;
  let secondsRemaining = 0;
  if (startTime != null && now != null) {
    secondsPassed = cllTime - (now - startTime) / 1000;
    minutesRemaining = Math.floor(secondsPassed / 60);
    secondsRemaining = Math.floor(secondsPassed % 60);
  }

  return (
    <>
      <div>
        <h2>
          <p>Time Remaining Till Next CLL</p>
          <p>
            {
              // I'm so sorry for this code, I'm being lazy
              minutesRemaining > 0 ? minutesRemaining : 0
            }
            :{secondsRemaining < 10 ? "0" : null}
            {secondsRemaining >= 0 ? secondsRemaining : 0}
          </p>
        </h2>
        <p>{startTime == 0 ? "Click START/RESTART to start the timer" : `Timer started: ${new Date(startTime).toLocaleTimeString()}`}</p>
      </div>
      <Grid
        container
        spacing={2}
        style={{
          minHeight: "75px",
          maxWidth: "1000px",
          marginBottom: "5px",
          alignItems: "top",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            maxHeight: "50px",
            minWidth: "250px",
          }}
        >
          <Button
            size="large"
            style={{ minWidth: "250px", backgroundColor: "palegreen" }}
            onClick={() => {
              handleStart();
              setCLLTime(3600);
            }}
            variant={"contained"}
            startIcon={
              <Avatar
                variant="square"
                src={"/Bozja/Farming/Fragment_Map/CLL.png"}
              />
            }
          >
            Start/Restart
          </Button>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            maxHeight: "50px",
            minWidth: "250px",
          }}
        >
          <Button
            size="large"
            style={{ minWidth: "250px" }}
            onClick={() => {
              setCLLTime(cllTime - 300);
            }}
            variant={"contained"}
            startIcon={<Avatar variant="square" src={"/Bozja/Duel.png"} />}
          >
            CE/Duel
          </Button>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            maxHeight: "50px",
            minWidth: "250px",
          }}
        >
          <Button
            size="large"
            style={{ minWidth: "250px" }}
            onClick={() => {
              setCLLTime(cllTime - 60);
            }}
            variant={"contained"}
            startIcon={<Avatar variant="square" src={"/Bozja/Skirmish.png"} />}
          >
            Skirmish
          </Button>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            maxHeight: "50px",
            minWidth: "250px",
          }}
        >
          <Button
            size="large"
            style={{ minWidth: "250px", backgroundColor: "#CD5C5C" }}
            onClick={() => {
              handleStop();
            }}
            variant={"contained"}
          >
            Stop
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CLL;
