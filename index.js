//runs the application
const Inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const fs = require('fs');


Inquirer
  .prompt([
    {
        type: 'list',
        message: 'Add a Teammate',
        name: 'teammateType',
        choices: ['Manager','Engineer','Intern'],
    },
    //Start Manger Input
    {
        type: 'input',
        message: `Please input the Manager's Name: `,
        name: 'managerName',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's ID: `,
        name: 'managerID',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's Email: `,
        name: 'managerEmail',
        when: (answers) => answers.teammateType === 'Manager'
    },
    {
        type: 'input',
        message: `Please input the Manager's Office Number: `,
        name: 'managerOfficeNumber',
        when: (answers) => answers.teammateType === 'Manager'
    },
    //End Manager Input
    //Start Engineer Input
    {
        type: 'input',
        message: `Please input the Engineer's Name: `,
        name: 'egineerName',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's ID: `,
        name: 'engineerId',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's Email: `,
        name: 'engineerEmail',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    {
        type: 'input',
        message: `Please input the Engineer's GitHub Username: `,
        name: 'engineerGitHub',
        when: (answers) => answers.teammateType === 'Engineer'
    },
    //End Engineer Input
    //Start Intern Input
    {
        type: 'input',
        message: `Please input the Intern's Name: `,
        name: 'internName',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's ID: `,
        name: 'internId',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's Email: `,
        name: 'internEmail',
        when: (answers) => answers.teammateType === 'Intern'
    },
    {
        type: 'input',
        message: `Please input the Intern's School: `,
        name: 'internSchool',
        when: (answers) => answers.teammateType === 'Intern'
    },
    //End Intern Input
  ])
  .then(answers =>{
    createTeammate(answers);
})

function createTeammate(answers){
    if(answers.teammateType === 'Manager'){
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        createHtml(newManager)
    }
    else if (answers.teammateType === 'Intern'){
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.internSchool);
        createHtml(newIntern);
    }
    else if(answers.teammateType === 'Engineer'){
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.engineerGitHub);
        createHtml(newEngineer);
    }
}

function createHtml(employee){
    const special = null;
    const employeeCard = null;
    if(employee.teammateType === 'Manager'){
        special = 'office';
        return;
    }
    else if (employee.teammateType === 'Intern'){
        special = 'school';
        return;
    }
    else if(employee.teammateType === 'Engineer'){
        special = 'github';
        return;
    }
    if(special === 'office'){
        employeeCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: ${employee.getEmail()}\n Office Number: ${employee.getOfficeNumber}</p>
        </div>
      </div>`
      return;
    }
    else if (special === 'school'){
        employeeCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: ${employee.getEmail()}\n School: ${employee.getSchool}</p>
        </div>
      </div>`
      return;
    }
    else if (special === 'gihub'){
        const employeeCard = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}\n ID: ${employee.getId()}\n Email: ${employee.getEmail()}\n Github: <a href = "https://github.com/${employee.getSchool}"GitHub Profile</a></p>
        </div>
      </div>`
      return;
    }

    const markup = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Default Head Tags -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <!-- Bootstrap Stylesheet Connection -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <!-- Default Stylesheet Connection -->
        <link rel="stylesheet" href="style.css" />
        <title>Insert Title Here</title>
      </head>
    
      <body>
        <!-- Body Elements Go Here -->
        <div class = "container">
            <div class = "row" id = "main-row">
                ${employeeCard}
            </div>
        </div>
    
    
        <div>
            <!-- JQuery Connection -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    
            <!-- Bootstrap JS connection -->
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
    
            <!-- Main Script Connection -->
            <script type = "text/javascript" src = "../index.js"></script>
        </div>
    
      </body>
    </html>`
 
    fs.writeFile('test.html', markup, (err) =>
    err ? console.error(err) : console.log('Success!'));
}