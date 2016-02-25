# BitcoinUnlimitedWeb

The Bitcoin Unlimited website, hosted at https://bitcoinunlimited.info

## Installing

This is a node.js project requiring the npm package manager.

The following will install the project and start the server, listening on port 8080.

```bash
npm install grunt-cli -g
npm install bower -g
npm install forever -g
git clone git@github.com:BitcoinUnlimited/BitcoinUnlimitedWeb.git
cd BitcoinUnlimitedWeb
npm install
forever start index.js
```

See the nginx-site.conf file for an example configuration to proxy requests from port 80.
