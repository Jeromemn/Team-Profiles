const fs = require("fs");

function generateUI(employees) {
  //  for each employee create a card in html
  //  display employee information on card
  console.log(employees);
  const employeeCards = employees.map((employee) => {
    return `
          <div>
              <p>name: ${employee.getName()}</p>
              <p>Id: ${employee.getId()}</p>
              <p>email: ${employee.getEmail()}</p>
              ${
                employee.getRole() === "Engineer"
                  ? `<p>github: ${employee.getGithub()}</p>`
                  : ""
              }
              ${
                employee.getRole() === "Intern"
                  ? `<p>school: ${employee.getSchool()}</p>`
                  : ""
              }
          </div>
      `;
  }).join(' ');
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
            <title>Document</title>
        </head>
        <body>
            ${employeeCards}
        </body>
        </html>
    `;

  fs.writeFile("index.html", template, (err) =>
    err ? console.log(err) : console.log("Successfully Created README!")
  );
}

module.exports = generateUI;
