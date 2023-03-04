import * as React from "react";
import { Typography } from "@mui/material";
import type { TypographyInterface } from "../interfaces/Event";

export const createTypographyElement = ({ variant, text, styles }: TypographyInterface) => (
    <Typography sx={{ ...styles }} variant={variant}>
    {text}
    </Typography>
);
