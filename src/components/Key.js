import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {actions} from '../actions';

var randomBytes = require('random-bytes');
const crypto = require('crypto');
const secp256k1 = require('secp256k1');
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
  generatePrivateKey(){
    return new Promise ((resolve, reject) => {
        crypto.randomBytes(32, (err, buf) => {
          if (err) reject(err);
          console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
          resolve(buf);
        });
      }
    )
  }
  componentDidMount() {
    this.generatePrivateKey().then( key => {
      const pubKey = secp256k1.publicKeyCreate(key)
      this.setState({
        key: key,
        private: key.toString('hex'),
        public: pubKey.toString('hex')
      });
      this.props.dispatch(actions.userAuth({
        uid: pubKey.toString('hex')
      }))
    })
  }
  render() {
    return(
      <div>
        <div style={{
          textAlign: 'left'
        }}>
          <div><b>Private key:</b> {this.state.private && this.state.private}</div>
          <div><b>Public key:</b> {this.state.public && this.state.public}</div>
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
            address: address0,
            ethAddress: `0x${ethAddress.toUpperCase()}`,
            wif: key0.toWIF()
          })
        }}>Create wallet</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.user.name,
  uid: state.user.uid
});

export default connect(mapStateToProps)(Key)
