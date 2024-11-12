const express = require("express");
const app = express();
const port = 3300;

const database = require("./config/database");
database.connect();

const Song = require("./model/song.model");
app.get("/", async (req, res) => {
  const listSong = await Song.find({});

  console.log(listSong);

  res.json({
    code: 200,
    songs: listSong,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
