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