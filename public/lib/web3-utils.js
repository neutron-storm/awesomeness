/**************************************
* Get Web3
**************************************/
const getWeb3 = () => {
  let web3 = window.web3;
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    //web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  return web3;
};
/**************************************
* Get Network
**************************************/
const getNetwork = (web3 = window.web3) => {
  if (!web3) {
    console.log('No web3 instance provided');
    return;
  }
  web3.version.getNetwork((err, networkId) => {
    switch (networkId) {
      case "1":
        console.log('This is mainnet');
        break;
      case "2":
        console.log('This is the deprecated Morden test network.');
        break;
      case "3":
        console.log('This is the ropsten test network.');
        break;
      case "4":
        console.log('This is the rinkeby test network.');
        break;
      default:
        console.log('This is a localhost / unknown network.');
    }
    return networkId;
  });
};