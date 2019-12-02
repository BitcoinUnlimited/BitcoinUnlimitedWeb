#!/bin/bash
# Setup BitcoinUnlimitedWebDownloads
echo "Setting up Bitcoin Unlimited web downloads..."
components=".dist/public/components/bitcoin-unlimited-web-downloads"
downloads="BitcoinUnlimitedWebDownloads"
repo="https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads.git"
# Clone or pull latest from BitcoinUnlimitedWebDownloads
if [ -e $downloads/.git ]
then
    cd $downloads
    git pull
    cd ..
else
    git clone --depth 1 $repo
fi
# Clear existing web downloads and copy them to the components path
if [ -f /usr/bin/rsync ]
then
  mkdir -p $components
  rsync -a --delete --exclude=.git $downloads/. $components/
else
  rm -rf $components
  mkdir -p $components
  cp -a $downloads/. $components/
  rm -rf $components/.git
fi
