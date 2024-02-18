const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Describe your project:' },
    { type: 'input', name: 'installation', message: 'Installation guidance:' },
    { type: 'input', name: 'usage', message: 'Usage:' },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select License:',
        choices: [
            'MIT', 'Apache 2.0', 'GNU 3.0'
        ]
    },
    { type: 'input', name: 'contributing', message: 'Contributing:' },
    { type: 'input', name: 'tests', message: 'Tests:' },
    { type: 'input', name: 'questions', message: 'enter your email address' },
    { type: 'input', name: 'questions2', message: 'enter your github profile URL' }
]).then(answers => {
    console.log(answers);
    generateREADME(answers);
});

function generateREADME(userInput) {
    const { title, description, contents, installation, usage, license, contributing, tests, questions, questions2 } = userInput;

    function renderLicenseBadge(license) {
        if (license !== "None") {
            return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
        }
        return ''
    }

    const readmeContent = `
# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, please contact me: 
${questions}
${questions2}
`;

    fs.writeFileSync('README.md', readmeContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file generated successfully!');
    });
}