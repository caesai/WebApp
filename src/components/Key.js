import React from 'react';
import _ from 'lodash';

var randomBytes = require('random-bytes')
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const ethUtils = require('ethereumjs-util');
// const constants = require('bip44-constants')


class Key extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '',
      private: null,
      public: null,
      address: null,
      wif: null,
      mnemonic: null
    }
  }

  componentDidMount() {
    randomBytes(32)
        .then((key) => {
          this.setState({
            key: key,
            private: key.toString('hex')
          })
          return key;
        })
        .catch(err => console.log(err));

  }
  render() {
    return(
      <div>
        <div style={{
          textAlign: 'left'
        }}>
          <div><b>Private key:</b> {this.state.private && this.state.private}</div>
          <div><b>xPub:</b> {this.state.public && this.state.public}</div>
          <div><b>WIF:</b> {this.state.wif && this.state.wif}</div>
          <div><b>BTC Address:</b> {this.state.address && this.state.address}</div>
          <div><b>ETH Address:</b> {this.state.ethAddress && this.state.ethAddress}</div>
          <div><b>Mnemonic seed:</b> {this.state.mnemonic && this.state.mnemonic.map((word, key) =>{
            return <span key={key}>{word} </span>
          })}</div>
        </div>
        <button onClick={()=>{
          let mnemonic = bip39.entropyToMnemonic(this.state.key).split(' ');
          let phrase = _.join(mnemonic, ' ');
          let seedBuffer = bip39.mnemonicToSeed(phrase);
          let masterNode = bitcoin.HDNode.fromSeedBuffer(seedBuffer)
          let account0 = masterNode.derivePath("m/44'/0'/0'")
          let xpubString = account0.neutered().toBase58();

          let key0 = account0.derivePath("0/0").keyPair
          let key0FromXpub = account0.neutered().derivePath("0/0").keyPair

          let address0 = key0.getAddress()
          let address0FromXpub = key0FromXpub.getAddress();
          let address0FromXpubKey = bitcoin.HDNode.fromBase58(xpubString);

          var ethAddress = ethUtils.privateToAddress(this.state.key).toString('hex');
          
          console.log(address0 === address0FromXpub)

          this.setState({
            mnemonic: mnemonic,
            public: xpubString,
            address: address0,
            ethAddress: `0x${ethAddress.toUpperCase()}`,
            wif: key0.toWIF()
          })
        }}>Create wallet</button>
      </div>
    )
  }
}

export default Key
