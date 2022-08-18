require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url : "https://eth-goerli.g.alchemy.com/v2/K7U2O0OWWMZaGshT2Uc0633wc8DN3GxA",
      accounts: ["d498dbbe988fe18f6cc33e1858863a18294d34806d018319492071a2c04691f1"]
    }
  }
};
