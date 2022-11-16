const Employee = require('../lib/employee.js');

describe('Employee', ()=>{
    it('Creates an employee object with name, id, and email attributes', ()=>{
        const obj = new Employee();

        expect('name' in obj).toEqual(true);
        expect('id' in obj).toEqual(true);
        expect('email' in obj).toEqual(true);
    })
    it('Should return with the name of the employee using the method', ()=>{
        const obj = new Employee('Julian', 12, 'test@test.com');
        const name = 'Julian';

        expect(obj.getName()).toEqual(name);
    })
    it('Should return with the ID of the employee using the method', ()=>{
        const obj = new Employee('Julian', 12, 'test@test.com');
        const id = 12;

        expect(obj.getId()).toEqual(id);
    })
    it('Should return with the email of the employee using the method', ()=>{
        const obj = new Employee('Julian', 12, 'test@test.com');
        const email = 'test@test.com';

        expect(obj.getEmail()).toEqual(email);
    })
    it('Should return "employee" when using the getRole method', ()=>{
        const obj = new Employee();
        const role = 'Employee';

        expect(obj.getRole()).toEqual(role);
    })
})