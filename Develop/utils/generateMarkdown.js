// function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.projectName} 

![License](https://img.shields.io/badge/License-${responses.license}-blue.svg "License Badge")

## Table of Content: 
#### (Link to Github Repo) [https://github.com/${responses.accountGH}/${responses.projectName}]
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Tests](#tests)
- [Contributors](#contributors)
- [User Information](#userInfo)
- [Link to GitHub Repo](#link)
- [Feedback](#feedback)

## Description
${responses.description}
## License
${responses.license}
## Installation 
${responses.dependancies}
## Tests
${responses.test}
## Contributors
${responses.contributors}
## User Information
${responses.userInfo}
## Link to Github Repo
https://github.com/${responses.accountGH}/${responses.projectName}
## Feedback
If you have any questions, comments, or contributions regarding the deployed application, please contact me @:
For any questions you can find me on Github or through my E-mail:
      
> E-mail: ${responses.email}     
      `;
}

module.exports = generateMarkdown;

/*
Questions & Response names
1. What is your GitHub account user name? (accountGH) X
2. What is your email address? (email) X
3. What is the name of your application? (projectName) X
4. What is anticipated outcome? Describe the project. (description) X
5. What type of licensing does the application require? (license) X
6. What command should be run to install dependancies (install) X
7. What command should be run to administer a test? (test) X
8. Who has contributed to the repo for this specific project? (contributors) X
9. What should the user know additionally regarding the application? (userInfo)
*/
