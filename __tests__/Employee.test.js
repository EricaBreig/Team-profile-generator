const Employee = require("..lib/Employee.js");
//brings in the code that we are testing
describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate an employee instance", () => {
      //arange
      const employee = new Employee();
      //act

      //assert
      expect(typeof employee).toBe("object");
    });
  });
});
