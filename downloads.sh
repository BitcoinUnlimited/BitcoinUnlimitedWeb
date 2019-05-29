#!/bin/bash
# Setup BitcoinUnlimitedWebDownloads
echo "Setting up Bitcoin Unlimited web downloads..."
components=".dist/public/components/bitcoin-unlimited-web-downloads"
downloads="BitcoinUnlimitedWebDownloads"
repo="https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads.git"
# Clone or pull latest from BitcoinUnlimitedWebDownloads
if [ -a $downloads/.git ]
then
    cd $downloads
    git pull
    cd ..
else
    git clone $repo
fi
# Clear existing web downloads and copy them to the components path
rm -rf $components
mkdir -p $components
cp -a $downloads/. $components/
