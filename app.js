const express = require("express");
const app = express();

const bookRouter = require("./routes/book.routes");
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");

app.use(cors());
app.use(express.json());

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
