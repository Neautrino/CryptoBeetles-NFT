const {ethers} = require("hardhat");
require("dotenv").config();
const BeetlesNFTJson = require("../artifacts/contracts/BeetlesNFT.sol/BeetlesNFT.json");

async function main(){
    const abi = BeetlesNFTJson.abi;
    const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
    const wallet = new ethers.Wallet(process.env.SEPOLIA_PRIVATE_KEY, provider);
    const signer = wallet.connect(provider);
    const BeetlesNFT = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
    for(let i=1;i<=3;i++){
        await BeetlesNFT.mint(`https://olive-hidden-lungfish-156.mypinata.cloud/ipfs/${process.env[`NFT${i}`]}`);
        console.log(`NFT${i} minted successfully`);
    }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });