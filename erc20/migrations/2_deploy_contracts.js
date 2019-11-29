const MyToken = artifacts.require("./MyToken.sol");
const MyTokenCrowdsale = artifacts.require("./MyTokenCrowdsale.sol");
const web3 = require("web3-utils");
module.exports = (deployer, network, [owner]) => {
  const _name = "MySimpleToken";
  const _symbol = "MST";
  const _decimals = 18;
  const _initialSupply = 16000000;
  const _rate = 1;
   
  return deployer
    .then(() => deployer.deploy(MyToken, _name, _symbol, _decimals, _initialSupply))
    .then(() => deployer.deploy(MyTokenCrowdsale, _rate, owner, MyToken.address))
    .then(() => MyToken.deployed())
    .then(token  => {
      token.addMinter(MyTokenCrowdsale.address)
      token.renounceMinter();
    })
};