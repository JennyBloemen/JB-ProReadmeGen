// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

const questions = [
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
      type: 'input',
      message: 'Installation',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'usage',
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
        name: 'contribute',
      }, 
      {
        type: 'input',
        message: 'Tests',
        name: 'testing',
      }, 
      {
        type: 'input',
        message: 'Please enter your email:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'github',
      },
  ];

// function to create the README file
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, (err) => {
  if (err) throw err;
  });
}
// // Function and call to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers));
  });
}

init();


