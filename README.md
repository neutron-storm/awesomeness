# StudyChain

This was a project developed for the UBC Blockathon on Friday Aug 4th.

## Concept

Participants with wearable data are provided with an Ethereum Wallet address to anonymize themselves, allow for secure upload of their
data and provide compensation.

Wearable data per study is uploaded by the participant to a private IPFS cluster per study, where independent researchers who have been granted access can
retrieve the data.

The study parameters and patient data locators are all stored using permanent hashes on the Ethereum Public blockchain, creating
a permanent record of the study activity to be used transparently as references in peer reviewed papers.

## Technical

We developed a front-end web application using Vue.js.

Using testrpc (a local Ethereum blockchain simulation) and the truffle framework we deployed our smart contract "StudyBlock".

We communicate with study block via the Web3.js library from the Ethereum Foundation.

While we do not have a working implementation of IPFS, we run a node server and return a hash similar to those found in the 
IPFS protocol upon receiving data. 

## How to run

You will need to install MetaMask and set up an account.

Run `testrpc -m 'your meta mask mneumonic phrase goes here in quotes'` from any directory

Run `truffle migrate --reset` from the web3 directory

Run the node server in the server directory using `node server`

Serve the root directory using a standard http server and then go to `localhost:[port]/public`
