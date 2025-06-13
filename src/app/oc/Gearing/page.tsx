import BiS from "@/components/oc/Gearing/BiS";
import { Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            padding: "16px",
            paddingBottom: "0px",
            borderRadius: "8px",
            marginLeft: "0px",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            OC Gear Best in Slot
          </Typography>
          <Typography component="p">
            <Link href={"https://discord.gg/foexiv"}>
              Most of these builds were made over on the Field Op Enjoyers
              Discord, you can join by clicking this.
            </Link>
          </Typography>
        </div>
      </div>
      <BiS />
    </>
  );
}
