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
 
  ])

  .then((responses)=> {
    const htmlPageContent = `<!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>README Generator</title>
    
        <link rel="stylesheet" href="assets/css/style.css"/>
      </head>
    
      <body>
        <header>
          <h1>Project Title</h1>
        </header>
        
        <main>
          <h3>Description</h3>
            <p></p>
          <h3>Table of Contents</h3>
            <ul>
              <li><a href="#Installation">Installation</a></li>
              <li><a href="#usage">Usage</a></li>
              <li><a href="#license">License</a></li>
              <li><a href="#contributing">Contributing</a></li>
              <li><a href="#test">Test</a></li>
              <li><a href=".questions">Questions</a></li>
            </ul>
          <h3 id="installation">Installation</h3>
          <img src="./assets/images/MuSearchDemo.gif" width="640" height="360"/>
          <ul>
            <li>Deployed: </li>
            <li>GitHub Repo: </li>
          </ul>  
          <h3 id="usage">Usage</h3>
            <p></p>
          <h3 id=" license">License</h3>
            <p></p>
          <h3 id="contributing">Contributing</h3>
            <p></p>
          <h3 id="testing">Tests</h3>
            <p></p>
        </main>
      <script src="./assets/js/search.js"></script>
      </body>
    
      <footer>
        <h3 class="questions">Questions?</h3>
        <img src = "assets/images/Jenny.JPG" alt = "Bio Picture" class="bio-pic">
        <p>Please contact me with questions.</p>
        <p>Git Hub: </p>
        <p>Email: </p>
      </footer>
    </html>`

fs.writeFile('README.md', htmlPageContent, (err) => 
    err ? console.log(err) : console.log('Success!')
  );
});
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

