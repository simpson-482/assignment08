const Intern = require("../lib/Intern");


test("the getSchool() function", () => {
  const school = "Ohio State";
  const obj1 = new Intern("Jared Simpson", 1, "jared@jared.com", school);
  expect(obj1.getSchool()).toBe(school);
});

test("the getRole() function", () => {
    const school = "Ohio State";
    const role = "Intern";
    const obj1 = new Intern("Jared Simpson", 1, "jared@jared.com", school);
    expect(obj1.getRole()).toBe(role);
  });