// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project Description:',
      name: 'description',
    },
    {
      type: 'checkbox',
      message: 'Table of Contents:',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'Installation',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'linkedin',
    }, 
    {
        type: 'list',
        message: 'License',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
      }, 
      {
        type: 'input',
        message: 'Please provide guidelines on how other developers can contribute to your project:',
        name: 'contribute
        ',
      }, 
      {
        type: 'input',
        message: 'Tests',
        name: 'linkedin',
      }, 
      {
        type: 'input',
        message: 'Questions',
        name: 'linkedin',
      }, 
  ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


