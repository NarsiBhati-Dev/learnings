import { WebSocketServer } from "ws";
import { PORT } from "./config";
import chalk from "chalk";
import { logger } from "./utils/logger";

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (socket) => {
  logger.info("User connected");

  socket.send("Hello, welcome to the WebSocket server!");

  socket.on("message", (message) => {
    logger.info(`Received: ${message}`);
    socket.send(`Echo: ${message}`);
  });

  socket.on("close", () => {
    logger.info("User disconnected");
  });
});

// Ensure logging when the WebSocket server starts
wss.on("listening", () => {
  logger.info(`WebSocket server is running on ws://localhost:${PORT}`);
  console.log(
    chalk.green(`WebSocket server running on ws://localhost:${PORT}`)
  );
});
