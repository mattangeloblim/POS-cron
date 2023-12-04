const express = require("express");
const app = express();
// const cors = require("cors");
const timeslotRouter = require("./router/timeslotRouter");
const generateResultRouter = require("./router/generateResultRouter")
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

app.use("/api", timeslotRouter)
app.use("/api", generateResultRouter)

const port = 8081;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
