const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const Choices = require("inquirer/lib/objects/choices");

const teamArray = [];

function promptBaseQs() {
  inquirer
  .prompt([
    {
      type: "input",
      message: `What is your employess's name?`,
      name: "name"
    },
    {
      type: "input",
      message: `What is your employees's id number?`,
      name: "id"
    },
    {
      type: "input",
      message: `What is your employee's email address?`,
      name: "email"
    },
    {
      type: "list",
      message: `What is your employee's role?`,
      name: "role",
      choices: ["Intern", "Engineer", "Manager"]
    }
  ])
  .then(function (answers) {
    if (answers.role === "Intern") {
      promptInternQs(answers);
    } else if (answers.role === "Engineer") {
      promptEngineerQs(answers);
    } else if (answers.role === "Manager") {
      promptManagerQs(answers);
    };
  })
}

function promptInternQs(baseAnswers) {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your intern's current school?",
      name:"school"
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name:"addNew"
    }
  ])
  .then(function (answers) {
    const intern = new Intern(baseAnswers.name, baseAnswers.id, baseAnswers.email, baseAnswers.role, answers.school)
    teamArray.push(intern);

    if (answers.addNew === true) {
      promptBaseQs()
    } else {
      generateTeam();
      console.log("Team has been generated!")
    };
  })
};

function promptEngineerQs(baseAnswers) {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your engineer's Github username?",
      name:"github"
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name:"addNew"
    }
  ])
  .then(function (answers) {
    const intern = new Intern(baseAnswers.name, baseAnswers.id, baseAnswers.email, baseAnswers.role, answers.github)
    teamArray.push(intern);

    if (answers.addNew === true) {
      promptBaseQs()
    } else {
      generateTeam();
      console.log("Team has been generated!")
    };
  })
}

function promptManagerQs(baseAnswers) {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's office number?",
      name:"officeNumber"
    },
    {
      type: "confirm",
      message: "Would you like to add another employee?",
      name:"addNew"
    }
  ])
  .then(function (answers) {
    const intern = new Intern(baseAnswers.name, baseAnswers.id, baseAnswers.email, baseAnswers.role, answers.officeNumber)
    teamArray.push(intern);

    if (answers.addNew === true) {
      promptBaseQs()
    } else {
      generateTeam();
      console.log("Team has been generated!")
    };
  })
}

function generateTeam() {
  console.log(teamArray);
};

promptBaseQs();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
