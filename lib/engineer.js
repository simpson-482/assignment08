const Employee = require('./employee.js')

class Engineer extends Employee{
    constructor(name, id, email, Github){
        super(name, id, email, Github);
    }
    getGithub() {
            return this.Github;
        }
    getRole() {
        return 'Engineer';
    }
    
}

module.exports = Engineer;