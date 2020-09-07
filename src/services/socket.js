import socketio from "socket.io-client";

const socket = socketio("http://10.0.0.103:3333", {
  autoConnect: false,
});

function subscribe(key, fn) {
  return socket.on(key, fn);
}

function unsubscribe(key, fn) {
  socket.off(key, fn);
}

function publish(key, data) {
  socket.emit(key, data);
  console.log("enviado");
}

function connect(opts) {
  socket.io.opts.query = opts;
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export default {
  io: socket,
  subscribe,
  unsubscribe,
  publish,
  connect,
  disconnect,
};
