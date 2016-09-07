# BitcoinUnlimitedWeb

The Bitcoin Unlimited website, hosted at https://bitcoinunlimited.info

## Developing

This is a node.js project requiring the npm package manager.

The following will install the project and start the server, listening on port 8080.

```bash
git clone git@github.com:BitcoinUnlimited/BitcoinUnlimitedWeb.git
cd BitcoinUnlimitedWeb
npm install
npm run build
node index.js
```

To edit and test:
```bash
grunt build
nodejs index.js
```

See the nginx-site.conf file for an example configuration to proxy requests from port 80.

## Installing with npm

```bash
npm install bitcoin-unlimited-web --save
```

```javascript
var BitcoinUnlimitedWeb = require('bitcoin-unlimited-web');
```
