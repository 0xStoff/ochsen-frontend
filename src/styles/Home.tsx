import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const LandscapeContainer = styled(Container)(() => `
      display: flex;
      flexDirection: row;
      height: 100vh;
      width:100vw;
      alignItems: center;
      justifyContent: center
  `);

export const PortraitContainer = styled(Container)(() => `
      display: flex;
      flexDirection: column;
      height: 100vh;
      width: 100vw;
      alignItems: center;
      justifyContent: center
  `);
