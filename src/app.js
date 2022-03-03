const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./HTML-template");
const employees = [];
/* ---------------------------- Manager Questions --------------------------- */
function managerPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter your ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
      validate: (eamilInput) => {
        if (eamilInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your office number",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your office number!");
          return false;
        }
      },
    },
  ]);
}

function prompt() {
  inquirer.prompt([
    {
      type: "list",
      name: "newEmployee",
      message: "Would you like to add a new employee?",
      choices: ["Engineer", "Intern", "No"]
    },
  ])
  .then((answers) => {
    if (answers.newEmployee === "Engineer") {
      engineerPrompt()
      
    } 
    if (answers.newEmployee === "Intern") {
      internPrompt();
    }
    else  {
      generateHTML(employees)
  }})
  .catch(() => {
    console.log("error!!!");
  });
}

managerPrompt().then((manager) => {
  employees.push(manager);
  prompt()

});

/* --------------------------- Engineer Questions --------------------------- */
function engineerPrompt() {
   inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's github account",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a github account!");
          return false;
        }
      },
    },
  ])
  .then((data) => {
    employees.push(data);
    prompt()
  });
}

//engineerPrompt()

/* ---------------------------- Intern Questions ---------------------------- */
function internPrompt() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter a school!");
          return false;
        }
      },
    },
  ])
  .then((data) => {
    employees.push(data);
    prompt()
  });
}

// internPrompt()



