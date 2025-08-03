// import fs from "fs";
// import path from "path";
import chalk from "chalk";
// import { fileURLToPath } from "url";

// // Handle __dirname in ES modules
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const logFilePath = path.join(__dirname, "../../logs/app.txt");

// // Ensure logs directory exists
// const logDir = path.dirname(logFilePath);
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir, { recursive: true });
//   console.log("Created logs directory at:", logDir);
// }

// function writeToFile(level: string, message: string, args: any[]) {
//   const logMessage = `[${new Date().toISOString()}] [${level}] ${message} ${
//     args.length ? JSON.stringify(args) : ""
//   }\n`;

//   try {
//     fs.appendFileSync(logFilePath, logMessage);
//   } catch (err) {
//     console.error("Failed to write log:", err);
//   }
// }

export const logger = {
  info: (message: string, ...args: any[]) => {
    console.log(chalk.blue("[INFO]"), message, ...args);
    // writeToFile("INFO", message, args);
  },

  warn: (message: string, ...args: any[]) => {
    console.warn(chalk.yellow("[WARN]"), message, ...args);
    // writeToFile("WARN", message, args);
  },

  error: (message: string, ...args: any[]) => {
    console.error(chalk.red("[ERROR]"), message, ...args);
    // writeToFile("ERROR", message, args);
  },

  debug: (message: string, ...args: any[]) => {
    if (process.env.DEBUG === "true") {
      console.log(chalk.magenta("[DEBUG]"), message, ...args);
      // writeToFile("DEBUG", message, args);
    }
  },
};
