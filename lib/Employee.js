// TODO: Write code to define and export the Employee class

class Employee {
  constructor(role) {
    this.role = role;
  }

  name = "";
  id = "";
  email = "";

  promptUser() {
    inquirer.prompt(this.basePrompts)
  };

  basePrompts = [
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s name?`,
      name: "employeeName"
    },
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s id number?`,
      name: "employeeId"
    },
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s email address?`,
      name: "employeeEmail"
    }
  ]

  

getName() {

};

getId() {

};

getEmail() {

};

getRole() {

}
};

module.exports = {
  Employee: Employee
};

