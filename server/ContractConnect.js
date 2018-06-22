import abi from './abi.json';

let Web3 = require('web3');
// const web3 = new Web3('https://ropsten.infura.io/N5uwjPt8eb0Dv6Qn3ixj');
const contractAddress = '0xa9a4bdc2ddf0c22a5825b369203b7f714c714d15';

var provider = new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws');
var web3 = new Web3(provider);

const promisify = (inner) =>
  new Promise((resolve, reject) =>
    inner((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
);

export const ContractConnect = (address) => {
  web3.eth.getBlockNumber().then(console.log);
  const contract = new web3.eth.Contract(abi, contractAddress);
  let balance =  contract.methods.balanceOf(address).call();
  return balance;
}
