const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/connectDB");
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");
const accountsRoute =require('./routes/accountsRoute')
dotenv.config();

const app = express();

// connection
connectDb();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v6/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>My accounts Database</h1>");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
