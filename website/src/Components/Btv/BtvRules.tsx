// import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import { B } from "../B";
// import { Attributes } from "./GeneralRules/Attributes";
// import { HitPoints } from "./GeneralRules/HitPoints";
// import { DicePools } from "./GeneralRules/DicePools";
// import { Resting } from "./GeneralRules/Resting";
import {
  SpecialZoomLevel,
  ViewMode,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
import { Box } from "@mui/material";

export function BtvRulesPage() {
  return (
    <Box height={"100%"}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          viewMode={ViewMode.DualPage}
          defaultScale={SpecialZoomLevel.PageFit}
          fileUrl={"/BeyondTheVeil.pdf"}
        ></Viewer>
      </Worker>
    </Box>
  );
}
