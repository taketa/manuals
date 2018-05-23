unlock account - geth --unlock "0xd3d28e4bb40fbeb6dd53bfb97e20f79ff7229647" --networkid 1234 --rpc --mine

geth --datadir privchain  --networkid 72 --rpcport 30308 --nodiscover --rpc --rpcapi "eth,web3,personal,net,miner,admin,debug" console  - run node with web3 api to connect from web3js

web3.personal.unlockAccount(web3.eth.coinbase,"1") - unlock account


