





/**************************************
* Helper Funcs and Vars
*
* TODO move these to an app namespace
**************************************/
let web3, StudyBlock, accounts, participant, owner, study;
const qs = (sel) => document.querySelector(sel);
  
const init = () => {
  
  web3 = getWeb3(web3);
  
  const studyContract = TruffleContract(StudyBlock);
    studyContract.setProvider(web3.currentProvider);
  
     
  /**************************************
  * Contract Calls
  **************************************/
  
  /**************************************
  * Init Page
  **************************************/

  /**************************************
  * Setup Contracts and Accounts
  **************************************/
  //accounts
  accounts = web3.eth.accounts;
  owner = accounts[0];
  //const participant = '0xf1a11C42075F2d89aC2792B4D43E2d48457F311F';
  participant = accounts[0];
  /**************************************
  * Set Purchaser Address
  **************************************/
  console.log(participant);
  //qs('#address').value = participant;
  /**************************************
  * Contract Deployments
  **************************************/
  const deployed = () => {
    console.log('contracts deployed');
    update();
  };
  //crowdsale promise, find the instance of the contract depending on the network
  let studyPromise;
  switch (getNetwork(web3)) {
    // case 4: crowdsalePromise = crowdsaleContract.at('0xcDc0De9ee2ea3553E6458f5EF014db200Ed42345');
    // break;
    default: studyPromise = studyContract.deployed();
  }
  studyPromise.then((instance) => {
    study = instance;
    
    //start making test calls to contract
    
    runPage();
  });
  
};

fetch('../web3/build/contracts/StudyBlock.json')
  .then(function(res){ return res.text() })
  .then(function(text){
    
    StudyBlock = JSON.parse(text);
    
    init();

});
  
 