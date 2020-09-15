const Employee = require("../lib/Employee");

test("the getName() function", () => {
  const name = "Jared Simpson";
  const obj1 = new Employee(name);
  expect(obj1.getName()).toBe(name);
});