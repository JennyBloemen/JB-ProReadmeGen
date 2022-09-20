// function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
 
  if (license === "Apache 2.0") {
    return '[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === "Boost 1.0") {
    return '[![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } 
  if (license === "MIT") {
    return '[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === "BSD-3") {
   return '[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
   if (license === "BSD-2") {
    return '[![license](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  if (license === "Mozilla") {
    return '[![license: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === "None") {
    return 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
  }
}

// Function to generate a markdown for README
function generateMarkdown(data) {
  return (`
# ${data.title}
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
This project is licensed under:\n
${renderLicenseBadge(data.license)}

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
