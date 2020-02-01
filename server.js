const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const DIST_DIR = path.join(__dirname, "build");

const users = { total: 0 };

io.on("connection", client => {
  // here you can start emitting events to the client

  // expect client to emit a 'subscribeToTimer' with an interval
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);

    // 'setInterval()' will call a function at an interval set by a client
    setInterval(() => {
      // emit 'timer' event with the current date
      client.emit("timer", new Date());
    }, interval);
  });
});

app.use(express.static(DIST_DIR));

app.get("/", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

http.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
