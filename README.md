# BitcoinUnlimitedWeb

The Bitcoin Unlimited website, hosted at https://bitcoinunlimited.info

## Developing

## Getting Started

This is a node.js project requiring the yarn package manager.

The following will install and build the project.

```bash
git clone git@github.com:BitcoinUnlimited/BitcoinUnlimitedWeb.git
cd BitcoinUnlimitedWeb
yarn install
yarn run build
```

Optionally install, build and start the local server with a single script.

```bash
yarn run setup
```

This build targets NodeJS versions 6 and 8. Use `n` and `npm` to switch between NodeJS versions. `npm install -g n`.

More info can be found at `https://www.npmjs.com/package/n`.

To automatically rebuild and restart the server upon changes to `src`, use both `yarn run watch` and `yarn run nodemon`.

Open `http://localhost:8080` to view your website.

## Development scripts

* `yarn setup`: Install, build and start the server.
* `yarn start`: Start the server
* `yarn run build`: Build the project into the `.dist` folder
* `yarn run watch`: Watch the `src` directory for changes, and rebuild when changed
* `yarn run nodemon`: Use nodemon to run the server and restart when `.dist` is changed

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

Once installed, the administrative dashboard can be used to create blog posts, override static alert banners, manage administrators and store backups of the current database snapshot.

A database revert feature is also available to choose between different database snapshot backups.

## Environment configuration

For security purposes update your version `.env` file:

```bash
JWT_SECRET=[yourSecretPassphrase] (required)
DB_NAME=[mainDatabaseName].realm (optional)
DB_AUTH_NAME=[authDatabaseName].realm (optional, but should be changed)
DB_ADMIN_PUBKEY=The pubkey(s) with super admin privileges. The "super" admin can add other pubkeys via the dashboard interface. Separate pubkeys with commas and exclude spaces.
AUTH_EXPIRE=[seconds] (JavaScript Web Token expiration time)
DEBUG=[true or TRUE] (sets the login challenge to 'hello, world')
```
