const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const init = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write Description'
            
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Write out your table of contents'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples or use'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who helped you make this project?'
            
        },
        {
            type: 'input',
            name: 'license',
            message: 'What licenses are you using?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests did you do on your application?'
        }

]);

const generateReadme = (answers) =>

`# ${answers.title} 

## Description
${answers.description}
`

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
// function init() {

// }

// function call to initialize program
init();
