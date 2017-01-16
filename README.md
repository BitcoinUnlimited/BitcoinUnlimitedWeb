# BitcoinUnlimitedWeb

The Bitcoin Unlimited website, hosted at https://bitcoinunlimited.info

## Developing

## Getting Started

This is a node.js project requiring the npm package manager.

The following will install and build the project.

```bash
git clone git@github.com:BitcoinUnlimited/BitcoinUnlimitedWeb.git
cd BitcoinUnlimitedWeb
npm install
npm run build
```

To automatically rebuild and restart the server upon changes to `src`, use both `npm run watch` and `npm run nodemon`.

Open `http://localhost:8080` to view your website.

## Development scripts

* `npm start`: Start the server
* `npm bower`: Install the bower dependencies
* `npm run build`: Build the project into the `.dist` folder
* `npm run watch`: Watch the `src` directory for changes, and rebuild when changed
* `npm run nodemon`: Use nodemon to run the server and restart when `.dist` is changed

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
