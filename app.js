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
            message: "What is your Role",
            name: "getRole"
        },
        {
            type: "input",
            message: "What is your Id?",
            name: "getId"
        },
        {
            type: "input",
            message: "What is your School?",
            name: "getSchool"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "getGithub"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "getOfficeNumber"
        },
        ]);


        console.log(`Here is the users response...`);
        console.log(userResponse);
        console.log(`end of userResponse...`);

        const myUserName = userResponse.getName;
        const myId = userResponse.getId;
        const myRole = userResponse.getRole;
        const myOfficeNumber = userResponse.officeNumber;
        const myGitHub = userResponse.getGithub;
        const mySchool = userResponse.getSchool;

        var myResult = (`
## Name 
${myUserName}
## Employee Id
${myId}
## Employee Role
${myRole}
## Office Number
${myOfficeNumber}
## GitHub Username 
${myGitHub}
## School 
${mySchool}
`)

var writeResult = fs.writeFileSync(path.join(__dirname, 'README.md'), myResult)
console.log("README.md file generated....")

}
  

start();