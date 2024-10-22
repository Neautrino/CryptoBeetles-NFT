const { ethers } = require("hardhat");
require("dotenv").config();


async function main() {
  const BeetlesNFT = await ethers.getContractFactory("BeetlesNFT");
  const beetlesNFT = await BeetlesNFT.deploy("BeetlesNFT", "BNFT");

  await beetlesNFT.deployed();
  console.log("BeetlesNFT successfully deployed to:", beetlesNFT.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled Error:", error);
    process.exit(1);
  });
