// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown');

// Array of questions for user input
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
      message: 'Installation instructions:',
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
      choices: ['Apache 2.0', 'Boost 1.0', 'MIT', 'BSD-3', 'BSD-2', 'Mozilla', 'None'],
      name: 'license',
    }, 
    {
      type: 'input',
      message: 'Contribution instructions:',
      name: 'contribute',
    }, 
    {
      type: 'input',
      message: 'Test instructions:',
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

// Function to create the README file
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


