const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const formatREADME = require("./Develop/utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

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
        message: "What type of licensing does the project require?",
        choices: ["MIT", "GNU GPL v3", "ISC"]
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
Project name
License
Table of Contents:
-description
-installations
-usage
-contributing
-tests
-questions/comments

Link to repo
Link to deployed app

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
## Table of Content: 
#### (Link to Github Repo) [https://github.com/${data.github}/${data.name}]
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Credits](#credits)
## Link to Github Repo
https://github.com/${data.github}/${data.name}
## Link to the Deployed Application
 ${data.deployed}
## Description
 ${data.description}
 
## Installation 
 ${data.instalation}
## Usage
 ${data.usage}
## Contributing
 ${data.contributing}
## Tests
 ${data.tests}
## License
       ${data.license}
  
## Questions
For any questions you can find me on Github or through my E-mail:
      
> GitHub: https://github.com/${data.github}
> E-mail: ${data.email}
      
### Credits
© ${data.year} ${data.yName}.      
      `;
}

module.exports = generateMarkdown;
*/

