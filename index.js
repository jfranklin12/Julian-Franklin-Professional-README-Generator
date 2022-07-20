// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for the user of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What guidelines should the user follow for contributing to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'Boost'],
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Success!");
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Generating README...');
        writeToFile('./new-readme/README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
