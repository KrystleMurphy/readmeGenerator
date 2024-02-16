const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Describe your project:' },
    { type: 'input', name: 'contents', message: 'List the contents of your project:' },
    { type: 'input', name: 'installation', message: 'Installation guidance:' },
    { type: 'input', name: 'usage', message: 'Usage:' },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select License:',
        choices: [
            'MIT License', 'Apache License 2.0', 'GNU General Public License v3.0 (GPL-3.0)',
            'GNU General Public License v2.0 (GPL-2.0)', 'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0',
            'Creative Commons Zero v1.0 Universal', 'The Unlicense', 'Eclipse Public License 2.0'
        ]
    },
    { type: 'input', name: 'contributing', message: 'Contributing:' },
    { type: 'input', name: 'tests', message: 'Tests:' },
    { type: 'input', name: 'questions', message: 'Questions:' }
]).then(answers => {
    console.log(answers);
    generateREADME(answers);
});

function generateREADME(userInput) {
    const { title, description, contents, installation, usage, license, contributing, tests, questions } = userInput;

    const readmeContent = `
# ${title}
${description}

## Contents
${contents}

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
${questions}
`;

    fs.writeFile('readme.md', readmeContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file generated successfully!');
    });
}