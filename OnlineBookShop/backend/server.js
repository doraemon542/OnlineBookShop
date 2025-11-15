import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";



import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
  res.send("📚 Welcome to the Online Book Library API");
});

const PORT = process.env.PORT || 8050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
