import React, { useState } from "react";
import {
  SpecialZoomLevel,
  ViewMode,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
import { Box } from "@mui/material";
import { Page, Document, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

export function BtvRulesPage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = (numPages: any) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div className="App">
      <a href={"/BeyondTheVeil.pdf"} target="_blank">
        Rules Pdf
      </a>
    </div>
  );
}
