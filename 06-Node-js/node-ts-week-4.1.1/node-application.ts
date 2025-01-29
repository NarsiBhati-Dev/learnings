import { $ } from "bun";
import { Command } from "commander";
const program = new Command();

program
  .name("create")
  .description("create starter for development")
  .version("0.1.0");

program
  .command("create")
  .description("create node application with typescript using bun lib")
  .option("-n")
  .arguments("<newdir>")
  .action(async (newdir) => {
    await $`cd .. 
    mkdir ${newdir}
    cd ${newdir}
    bun init -y`;
  });

program.parse(process.argv);
