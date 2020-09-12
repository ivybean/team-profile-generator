// TODO: Write code to define and export the Employee class

class Employee {
  constructor(role) {
    this.role = role;
  }

  name = "";
  id = "";
  email = "";

  promptUser = () => {
    inquirer
      .prompt(this.basePrompts)
      .then(function (answers) {
        Object.entries(answers)
          .forEach(function(answer) {
            var key = answer[0];
            var value = answer[1];
            this[key] = value;
          })
      })
  };

  basePrompts = [
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s name?`,
      name: "name"
    },
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s id number?`,
      name: "id"
    },
    {
      type: "input",
      message: `What is your ${this.role.toLowerCase()}'s email address?`,
      name: "email"
    }
  ]

  

  getName() {
    return this.name;
  };

  getId() {
    return this.id;
  };

  getEmail() {
    return this.email;
  };

  getRole() {
    return this.role;
  }
};

module.exports = {
  Employee: Employee
};

