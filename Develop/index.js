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
            name: 'tableofcontents',
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



// function to write README file

const writeToFile = (answers) =>

`# ${answers} 

## Description
${answers.description}

## Table of Contents
${answers.tableofcontents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Badges
${answers.badges}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

`
// function writeToFile(fileName, data) {
// }

// function to initialize program
init() 
.then((answers) => writeFileAsync('FUNREADME.md', writeToFile(answers) ) )
.then(() => console.log('Succesfully wrote to README.md'))
.catch((err) => console.error(err));

// function call to initialize program
// init();
