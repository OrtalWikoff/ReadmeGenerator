// The Node.js file system module allows me to work with the file system on my computer.
const fs = require ("fs");

//The require method lets my application know that it needs to use the inquirer package to execute the code.

const inquirer = require("inquirer");

const markdown = require("./markdown");

function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question.";
    }
}
    // Question for the Title

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter a title for your project",
        validate: validateInput,
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install the software.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program.",
        validate: validateInput,
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateInput,
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions for this project.",
        validate: validateInput,
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: validateInput,
        },
];

// function to generate the ReadMe here
function write(fileName, data) {
    fs.writeFile(fileName, markdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Initalize the beginning of the questions 
function initQuestions() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        write("./README.md", data);
    });
}

initQuestions();
