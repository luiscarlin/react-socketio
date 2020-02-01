import io from "socket.io-client";

const socket = io();

const subscribeToTimer = (interval, callback) => {
  // on 'timer' events from the server, call the callback with the timestamp
  socket.on("timer", timestamp => callback(null, timestamp));

  // subscribe to subscribeToTimer
  socket.emit("subscribeToTimer", interval);
};

export { subscribeToTimer };
