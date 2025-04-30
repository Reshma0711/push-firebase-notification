const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.port;
const bodyParser=require("body-parser")
const {dbConnect} = require("./config/db");
dbConnect();
const firebaseRoute=require("./routes/firebase")


app.use(bodyParser.json());

app.use("/api",firebaseRoute)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
