import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { blue, grey } from "@mui/material/colors";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";


export const TabStyle = styled(TabUnstyled)`
      font-family: Helvetica Neue;
      color: #fff;
      cursor: pointer;
      font-weight: 600;
      background-color: transparent;
      width: 100%;
      padding: 10px 12px;
      margin: 6px 6px;
      border: none;
      border-radius: 7px;
      display: flex;
      justify-content: center;
    
      &:hover {
        background-color: ${blue[400]};
      }
    
      &:focus {
        color: #fff;
        outline: 3px solid ${blue[200]};
      }
    
      &.${tabUnstyledClasses.selected} {
        background-color: #fff;
        color: ${blue[600]};
      }
    
      &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }`;

export const TabPanelStyle = styled(TabPanelUnstyled)(({ theme }) => `
      border: 1px solid ${theme.palette.mode === 'dark' ? ' rgba(255, 255, 255, 0.6)' : ' rgba(0, 0, 0, 0.6)'};
      border-radius: 12px;
      padding: 15px;
      color:  ${theme.palette.mode === 'dark' ? ' rgba(255, 255, 255, 0.6)' : ' rgba(0, 0, 0, 0.6)'};
  `,);

const TabsListStyle = styled(TabsListUnstyled)(({ theme }) => `
      background-color: ${blue[500]};
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: space-between;
      box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
      `,);

export const StickyTabsListStyle = styled(TabsListStyle)`
  position: fixed;
  top: 0;
`;


