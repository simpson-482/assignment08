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
            message: "What is your id?",
            name: "getId"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "getEmail"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "getGithub"
        },
        {
            type: "input",
            message: "What is your school?",
            name: "getSchool"
        },
        ]);


        console.log(`Here is the users response...`);
        console.log(userResponse);
        console.log(`end of userResponse...`);

        const myUserName = userResponse.getName;
        const myId = userResponse.getId;
        const myEmail = userResponse.getEmail;
        const myOfficeNumber = userResponse.officeNumber;
        const myGitHub = userResponse.getGithub;
        const mySchool = userResponse.getSchool;

        var myResult = (`
## Name 
${myUserName}
## Employee Id
${myId}
## Email address 
${myEmail}
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