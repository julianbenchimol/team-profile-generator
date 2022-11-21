const Manager = require('../lib/manager.js');

describe('Manager', ()=>{
    it('Creates a manager with a name, id, and email attribute', ()=>{
        const obj = new Manager();

        expect ('name' in obj).toEqual(true);
        expect('id' in obj).toEqual(true);
        expect('email' in obj).toEqual(true);
    })
    it('Should return with the name of the manager using the method', ()=>{
        const obj = new Manager('Julian', 12, 'test@test.com', 18);
        const name = 'Julian';

        expect(obj.getName()).toEqual(name);
    })
    it('Should return with the ID of the manager using the method', ()=>{
        const obj = new Manager('Julian', 12, 'test@test.com', 18);
        const id = 12;

        expect(obj.getId()).toEqual(id);
    })
    it('Should return with the email of the manager using the method', ()=>{
        const obj = new Manager('Julian', 12, 'test@test.com', 18);
        const email = 'test@test.com';

        expect(obj.getEmail()).toEqual(email);
    })
    it('Should return with the office number of the manager using the method', ()=>{
        const obj = new Manager('Julian', 12, 'test@test.com', 18);
        const officeNumber = 18;

        expect(obj.getOfficeNumber()).toEqual(officeNumber);
    })
    it('Should return "manager" when using the getRole method', ()=>{
        const obj = new Manager();
        const role = 'Manager';

        expect(obj.getRole()).toEqual(role);
    })
})