module.exports = {
networks: {
mynetwork: {
host: "localhost", //our network is running on localhost
port: 8543, // port where your blockchain is running
network_id: "143",
from: "0x17030ef587453d3e12f5fd76e85891653091da4e", // use the account-id generated during the setup process
},
develop: {
  port: 8545,
  network_id: 143,
  accounts: 5,
  defaultEtherBalance: 500,
  blockTime: 3
}
}

};
