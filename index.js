const fs = require("fs").promises;
const inquirer = require("inquirer");
const formatREADME = require("./Develop/utils/generateMarkdown");
const writeFile

// array of questions for user
const questions = [
    {
        type: "input",
        name: "account",
        message: "What is your GitHub account user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "name",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "What is desired outcome? Will you describe the project?"
    },
    {
        type: "input",
        name: "license",
        message: "What type of licensing does the project require?"
    },
    {
        type: "input",
        name: "dependancies",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to administer a test?"
    },
    {
        type: "input",
        name: "userInfo",
        message: "What should the user know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    }
];

// function to write README file
function writeToFile("README.md", data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();