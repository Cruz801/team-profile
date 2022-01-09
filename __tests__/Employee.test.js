const Employee = require('../lib/Employee');






test("gets employee object", () => {
    const employee = new Employee('Dave', 4, 'jon@jsyaml.gmail.com');

    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
})