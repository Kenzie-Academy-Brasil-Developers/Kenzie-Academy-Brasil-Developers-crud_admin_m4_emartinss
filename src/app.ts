import "express-async-errors";
import express, { Application, json } from "express";
import { usersRoutes } from "./routes/users.routes";
import "dotenv/config";
import { errorHandlerMiddleware } from "./middlewares/handleErrors.middlewares";
import { loginRoutes } from "./routes/login.routes";
import { coursesRoutes } from "./routes/courses.routes";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/courses", coursesRoutes);
app.use(errorHandlerMiddleware);

export default app;
