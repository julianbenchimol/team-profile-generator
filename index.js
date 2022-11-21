//runs the application
const Inquirer = require('inquirer');

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
    console.log(answers)
  })