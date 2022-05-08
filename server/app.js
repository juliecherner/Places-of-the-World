require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToMongo = require("./database/db.connection");
const placeRouter = require("./routes/place.routes.js");
const adminRouter = require("./routes/admin.routes.js");
const countryRouter = require("./routes/country.routes.js");
const commentRouter = require("./routes/comment.routes.js");
const userRouter = require("./routes/user.routes.js");

const app = express();

const publicPath = path.join(__dirname, "../client/build");
app.use(cors());
app.use(express.json({}));
app.use(express.static(publicPath));

connectToMongo();

app.use("/api/places", placeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/country", countryRouter);
app.use("/api/comment", commentRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is on port`);
});
