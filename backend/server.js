const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const equipmentRoutes = require("./routes/equipmentRoute");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 6000;

app.use("/api/equipment", equipmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
