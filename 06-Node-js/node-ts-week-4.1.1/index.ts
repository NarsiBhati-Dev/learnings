import fs from "fs";
import chalk from "chalk";
import { Command } from "commander";
const program = new Command();

program
  .name("count")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(chalk.red.bold(err));
      } else {
        const lines = data.split("\n").length;
        console.log(
          chalk.green.underline(`There are ${lines} lines in ${file} file`)
        );
      }
    });
  });

program.parse(process.argv);
