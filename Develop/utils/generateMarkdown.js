



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  return `# ${data.title}

 
## Table of Contents
1. [Description](#Description)
1. [Usage](#Usage)
1. [Installation](#Installation)
1. [Tests](#Tests)
1. [Contribution](#Contribution)
1. [License](#License)
1. [Questions](#Questions)


## Description
${data.description}

  
## Usage
${response.usage}


## Installation
Please use the following command to use project:
 
${data.installation}


## Test 
Please use the following command to test:
  
  ${data.test}


## Contribution:

  ${data.contribution}

  
## Licenses
  ${data.license}


## Questions
  For questions Contact me here: 
  GitHub: [@${response.username}](https://github.com/${response.username})
  Email: ${response.email}

`;
}


// module.exports = generateMarkdown;
