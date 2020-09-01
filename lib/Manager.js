// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managerName"
    },
    {
      type: "input",
      message: "What is your manager's id number?",
      name: "managerId"
    },
    {
      type: "input",
      message: "What is your managers's email address?",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name:"managerOfficeNumber"
    }
  ])
};

const roleManager = "Manager",

class Manager extends Employee {
  constructor(name, id, email, githubUsername) {

  }
}