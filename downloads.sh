#!/bin/bash
# Setup BitcoinUnlimitedWebDownloads
echo "Setting up Bitcoin Unlimited web downloads..."
components=".dist/public/components/bitcoin-unlimited-web-downloads"
downloads="BitcoinUnlimitedWebDownloads"
repo="https://github.com/BitcoinUnlimited/BitcoinUnlimitedWebDownloads.git"
# Clone or pull latest from BitcoinUnlimitedWebDownloads
GIT_PULL_RES=""
if [ -e $downloads/.git ]
then
  cd $downloads
  GIT_PULL_RES=`git pull`
  cd ..
else
    git clone --depth 1 $repo
fi
# skip IO operation in case there's non binaries updates
if [ "$GIT_PULL_RES" != "Already up-to-date." ]
then
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
fi
