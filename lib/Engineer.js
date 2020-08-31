// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "engineerName"
    },
    {
      type: "input",
      message: "What is your engineer's id number?",
      name: "engineerId"
    },
    {
      type: "input",
      message: "What is your engineer's email address?",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "What is your engineer's Github username?",
      name:"githubUsername"
    }
  ])
};

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {

  }
}