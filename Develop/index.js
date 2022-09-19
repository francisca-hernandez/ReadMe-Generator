// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// Array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Anything a user should know about using your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What command should be entered to install any dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be entered to run tests?",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "How can a user contribute to your project?",
        name: "contribution"
    },
    {
        type: "list",
        message: "What kind of license will your project have?",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]).then(answers => {
    console.log(answers);
    // generateMarkdown(answers);
    // TODO: Create a function to write README file
    fs.writeFileSync("readme.md", generateMarkdown(answers))
}
);


//function to initialize program
function init() {
    inquirer.prompt(answers)
        .then(function (response) {

            writeToFile(response);
        })
}
