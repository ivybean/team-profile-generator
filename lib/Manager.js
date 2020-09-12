
const Employee = require("./Employee");
const inquirer = require("inquirer");

const roleManager = "Manager",

class Manager extends Employee {
  constructor() {
    super(roleManager)
    this.basePrompts.push({
      type: "input",
      message: "What is your manager's office number?",
      name:"officeNumber"
    })
  };

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;