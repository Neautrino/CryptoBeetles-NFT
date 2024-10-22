# BeetlesNFT

BeetlesNFT is a simple ERC721 (NFT) smart contract that allows users to mint NFTs on the Ethereum blockchain. This project uses Hardhat for smart contract development and ethers.js for interaction with the deployed contract. The contract is deployed on the Sepolia test network.

## Features
- Minting of NFTs with metadata URI.
- Uses OpenZeppelin’s `ERC721URIStorage` for token storage functionality.
- Deployed to the Sepolia testnet.
- Automated minting of NFTs with metadata hosted on IPFS.

## View the NFTs

The three NFTs minted with this contract are uploaded on the Sepolia testnet and available on OpenSea:
[View on OpenSea](https://testnets.opensea.io/0x0f4226f1063140A7fB790D09166C9d4908BC7Ce6)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/)
- [Infura](https://infura.io/) account and project for Ethereum node access.
- [Pinata](https://pinata.cloud/) account for hosting metadata on IPFS.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Neautrino/CryptoBeetles-NFT.git
    cd BeetlesNFT
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of your project and add the following environment variables:

    ```bash
    INFURA_API_KEY=your_infura_api_key
    SEPOLIA_PRIVATE_KEY=your_sepolia_private_key
    CONTRACT_ADDRESS=deployed_contract_address
    NFT1=ipfs_hash_for_nft1
    NFT2=ipfs_hash_for_nft2
    NFT3=ipfs_hash_for_nft3
    ```

    - `INFURA_API_KEY`: Your Infura API key for connecting to the Sepolia testnet.
    - `SEPOLIA_PRIVATE_KEY`: Your wallet's private key on the Sepolia testnet.
    - `CONTRACT_ADDRESS`: The address where your NFT contract is deployed.
    - `NFT1`, `NFT2`, `NFT3`: The IPFS hashes for your NFTs metadata (generated via Pinata).

4. Compile the smart contracts:

    ```bash
    npx hardhat compile
    ```

### Deployment

To deploy the BeetlesNFT smart contract to Sepolia:

1. Run the deployment script:

    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```

2. After deployment, note the contract address and add it to the `.env` file.

### Minting NFTs

Once your contract is deployed, you can mint NFTs by running the minting script. This will mint three NFTs with metadata hosted on IPFS.

```bash
npx hardhat run scripts/mint.js --network sepolia
```

Each minted NFT will be visible on OpenSea's Sepolia testnet marketplace.

View NFTs on OpenSea
The minted NFTs are now viewable on OpenSea: BeetlesNFT Collection on OpenSea

## License
This project is licensed under the MIT License.
