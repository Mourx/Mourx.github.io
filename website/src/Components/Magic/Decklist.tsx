import { Box, Grid, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface decklistProps {
  decklist: string;
}

export function Decklist(props: decklistProps) {
  const [list, setList] = useState<string[]>([]);
  const [data, setData] = useState<any>();
  const [previewUrl, setPreviewUrl] = useState("");

  async function ProcessDecklist(): Promise<string[]> {
    let decklist: string[] = [];
    let lines = data.split("\n");
    for (let i = 0; i < lines.length; i++) {
      decklist = decklist.concat(lines[i]);
    }
    decklist = decklist.sort();
    console.log(decklist);
    setList(decklist);
    return decklist;
  }

  useEffect(() => {
    if (data) {
      ProcessDecklist();
    }
  }, [data]);

  useEffect(() => {
    fetch("/decklists/" + props.decklist + ".txt", {
      headers: {
        "Content-Type": "text",
        Accept: "text",
      },
    }).then((out) =>
      out.text().then((out) => {
        setData(out);
      })
    );
  });

  useEffect(() => {
    if (list[0]) {
      setImageUrl(list[0]);
    }
  }, [list]);

  function setImageUrl(str: string): any {
    let parts = str.split(" ");
    let newrl = "";
    for (let i = 1; i < parts.length; i++) {
      newrl = newrl.concat(parts[i] + " ");
    }

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
      "https://api.scryfall.com/cards/named?fuzzy=" + newrl,
      true
    );
    http.send();
  }
  function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }

  return (
    <Box>
      <Grid
        container
        display="grid"
        sx={{
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: { md: "3fr 2fr" },
          backgroundColor: "#cdcdcd",
        }}
      >
        <Grid
          item
          display="grid"
          sx={{
            height: "fit-content",
            gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
            outline: "solid",
            margin: "5px",
          }}
        >
          {list.map((text, index) => (
            <ListItem
              sx={{ padding: 0.5 }}
              key={index}
              onMouseEnter={() => {
                setImageUrl(text);
              }}
            >
              <Typography>{titleCase(text)}</Typography>
            </ListItem>
          ))}
        </Grid>
        <Grid justifySelf={"center"} item>
          <img
            src={previewUrl}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              height: "100%",
              width: "100%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}
