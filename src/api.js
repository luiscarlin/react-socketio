import io from "socket.io-client";

const socket = io();

const subscribeToTimer = (interval, callback) => {
  socket.on("timer", timestamp => callback(null, timestamp));
  socket.emit("subscribeToTimer", interval);
};

export { subscribeToTimer };
