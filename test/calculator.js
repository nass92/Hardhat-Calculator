const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function() {
let calc;

  this.beforeEach(async () => {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  })
///// addition test => Pass ///
    it("Currently opperation: addition", async function() {
      expect(
        await calculator
          .add(2, 2)
      )
      .to
      .equal(4);
    });
///// substraction test => Pass ///
    it("Curently opperation: substraction", async function() {
      expect(
        await calculator
          .sub(4, 2)
      )
      .to
      .equal(2);
    });
///// multiplication test => Pass ///
    it("Curently opperation: multiplication", async function() {
      expect(
        await calculator
          .mul(5, 2)
      )
      .to
      .equal(10);
    });
///// division test => Pass ///
    it("Curently opperation: divison", async function() {
      expect(
        await calculator
          .div(8, 2)
      )
      .to
      .equal(4);
    });

    ///// modulo test => fail. The result should be 4 ///
    it("Curently opperation: modulo", async function() {
      expect(
        await calculator
          .mod(10, 6)
      )
      .to
      .equal(41);
    });

});


