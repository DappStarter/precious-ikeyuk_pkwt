require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember coin grace slight food giant'; 
let testAccounts = [
"0x8f1010361faf333687861ea91e558dbcdc8a9d4b65ecf83728093ae0b28f2b43",
"0x7f7e9cfc9842600eb41af0f32faf21869487440272e486ddaeedc28b1599bb35",
"0x74cdd74bcae290388068c3526b77821664d7483b91ac30f1c6475fd6084148a5",
"0xc51655a012e466b490d0b832bf92cbc22d61e42714855c0b40c967aefab9c71b",
"0x9ca7d2c89f1a9250912386a6f607779316273c62ec6afe12d2b4ac168a2250e6",
"0x4c2f3d858040a896e7a14c9dc41fff91a69ab26e0104d4b487d797eceba63f7d",
"0xd9f797289d17805d56884efd3707070e21846049d4567c104d2f63cfdb5c1889",
"0x6e37b75684b34b7dcd05d2c79978084051ce8bdc6e238e4c39dfef70a6d14f86",
"0xf98fb39b4dd6567269cc9396931388d08c8f3ee091a979d026d131d3577a70f5",
"0x2483ba1d4c677a44c98f9bf4d43ddcb4fcbcbc56d482d550ca725d49d0a11a9d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

