const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bookRouter = require("./routes/book");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGOODB_URL, () => {
  console.log("CONNECTED TO MONGO DB");
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));

//ROUTES
app.use("/book", bookRouter);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
