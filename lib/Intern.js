// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "internName"
    },
    {
      type: "input",
      message: "What is your engineer's id number?",
      name: "internId"
    },
    {
      type: "input",
      message: "What is your engineer's email address?",
      name: "internEmail"
    },
    {
      type: "input",
      message: "What is your engineer's School?",
      name:"internSchool"
    }
  ])
};

class Intern extends Employee {
  constructor(name, id, email, githubUsername) {

  }
}