import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface decklistProps {
  deckname: string;
  previewCard: string;
  description: string;
}

export function MagicDeckPreviewCard(
  props: decklistProps = {
    deckname: "oof",
    previewCard: "Gone Missing",
    description: "Damn I forgot to describe this one",
  }
) {
  const [previewUrl, setPreviewUrl] = useState("");
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var txt = this.responseText;
      var obj = JSON.parse(txt);
      if (obj.hasOwnProperty("image_uris")) {
        setPreviewUrl(obj.image_uris.normal);
      } else {
        setPreviewUrl(obj.card_faces[0].image_uris.normal);
      }
    }
  };

  http.open(
    "GET",
    "https://api.scryfall.com/cards/named?fuzzy=" + props.previewCard,
    true
  );
  http.send();

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {props.deckname}
        </Typography>
        <CardMedia component="img" image={previewUrl} alt={props.deckname} />
        <Typography sx={{ textAlign: "center", fontSize: 18 }} component="div">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>View Decklist</CardActions>
    </Card>
  );
}
