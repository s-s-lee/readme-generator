const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [    
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'How do users install your project?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of project use.'
    }, 
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other devs contribute to this project?'
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'If there is testing for this project, give examples of how other devs can run them.'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What license does this repo use?',
        choices: ['Apache 2.0', 'Creative Commons', 'ISC', 'MIT', 'Open Data Commons', 'Other']
    }
]

function init() {
    return inquirer.prompt(questions);
};

init().then((generateMarkdown) => {
    fs.writeFileSync('exampleREADME.md', generateMarkdown, (err) =>
        err ? console.log(err) : console.log('README.md created!')
    );
});
