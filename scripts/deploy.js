async function main() {
  const Calculator = await ethers.getContractFactory("Calculator");
  console.log(Calculator);
  const calc = await Calculator.deploy();
  
  await calc.deployed();

  console.log("Calculator deployed to:", calc.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
})

