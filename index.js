const fs = require('fs');
const inquirer = require('inquirer');


inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please provide a short bio:'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn URL?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL?'
    }
]).then(answers => {
    // Handle the user's responses here
    console.log(answers);
    function generateHTML(userInput) {
        const { name, location, bio, linkedin, github } = userInput;

        // Construct the HTML content using template literals
        const htmlContent = `
            <html>
            <head>
                <title>Portfolio</title>
            </head>
            <body>
                <h1>${name}'s Portfolio</h1>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Bio:</strong> ${bio}</p>
                <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href="${github}">${github}</a></p>
            </body>
            </html>
        `;

        return htmlContent;
    };
    fs.writeFile('readme.md', generateREADME(content), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file generated successfully!');
    });
