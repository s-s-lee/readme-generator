const inquirer = require(`inquirer`);
const fs = require(`fs`);

const generateHTML = ({ title, username, email }) =>
`# ${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project?
- What problem does it solve?
- What did you learn?

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create a folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    // md
    // ![alt text](assets/images/screenshot.png)

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Contributing

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

## Tests

Go the extra mile and write tests for your application.

## Questions

This app was created by ${username}.

If you have any questions about the repo, please contact ${username} at ${email}.`;

function init() {
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?'
    }, 
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
        type: 'list',
        name: 'license',
        message: 'What license will this be under?',
        choices: ['Creative Commons', 'ISC', 'MIT', 'Open Data Commons']
    }
]).then((answers) => {
    const htmlPageContent = generateHTML(answers);
    // is this writeFile or writeToFile?
    fs.writeToFile('exampleREADME.md', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
});
}

init();