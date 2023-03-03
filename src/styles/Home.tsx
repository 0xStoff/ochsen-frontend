import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const LandscapeContainer = styled(Container)(() => `
      display: "flex";
      height: "100vh";
  `,);

export const PortraitContainer = styled(Container)(() => `
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"
  `,);
