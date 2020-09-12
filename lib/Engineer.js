// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

const roleEngineer = "Engineer",

class Engineer extends Employee {
  constructor() {
    super(roleEngineer)
    this.basePrompts.push({
      type: "input",
      message: "What is your engineer's Github username?",
      name:"github"
    })
  }; 

  getPrompts() {
    return this.basePrompts;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;