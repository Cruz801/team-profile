const Manager = require('../lib/Manager');






test("gets manager object", () => {
    const manager = new Manager('Dave', 4, 'jon@jsyaml.gmail.com', 20);

    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
    expect(manager).toHaveProperty('officeNumber');
})