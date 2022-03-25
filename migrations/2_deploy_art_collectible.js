const EACollectible = artifacts.require('EACollectible');

module.exports = function (deployer) {
  deployer.deploy(EACollectible);
};
