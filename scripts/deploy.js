const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory for our contract
  const Web3Edu = await ethers.getContractFactory("Web3Edu");

  // Start deployment, returning a promise that resolves to a contract object
  const web3Edu = await Web3Edu.deploy();

  console.log("Web3Edu contract deployed to:", web3Edu.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
