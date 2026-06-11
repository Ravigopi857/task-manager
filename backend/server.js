const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors")

dotenv.config();

connectDB();

const app = express();
app.use(cors())

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Task Manager Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});