import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { blue, grey } from "@mui/material/colors";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";


export const Tab = styled(TabUnstyled)`
      color: #fff;
      cursor: pointer;
      font-size: 0.875rem;
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

export const TabPanel = styled(TabPanelUnstyled)(({ theme }) => `
      width: 100%;
      font-size: 0.875rem;
      padding: 30px 12px;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      border-radius: 12px;
      opacity: 0.6;
  `,);

const TabsList = styled(TabsListUnstyled)(({ theme }) => `
      min-width: 400px;
      background-color: ${blue[500]};
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: space-between;
      box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
      `,);


export const StickyTabsList = styled(TabsList)(
    ({ theme }) => `
    position: sticky;
    top: 0;
    z-index: 1; /* make sure the sticky element is on top of other elements */
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `);
