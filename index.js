const express = require("express");

const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// format of request body
app.use(bodyParser.json());

app.use("/", require("./routes"));

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
