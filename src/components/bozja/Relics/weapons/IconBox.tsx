"use client";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import { weaponState } from "../RelicTracker";

const basicSX = {
  height: "auto",
  maxWidth: "50px",
  width: "auto",
  verticalAlign: "middle",
};

type IconBoxProps = {
  step: number;
  job: number;
  relicImage: string;
  altText: string;
};

function IconBox(iconBoxProps: IconBoxProps) {
  const [isGreyscale, setIsGreyscale] = useAtom(weaponState);

  return (
    <Box
      component="img"
      sx={{
        ...basicSX,
        filter: !isGreyscale[iconBoxProps.step][iconBoxProps.job]
          ? "saturate(0%)"
          : "saturate(100%)",
        width: "50px",
        height: "50px"
      }}
      onClick={() => {
        const updatedArray = [...isGreyscale];
        const updatedVal = !isGreyscale[iconBoxProps.step][iconBoxProps.job];
        if(updatedVal){
          for (let i = iconBoxProps.step; i >= 0; i--) {
            updatedArray[i][iconBoxProps.job] = updatedVal
          }
        } else {
          for (let i = iconBoxProps.step; i < 6; i++){
            updatedArray[i][iconBoxProps.job] = updatedVal
          }
        }
        setIsGreyscale(updatedArray);
      }}
      alt={iconBoxProps.altText}
      src={iconBoxProps.relicImage}
    />
  );
}

export default IconBox;
