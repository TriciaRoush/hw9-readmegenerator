/*

// function to generate markdown for README
function generateMarkdown(responses) {
    return `# ${responses.name}

    ![License](https://img.shields.io/badge/License-${responses.license}-blue.svg "License Badge")
    
    ## Table of Contents
    - [About](#about)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Testing](#testing)
    - [Questions](#questions)
    ## About
    ${responses.description}
    ## Installation
    ${responses.dependancies}
    ## Testing
    ${responses.tests}
    ## Questions
    Have a question? You can reach me at:
    - [github.com/${responses.email}](https://github.com/${responses.email}) 
    - ${responses.email}
  
  `;
  }
  
  module.exports = generateMarkdown;
  */

  // function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.name} 
![License](https://img.shields.io/badge/License-${responses.license}-blue.svg "License Badge")
## Table of Content: 
#### (Link to Github Repo) [https://github.com/${responses.github}/${responses.name}]
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Link to Github Repo
https://github.com/${responses.account}/${responses.name}
## Link to the Deployed Application
 
## Description
 ${responses.description}
 
## Installation 
 ${responses.dependancies}
## Usage
 ${responses.contribute}
## Contributing
 ${responses.userInfo}
## Tests
 ${responses.tests}
## License
       ${responses.license}
  
## Questions
For any questions you can find me on Github or through my E-mail:
      
> GitHub: https://github.com/${responses.account}
> E-mail: ${responses.email}     
      `;
}

module.exports = generateMarkdown;

