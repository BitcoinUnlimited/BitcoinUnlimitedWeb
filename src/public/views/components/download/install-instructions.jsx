'use strict';

const BASH0 = `tar xvf bitcoinUnlimited-1.0.1.4-linux64.tar.gz
cd bitcoinUnlimited-1.0.1/bin/
nohup ./bitcoin-qt &
`;

const BASH1 = `sudo apt-get install software-properties-common
sudo add-apt-repository ppa:bitcoin-unlimited/bu-ppa
sudo apt-get update
sudo apt-get install bitcoind bitcoin-qt
`;

const BASH2= `sudo apt-get install git build-essential libtool autotools-dev automake pkg-config
sudo apt-get install libssl-dev libevent-dev bsdmainutils libboost-all-dev
sudo apt-get install libqt4-dev libprotobuf-dev protobuf-compiler libqrencode #opt: only needed if you want bitcoin-qt
sudo apt-get install software-properties-common                               #opt: only needed if your wallet uses the old format
sudo add-apt-repository ppa:bitcoin-unlimited/bu-ppa                          #     this is not needed if your wallet will use the new
sudo apt-get update                                                           #     format, or if you're not going to use a wallet at all
sudo apt-get install libdb4.8-dev libdb4.8++-dev
mkdir -p ~/src
git clone https://github.com/BitcoinUnlimited/BitcoinUnlimited.git bu-src
cd bu-src
git checkout release
./autogen-sh
./configure
make
sudo make install
`;

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                    </div>
                </div>
                <div className='col-sm-8'>
                    <h2>{strings().instructions.title}</h2>
                    <div className='instructions'>
                        <div className='instructionsText'>
                            {strings().instructions.helpZero}
                            <br /><br />
                            <pre>{BASH0}</pre>
                            <br />
                            {strings().instructions.helpOne}
                            <br /><br />
                            <pre>{BASH1}</pre>
                            <br />
                            {strings().instructions.helpTwo}
                            <br /><br />
                            <pre>{BASH2}</pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
