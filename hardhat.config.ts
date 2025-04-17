import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      // Verifications
      metadata: {
        bytecodeHash: "none", // disable ipfs
        useLiteralContent: true, // use source code
      },
    },
  },
  networks: {
    'monad-testnet': {
      url: 'https://testnet-rpc.monad.xyz',
      // chainId: 10143,
      accounts: [
        'YOUR_PK_HERE',
      ],
    }
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com",
  },
  // To avoid errors from Etherscan
  etherscan: {
    enabled: false,
  },
};

export default config;
