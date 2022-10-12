const fs = require("fs");

function generateUI(employees) {
  //  for each employee create a card in html
  //  display employee information on card
  console.log(employees);
  const employeeCards = employees
    .map((employee) => {
      return `
    <div class="cell small-4">
    <div class="card-user-container">
  
    <div class="card-user-avatar">
        <img src="https://placehold.it/200x200" alt="" class="user-image">
    </div>


  <div class="card-user-bio">
    <h4>${employee.getName()}</h4>
    <h6> ${employee.getRole()}</h6>
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
            <title>A team profile</title>
        </head>
        <body>
        <header> The A Team </header>
        <div class="grid-container">
         <div class="grid-x grid-margin-x">
            ${employeeCards}

        </div>
        </div>    
        </body>
        </html>
    `;

  fs.writeFile("index.html", template, (err) =>
    err ? console.log(err) : console.log("Successfully Created README!")
  );
}

module.exports = generateUI;
