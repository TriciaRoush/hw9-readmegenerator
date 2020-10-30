const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const formatREADME = require("./Develop/utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "accountGH",
        message: "What is your GitHub account user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "What is anticipated outcome? Describe the project."
    },
    {
        type: "input",
        name: "license",
        message: "What type of licensing does the application require?",
        choices: ["MIT", "GNU GPL v3", "ISC"]
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to administer a test?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who has contributed to the repo for this specific project?"
    },
    {
        type: "input",
        name: "userInfo",
        message: "What should the user know additionally regarding the application?"
    }
];

function getResponses() {
    return inquirer.prompt(questions)
};
   
// function to initialize program
async function init() {
    console.log("Welcome to the README Generator application.  Please provide responses to the subsequent questions and your answers will be included & formatted in your finalized README.md file.")
    try {
        const responses = await getResponses();
        const makeREADME = formatREADME(responses);
        await writeFileAsync("README.md", makeREADME);
        console.log("You have successfully generated your project README.")
    } catch (error) {
        console.log(error);
    };
};

// function call to initialize program
init();

/*
Questions & Response names
1. What is your GitHub account user name? (accountGH)
2. What is your email address? (email)
3. What is the name of your application? (projectName)
4. What is anticipated outcome? Describe the project. (description)
5. What type of licensing does the application require? (license)
6. What command should be run to install dependancies (install)
7. What command should be run to administer a test? (test)
8. Who has contributed to the repo for this specific project? (contributors)
9. What should the user know additionally regarding the application? (userInfo)
*/

