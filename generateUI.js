const fs = require("fs");
const Manager = require("./lib/Manager");

function generateUI(employees) {
  //  for each employee create a card in html
  //  display employee information on card
  // use join to remove commas
  // designate specific traits using get role, images, officenumber, github and school
  // if does not apply to that role leave blank :""
  console.log(employees);
  const employeeCards = employees
    .map((employee) => {
      return `
    <div class="cell small-4">
    <div class="card-user-container">
  
    ${employee.getRole() === "Manager"
    ? `<div class="card-user-avatar">
        <img src="assets/businessman.png" alt="manager-image" class="user-image">
    </div>` :""
    }
    ${employee.getRole() === "Engineer"
    ? `<div class="card-user-avatar">
        <img src="assets/coding.png" alt="engineer-image" class="user-image">
    </div>` :""
    }
    ${employee.getRole() === "Intern"
    ? `<div class="card-user-avatar">
        <img src="assets/graduated.png" alt="intern-image" class="user-image">
    </div>` :""
    }


  <div class="card-user-bio">
    <h4>${employee.getName()}</h4>
    <h5> ${employee.getRole()}</h5>
    <p>Id: ${employee.getId()} </p>
    <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()} </a></p>
    ${
      employee.getRole() === "Manager"
        ? `<p>Office Number: ${employee.getOfficeNumber()}</p>`
        : ""
    }
      ${
        employee.getRole() === "Engineer"
          ? `<p>Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`
          : ""
      }
      ${
        employee.getRole() === "Intern"
          ? `<p>School: ${employee.getSchool()}</p>`
          : ""
      }
  </div>
</div>
</div>
          
      `;
    })
    .join(" ");
  // use join to remove ,s that come from the array
  // console.log(employeeCards);
  // map to return as a div not as an array
  const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <title>A team profile</title>
        </head>
        <body>
        <header id="header"> 
        <h1 id="h1">The A Team </h1>
        </header>
        <div class="grid-container">
         <div class="grid-x grid-margin-x">
            ${employeeCards}

        </div>
        </div>    
        </body>
        <br>
        <br>
        <footer>
        <a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by surang - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/businessman" title="businessman icons">Businessman icons created by Gregor Cresnar - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a>
      </footer>
        </html>
    `;

  fs.writeFile("index.html", template, (err) =>
    err ? console.log(err) : console.log("Successfully Created Team!")
  );
}

module.exports = generateUI;
