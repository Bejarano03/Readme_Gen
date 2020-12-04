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
            
        }

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
// function init() {

// }

// function call to initialize program
init();
