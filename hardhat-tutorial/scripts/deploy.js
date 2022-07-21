const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that was previously  deployed
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Fight Punk NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so fightpunksContract here is a factory for instances of our Fightpunk contract.
  */
  const fightpunksContract = await ethers.getContractFactory("FightPunks");

  // deploy the contract
  const deployedFightPunksContract = await fightpunksContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Fight Punks Contract Address:",
    deployedFightPunksContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("the error is " + error);
    process.exit(1);
  });
