const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed previously
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  // URL from where we can extract the metadata for a Fight Punks NFT
  const metadataURL = METADATA_URL;

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so fightPunkContract here is a factory for instances of our FightPunks contract.
  */
  const fightPunkContract = await ethers.getContractFactory("FightPunks");

  // deploy the contract
  const deployedContract = await fightPunkContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log("Fight Punks Contract Address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
