require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
const placeRouter = require("./routes/place.routes.js");
const adminRouter = require("./routes/admin.routes.js");
const countryRouter = require("./routes/country.routes.js");
const commentRouter = require("./routes/comment.routes.js");

const app = express();

const publicPath = path.join(__dirname, "../client/build"); ///????
app.use(cors());
app.use(express.json({ limit: "300mb" }));
app.use(express.static(publicPath)); ///???

/*app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
*/

try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("project places");
} catch {
  throw new Error("Couldn't connect to Mongo'");
}

app.use("/api/places", placeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/country", countryRouter);
app.use("/api/comment", commentRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is on port`);
});
