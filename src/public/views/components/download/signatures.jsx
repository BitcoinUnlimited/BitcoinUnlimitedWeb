'use strict';

import React from 'react';

const CHECKSUMS = `
{
"program":"Bitcoin Unlimited",
"version":"0.11.2",
"files":{
"bitcoinUnlimited-0.11.2-linux64.tar.gz":"c6e83e5910d6b4ad852ac6d6a9ec6c92001a5070bb51d4292577174f22495355",
"bitcoinUnlimited-0.11.2-linux32.tar.gz":"698d2a2d2652c27aeb196b1c7a961676504f539fbcc81e0d2bd969e5685ac53e",
"bitcoinUnlimited-0.11.2-win32-setup.exe":"8c4cda095d175c4ab6232f52ce1e02a2225f97e3bdb87495641de2190cd5eb3b",
"bitcoinUnlimited-0.11.2-win64-setup.exe":"c275ac4c0b08995f991eab20ed0f37a08f992326559880c6b0df02cf995353e3",
"bitcoinUnlimited-0.11.2-win32.zip":"8267e1b3ee71a408e08c661462346235a7da44198cd6b6015937c72de6b6d838",
"bitcoinUnlimited-0.11.2-win64.zip":"287bac5fdd3e901551b7473f0973487871949a86abea483cf8ecf1fb83262e9d"
}
}
`;

const CHECKSUMS12 =  `
{ 'files': { 'bitcoin-0.12.0-win32-setup.exe': '53bbf742d20fdc8910bbd28ead523635cc39af27e3a24e30ef6912fb2eb50c90',
             'bitcoin-0.12.0-win64-setup.exe': 'b9e9d65df7a6545a1b041adf448d61681a71e36ae22be794a0e5e77c26351795',
             'bitcoinUnlimited-0.12.0-linux32.tar.gz': '1ae0ba1d4d53156bae5947e30236e925375011d9adbb5014445b8a0f50727477',
             'bitcoinUnlimited-0.12.0-linux64.tar.gz': '9162223cc60af26c359986614feacaa2eea161d399461bce324a61db73967dd4',
             'bitcoinUnlimited-0.12.0-osx.dmg': '4aaa1371c5b1f238458377cc8daf54717900ab0e4641cd863f85335ac2f2a66f',
             'bitcoinUnlimited-0.12.0-osx.tar.gz': '3d890b11f94402c8ffe560ac165d248cf7695fb04b22fdf7af7501097088672f',
             'bitcoinUnlimited-0.12.0-osx64.tar.gz': '1fa4372596346f0a22e043063b1bdd8886f2e62c58444cd1d34877e64171f8f4',
             'bitcoinUnlimited-0.12.0-win.tar.gz': '5c967878edbcec4b3f18c25bdd5e1bcd6faf3d9b8f876de26671166ea60fa112',
             'bitcoinUnlimited-0.12.0-win32.zip': '6e06d594ccb7bf4b68d9f8bba279cf3f1224a7971e65e15309286dff1b69278b',
             'bitcoinUnlimited-0.12.0-win64.zip': '97a45a0196b39ca5c29b47de5bf8b88d758d0707bf2d01d76d2a1cf3a41ddc89',
             'bitcoinUnlimited-0.12.0.tar.gz': 'ad8e7a8032845837926a17d6e66ba8f5634c99840c4e18626b931539c8a1c9c4'},
  'program': 'Bitcoin Unlimited',
  'version': '0.12.0'}

`;


export default React.createClass({

    render: function () {
        return (
            <div className='row service-wrapper-row'>
                <div className='col-sm-4'>
                    <div className='service-image'>
                    </div>
                </div>
                <div className='col-sm-8'>
                    <h2>Signatures</h2>
                    <div className='signatures'>
                        <div className='signatureText'>
                            These signatures attest that the individual named compiled Bitcoin Unlimited from Github source and produced the following files with the corresponding sha256 hashes.
                            <br /><br />
                            0.12.0 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS12}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature:<br />G75i+ydDAY9K/9go5tgac+SwTZi8mZZhj/0apZf1Gww5LsrWnLozR7e+MC0fMQqGfftVQ0nkrjNcnpVnJ6kXeHQ=
                            <br /><br />
                            0.11.2 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature: G75i+ydDAY9K/9go5tgac+SwTZi8mZZhj/0apZf1Gww5LsrWnLozR7e+MC0fMQqGfftVQ0nkrjNcnpVnJ6kXeHQ=
                            <br/><br/>
                            By: sickpig (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)
                            Signature: IG+bTcn/bbm2m0eXXTnJZOTWop3vQ+hi1G2q2ZBfB9BIa9+qFNr0WfuuFLi1Xng3VPP4meYnVMWkuXWs402BORc=
                            <br/><br/>
                            By: awemany (1BCnpopAZ4xFSxdX8NvVqUaSvsPffQhNRd)

                            Signature: IH1gTO8LfLt3ZiGef5GO2tgI87PgT7mLf8+JHwN8n4a5YswQgg7RqmgDYNAiCa3S2EtaWOjluJYwzIdfBB4/wx4=
                        </div>
                        <br /><br />
                        <div id='signatureHelp'>
                            To validate these signatures, use 'File->verify signatures' on any Satoshi Client.  Paste the signer's address into the first field, the signature statement into the second field, and the signature into the third one.  Note: do not change the whitespace of the signature statement.  Finally run 'sha256sum' on your downloaded file to make sure it matches.  You can check these signatures on the users' profile page on the <a href='http://www.bitco.in/forum'>bitco.in forum</a>.<br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
