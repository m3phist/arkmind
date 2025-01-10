import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ROUTE IMPORTS
import dashboardRoutes from "./routes/dashboard.routes";
import itemRoutes from "./routes/item.routes";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/items", itemRoutes);

// SERVER
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on port ${port}`)
);
