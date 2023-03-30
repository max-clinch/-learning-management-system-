const Web3 = require('web3');
const { ethers } = require("ethers");
const ethtx = require('ethereumtx')


const contractABI = [ 
  {
    "inputs": [],
    "name": "notOwner",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "hash",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "experience",
        "type": "uint256"
      }
    ],
    "name": "instructorRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "hash",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      }
    ],
    "name": "instructorVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_student",
        "type": "address"
      }
    ],
    "name": "moduleCertficateClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_client",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "modulePurchase",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_instructor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_courseFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_moduleIndex",
        "type": "uint256"
      }
    ],
    "name": "newMouduleCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_hash",
        "type": "address"
      }
    ],
    "name": "studentRegistered",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_adminAddresses",
        "type": "address[]"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "courseModules",
    "outputs": [
      {
        "internalType": "contract CourseModule",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_courseName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_courseSymbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_courseFee",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_certificateURI",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_courseDuration",
        "type": "string"
      }
    ],
    "name": "createNewModule",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_emailAddress",
        "type": "string"
      }
    ],
    "name": "enrollStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_instructorAddress",
        "type": "address"
      }
    ],
    "name": "fireInstructor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "instructorRegistrationFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isInstructor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isInstructorVerified",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_moduleIndex",
        "type": "uint256"
      }
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "moduleCreationFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfModulesCreated",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfModulesPurchased",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_firstName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_lastName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_emailAddress",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_experience",
        "type": "uint256"
      }
    ],
    "name": "registerInstructor",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_instructorAddress",
        "type": "address[]"
      }
    ],
    "name": "verifyInstructors",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
const contractAddress = '0x507f07F6B615C30503D2D526CD50f12e44A3A679';

// Create provider and signer
//const provider = new ethers.providers.JsonRpcProvider();
//const signer = provider.getSigner();
//const API_KEY = process.env.API_KEY;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
//// Create contract instance
//const contract = new ethers.Contract(contractAddress, abi, provider)
//console.log(JSON.stringify(abi));
//
//const ethereumAddress = '0x507f07F6B615C30503D2D526CD50f12e44A3A679';




const API_KEY = process.env.API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/ermBo3YbBnlXNzo8rIgTaPHFpHsA6-SD'); // connect to the Alchemy API


const contractInstance = new web3.eth.Contract(contractABI, contractAddress); // create the contract instanc


const Web3EduContract = new ethers.Contract(contractAddress, contractABI);
const ethereumAddress = '0x507f07F6B615C30503D2D526CD50f12e44A3A679'
console.log(JSON.stringify(contractABI));
//const alchemyProvider = new ethers.providers.AlchemyProvider(network="mumbai", API_KEY);


// Example function call: get the owner of the contract
contractInstance.methods.Owner().call()
  .then((owner) => {
    console.log(`The owner of the contract is ${owner}`);
  })
  .catch((error) => {
    console.error(error);
  })

  // Create a new module
const txObject = contractInstance.methods.createNewModule(
  'Course Name',
  'COURSE',
  web3.utils.toWei('1', 'ether'), // 1 ether course fee
  'https://polygon-mumbai.g.alchemy.com/v2/ermBo3YbBnlXNzo8rIgTaPHFpHsA6-SD',
  '48 hours'
);
const privateKey =  process.env.PRIVATE_KEY;

const txData = txObject.encodeABI();

const tx = {
  //nonce: await web3.eth.getTransactionCount(ethereumAddress),
  from: ethereumAddress,
  to: contractInstance.options.address,
  value: web3.utils.toWei('0.02', 'ether'),
  gasPrice: web3.utils.toHex(10e9),
  gasLimit: web3.utils.toHex(300000),
  data: txData,
  chainId: 80001
};

const signedTx = web3.eth.accounts.signTransaction(tx, privateKey);

web3.eth.sendSignedTransaction(signedTx.rawTransaction, (error, transactionHash) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Transaction hash:', transactionHash);
  }
});

  // Prepare the transaction to issue a certificate
  const recipientAddress = "0x0F84D25C1df867313627e5f9BFbC9D4d3e89E4b1";
  const courseId = 123;
  const functionABI = contractInstance.methods.issueCertificate(ethereumAddress, courseId).encodeABI();

try {
  const nonce = new web3.eth.getTransactionCount(ethereumAddress, 'pending');
  const gasPrice = new web3.utils.toHex(web3.utils.toWei('10', 'gwei'));
  const gasLimit = new web3.utils.toHex(500000);
  const txObject = {
    nonce: web3.utils.toHex(nonce),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    to: contractAddress,
    value: '0x0',
    data: functionABI,
  };
  const signedTx = new web3.eth.accounts.signTransaction(txObject, privateKey);
  const transactionHash =new web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log('Transaction hash:', transactionHash);
} catch (error) {
  console.error(error);
}