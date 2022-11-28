const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const app = require("./app");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!");
});

mongoose.connection.once("error", () => {
  console.error("Connection is failed");
});

app.get("/", (req, res) => {
  res.send("Hello From The Server 👋");
});

const PORT = process.env.PORT || 5000;

function startServer() {
  mongoose.connect(process.env.MONGO_URL).catch((error) => {
    console.log(error);
  });
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });

  process.on("uncaughtException", (error) => {
    console.log(error.name, error.message);
    console.log("UNCAUGHT EXCEPTION! 💥💥💥 Shutting down...");
    server.close(() => {
      process.exit(1);
    });
  });
  return server;
}

startServer();
