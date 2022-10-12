const inquirer = require("inquirer");
const generateUI = require('./generateUI');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

function promptManagerQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employees ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?",
    }
  ]);
}

function promptEngineerQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Engineer?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineers ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineers email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineers Github username?",
    }
  ]);
}

function promptInternQuestions() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What schoold did the intern attend?",
      }
    ]);
  }

  // creates prompt to identify if a new teammate should be added and if so what type,
  // for engineer/ intern that employees questions prompt, for Generate my site call generateUi
function promptAddTeamMember() {
  return inquirer.prompt([
    {
      type: "list",
      name: "addTeamMember",
      message:
        "Would you like to add an engineer or intern, or go ahead and generate your website?",
      choices: [`Engineer`, `Intern`, `Generate my site`],
    }
  ]).then(function(answers) {
    return answers.addTeamMember;
  });
}

async function init() {
  const employees = [];
  const managerInfo = await promptManagerQuestions();
  employees.push(new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber));
  console.log(managerInfo);

  let addTeamMember;

  while (addTeamMember !== "Generate my site") {
    addTeamMember = await promptAddTeamMember();
    if (addTeamMember === "Engineer") {
      const engineerInfo = await promptEngineerQuestions();
      employees.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github));
    }
    if (addTeamMember === "Intern") {
      const internInfo = await promptInternQuestions();
      employees.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school));
    }
  }
  console.log(employees);
  generateUI(employees);
  // while addTeamMember is not equal to 'Generate my site'
  // prompt add question
  // if engineer, prompt engineer questions
  // if intern, prompt intern question
  // push into employees array
  // ask add question

  // const engineerInfo = await promptEngineerQuestions();
  // console.log(engineerInfo);
}

init();

