const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

let newTeam = [];

async function start() {

    console.log(`I am starting...`);

    const userResponse = await inquirer.prompt([
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

            console.log('answers: ' + answers.getName);
            console.log('answers: ' + answers.getId);
            console.log('answers: ' + answers.getEmail);
            console.log('answers: ' + answers.getRole);

            if (answers.getRole === 'Manager') {
                let newManager = new Manager(answers.getName, answers.getId, answers.getEmail, answers.getOfficeNumber);
                newTeam.push(newManager);
                console.log(answers.getOfficeNumber);
                console.log('Manager added...');
            }
            else if (answers.getRole === 'Intern') {
                let newIntern = new Intern(answers.getName, answers.getId, answers.getEmail, answers.getSchool);
                newTeam.push(newIntern);
                console.log(answers.getSchool);
                console.log('Intern added...');
            }
            if (answers.getRole === 'Engineer') {
                let newEngineer = new Engineer(answers.getName, answers.getId, answers.getEmail, answers.getGithub);
                newTeam.push(newEngineer);
                console.log(answers.getGithub);
                console.log('Engineer added...');
            }

            if (answers.getAnotherEmployee === "Yes") {
                console.log('Lets get another one');
                console.log('newTeam: ' + JSON.stringify(newTeam));
                start();
            } else {
                console.log('End of User Responses');
                console.log('newTeam: ' + JSON.stringify(newTeam));

                let newFile = fs.readFileSync("./templates/main.html")
                fs.writeFileSync("./output/myTeam.html", newFile, {
                    flag: "w"
                }, function (err) {
                    if (err) throw err;
                })

                // iterate thru the newTeam array appending to the HTML output file

                newTeam.forEach((elem, index, array) => {
                    let cardString = fs.readFileSync(`./templates/card.html`, 'utf8');
                    cardString = cardString.replace("myRole", `Role: ${elem.getRole()}`);
                    cardString = cardString.replace("myName", `Name: ${elem.getName()}`);
                    cardString = cardString.replace("myId", `Id: ${elem.getId()}`);
                    //cardString = cardString.replace("myEmail", `Email: ${elem.getEmail()}`);
                    cardString = cardString.replace("myEmail", `Email: <a href="mailto:${elem.getEmail()}">${elem.getEmail()}</a>`);

                    if (elem.getRole() === 'Manager') {
                        cardString = cardString.replace("myExtraProperty", `Office number: ${elem.getOfficeNumber()}`);
                    }
                    else if (elem.getRole() === 'Engineer') {
                        cardString = cardString.replace("myExtraProperty", `GitHub Id: ${elem.getGithub()}`);
                    }
                    if (elem.getRole() === 'Intern') {
                        cardString = cardString.replace("myExtraProperty", `School: ${elem.getSchool()}`);
                    }

                    fs.appendFileSync("./output/myTeam.html", cardString, err => { if (err) throw err; })
                })

                fs.appendFileSync("./output/myTeam.html", "</div></main></body></html>", function (err) {
                    if (err) throw err;
                });


            }
        });
}

start();