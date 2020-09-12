
const Employee = require("./Employee");
const inquirer = require("inquirer");

const roleIntern = "Intern",

class Intern extends Employee {
  constructor() {
    super(roleIntern)
    this.basePrompts.push({
      type: "input",
      message: "What is your intern's current school?",
      name:"school"
    })
  };
  
  getSchool() {
    return this.school;
  }
}



module.exports = Intern;