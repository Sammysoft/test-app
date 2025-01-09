import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dbInit from "./utils/dbInit.js";
import helmet from "helmet";
import winston from "winston";
import morgan from "morgan";
import AccountRouter from "./routes/account.routes.js";
import ProductRoute from "./routes/products.routes.js";
import UserRouter from "./routes/user.routes.js";
import CategoryRouter from "./routes/categories.routes.js";
import { PaymentRouter } from "./routes/payments.routes.js";
import { OrderRouter } from "./routes/orders.routes.js";
import AdminRouter from "./routes/admin.routes.js";
import SubscriptionRouter from "./routes/subscriptions.routes.js";
import { BlogRoute } from "./routes/blog.routes.js";

const app = express();
const port = process.env.PORT || 8081;
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};


app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: "application/json" }));
app.use(cors(corsOptions));

app.use(helmet());

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

app.use(
  morgan("combined", {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  })
);

app.listen(port, async () => {
  dbInit();
  console.log(`Server running on https://localhost:${port}`);
});


app.use("/api/v1/", AccountRouter);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/category", CategoryRouter);
app.use("/api/v1/payment", PaymentRouter);
app.use("/api/v1/order", OrderRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/subscription", SubscriptionRouter);
app.use('/api/v1/blog', BlogRoute);
