const express = require("express");
const app = express();
const bookRouter = require("./routes/book.routes");

app.use(cors());
app.use(express.json());

app.use("/api/v1/books", bookRouter);


module.exports = app;
