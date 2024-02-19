import inquirer from "inquirer";
import chalk from "chalk";

async function getUserInput() {
  let userInput = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: chalk.greenBright(
        "Enter the paragraph, you want to count the words of: "
      ),
    },
  ]);

  return userInput.input;
}

function splitUserInput(input: string) {
  let splitedValue = input.split(" ");
  return splitedValue;
}

async function main() {
  let wordsToCount: string = await getUserInput();
  let words = splitUserInput(wordsToCount);

  console.log(
    chalk.blueBright(`The total words in this paragraph are: ${words.length}`)
  );
}

main();
