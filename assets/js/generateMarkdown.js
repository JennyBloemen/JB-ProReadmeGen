// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return (`
${data.title}
## Project Description
${data.description}
## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributors](#contributors)
   * [Test Instructions](#testInstructions)
   * [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contribute}

## Test Instructions
${data.testing}

## Questions
  If you have questions you can reach me at: 
${data.email} \n 
You can also check out my github:
GitHub Link: https://github.com/`+`${data.github} \n
`);
}

module.exports = generateMarkdown;
