const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("the getOffice() function", () => {
  const officeNumber = 42;
  const obj1 = new Manager("Jared Simpson", 5, "jared@jared.com", officeNumber);
  expect(obj1.getOfficeNumber()).toBe(officeNumber);
});