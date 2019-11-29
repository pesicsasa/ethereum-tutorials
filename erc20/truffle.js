module.exports = {
networks: {
  mynetwork: {
    host: "localhost", //our network is running on localhost
    port: 8545, // port where your blockchain is running
    network_id: "55555",
    from: "0x0906494f5e3e52a313b5b43d6d2634f14554974c", // use the account-id generated during the setup process
    confirmations: 2, // # of confs to wait between deployments. (default: 0)
    skipDryRun: true

  }
}

};
