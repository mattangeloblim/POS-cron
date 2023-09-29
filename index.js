const express = require("express");
const app = express();
// const cors = require("cors");
const timeslotRouter = require("./router/timeslotRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

app.use("/api", timeslotRouter)

const port = 8081;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
