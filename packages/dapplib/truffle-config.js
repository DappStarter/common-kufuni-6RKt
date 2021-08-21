require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue remember stereo solid hover end army gesture'; 
let testAccounts = [
"0xe317b4b71882454b6558314a1127dc90681aa8e24063f0e1b1236e6de0faf619",
"0xa5eac52ffe3a2d5f8265cbdcf62c093894cbeb2255839b6c834a4e9f1c676a7f",
"0xcce499a50c17f8d67d5d21b6db5e89eb720c03c7c441d7e2bf20a96152dccb35",
"0xfb01f5ed56e072e22ffc3a11dfabfb8a694f7c1491b92e354b3cbc300973ab2a",
"0x3e1c774982883adb7803e5863d2568c9334675f23f0a03500e357cd07c228767",
"0x3dfa24dc171538324eab3f59dfa5c36589ae4304d5ca9b0e79763f5bde1ee461",
"0x76c304095a8d5c432dc91dc22423ce9d48ccc9f33ca7a282a34c6e36d8515d41",
"0xb8e659b42149ad4be55b3ae6261dcf4cd6bda1fe0659d3f9e1b683509360684c",
"0xf27840075c1484c4cf0e90177a90a2b490586c0d3c529cd255cb3002a8dbe046",
"0x6e32d66cfb871b848bf8a1b124da87c2d8a139d7ee4c6191271204540e2a03bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


