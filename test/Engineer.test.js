const Engineer = require("../lib/Engineer");

test("the getRole() function", () => {
  const role = "Engineer";
  const obj1 = new Engineer("Jared", 1, "jared@jared.com", "githubId");
  expect(obj1.getRole()).toBe(role);
});