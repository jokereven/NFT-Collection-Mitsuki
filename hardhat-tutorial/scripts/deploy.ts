import dotenv from "dotenv";
import { ethers } from "hardhat";
import { METADATA_URL, WHITELIST_CONTRACT_ADDRESS } from "../constants";

dotenv.config({ path: ".env" });

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // 0xd7959D7F6D1A7aABd6E72d36bf7f42C6065cC2Af
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
