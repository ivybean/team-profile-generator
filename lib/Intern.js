// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "internName"
    },
    {
      type: "input",
      message: "What is your intern's id number?",
      name: "internId"
    },
    {
      type: "input",
      message: "What is your intern's email address?",
      name: "internEmail"
    },
    {
      type: "input",
      message: "What is your intern's School?",
      name:"internSchool"
    }
  ])
};

const roleIntern = "Intern",

class Intern extends Employee {
  constructor(name, id, email, School) {

  }
}