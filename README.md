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

This build targets NodeJS versions 6 and 8. Use `n` to switch between NodeJS versions. `npm install -g n`.

More info can be found at `https://www.npmjs.com/package/n`.

To automatically rebuild and restart the server upon changes to `src`, use both `npm run watch` and `npm run nodemon`.

Open `http://localhost:8080` to view your website.

## Development scripts

* `npm start`: Start the server
* `npm run bower`: Install the bower dependencies
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

## Using the administrator dashboard

Once installed, the administrative dashboard can be used to create blog posts, alert banners, manage other administrators and store backups of the current database snapshot.

A database revert feature is also available to choose between different database snapshot backups.

## Environment configuration

Make sure to update the following .env file:

```bash
JWT_SECRET=[yourSecretPassphrase] (required)
DB_NAME=[mainDatabaseName].realm (optional)
DB_AUTH_NAME=[authDatabaseName].realm (optional)
DB_ADMIN_PUBKEY=The pubkey(s) with super admin privileges. The super admin can add other pubkeys via the dashboard interface. Separate with commas.
AUTH_EXPIRE=[seconds] (JWT expiration time)
DEBUG=[true or TRUE] (sets the login challenge to 'hello, world')
```
