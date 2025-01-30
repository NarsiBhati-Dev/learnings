import { $ } from "bun";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .name("create")
  .description("Create a starter project with Bun")
  .version("0.1.0");

program
  .command("create")
  .description("Create a Node.js application with TypeScript using Bun")
  .option("-e, --express", "Include Express in the project")
  .arguments("<newdir>")
  .action(async (newdir: string, options: { express?: boolean }) => {
    console.log(chalk.green(`🚀 Creating project: ${newdir}...`));

    await $`mkdir ${newdir}`;
    await $`bun init -y`.cwd(newdir);
    console.log(chalk.blue(`✅ Initialized Bun project in ${newdir}`));

    if (options.express) {
      console.log(chalk.yellow("📦 Installing Express..."));
      await $`bun add express @types/express`.cwd(newdir);
      console.log(chalk.green("✅ Express installed successfully!"));
    }

    console.log(
      chalk.cyan(
        `🎉 Project setup complete! Navigate to ${newdir} and start coding!`
      )
    );
  });

program.parse(process.argv);
