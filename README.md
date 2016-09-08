# BitcoinUnlimitedWeb

The Bitcoin Unlimited website, hosted at https://bitcoinunlimited.info

## Developing

## Getting Started

This is a node.js project requiring the npm package manager.

The following will install the project and start the server, listening on port 8080.

```bash
git clone git@github.com:BitcoinUnlimited/BitcoinUnlimitedWeb.git
cd BitcoinUnlimitedWeb
npm install
npm run build
npm start
```

To test changes, execute the following after saving your changes:
```bash
npm run build
npm start
```

Open `http://localhost:8080` to view your website.

### Adding a page

To add a page to the website:

1. Create a react component such as `your-new-page.jsx` in the [`src/public/views/pages`](https://github.com/BitcoinUnlimited/BitcoinUnlimitedWeb/tree/master/src/public/views/pages) directory. See [`src/public/views/pages/index.jsx`](https://github.com/BitcoinUnlimited/BitcoinUnlimitedWeb/blob/master/src/public/views/pages/index.jsx) for an example.
2. Add your react component to the [react-router](https://github.com/reactjs/react-router) in [`src/public/views/main.jsx`](https://github.com/BitcoinUnlimited/BitcoinUnlimitedWeb/blob/master/src/public/views/main.jsx).

## Installing with npm

```bash
npm install bitcoin-unlimited-web --save
```

```javascript
var BitcoinUnlimitedWeb = require('bitcoin-unlimited-web');
```
