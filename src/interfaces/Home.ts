import * as React from "react";


export type ContainerElementProp = React.ComponentType<{ children: React.ReactNode }>;

export type HomeAssetsProps = {
    dividerOrientation?: "horizontal" | "vertical";
    ContainerElement: ContainerElementProp;
}


