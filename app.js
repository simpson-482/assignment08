const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function start() {
    console.log(`I am starting...`);

    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "getName"
        },
        {
            type: "input",
            message: "What is your Id?",
            name: "getId"
        },
        {
            type: "input",
            message: "What is your Email?",
            name: "getEmail"
        },
        {
            type: "list",
            name: "getRole",
            message: "What is your Role? (Manager, Engineer, Intern)",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your School?",
            name: "getSchool",
            when: (answers) => answers.getRole === 'Intern'
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "getGithub",
            when: (answers) => answers.getRole === 'Engineer'
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "getOfficeNumber",
            when: (answers) => answers.getRole === 'Manager'
        },
        {
            type: "list",
            message: "Would you like to add another employee? (Y or N)",
            name: "getAnotherEmployee",
            choices: ["Yes", "No"],
        },
        ]).then(answers => {
            if (answers.getAnotherEmployee === "Yes") {
                console.log('Lets get another one');
            } else {
                console.log('End of User Response');
            }
        });


        // console.log(`Here is the users response...`);
        // console.log(userResponse);
        // console.log(`end of userResponse...`);

        // const myUserName = userResponse.getName;
        // const myId = userResponse.getId;
        // const myEmail = userResponse.getEmail;
        // const myRole = userResponse.getRole;
        // const myOfficeNumber = userResponse.officeNumber;
        // const myGitHub = userResponse.getGithub;
        // const mySchool = userResponse.getSchool;

        // console.log(`Here is the answers...`);
        // console.log(answers);
        // console.log(`end of userResponse...`);


// var writeResult = fs.writeFileSync(path.join(__dirname, 'README.md'), myResult)
// console.log("README.md file generated....")

}
  

start();