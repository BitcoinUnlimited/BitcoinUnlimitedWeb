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
{
"program":"Bitcoin Unlimited",
"version":"0.12.0",
"files":{
"bitcoinUnlimited-0.12.0-linux64.tar.gz":"75ea1cbb7550ac0e04c4409ecca662a7218b1168a21f0b7ca8d16a7f8edf2a6a",
"bitcoinUnlimited-0.12.0-linux32.tar.gz":"c0c021a63f570526d6f302a4fdda34b97c63b564fb8792255baa26ddbc998818",
"bitcoinUnlimited-0.12.0-win32-setup.exe":"ddd15c7cb172f3a520f3e1a5975689ffd12e9e49d9cf8999530b171c969c0e47",
"bitcoinUnlimited-0.12.0-win64-setup.exe":"bdd3d7311aa29bfd3c45c7173d1cca7b1814be7ab5aae482c2de6d04c9aad63a",
"bitcoinUnlimited-0.12.0-win32.zip":"9d4205577a74f0a7b0714d137b62911baba183f64c3f59fdbf02ee1a25b0293d",
"bitcoinUnlimited-0.12.0-win64.zip":"1d21d0954dff822ab4d4ec4ffcf52949bc1d8f480f8848b98f3a69fde12a7e54"
}
}
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
                            0.11.2 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature: HDD31yl2RQ/2rX335hk156Lz5v+3vW3bbLNsjh8MDf4FPG3gFBeqXvdzyvFEkvJK7nSg3b1a3cE1Q2DBvudstYk=
                            <br/><br/>
                            By: sickpig (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)
                            Signature: IG+bTcn/bbm2m0eXXTnJZOTWop3vQ+hi1G2q2ZBfB9BIa9+qFNr0WfuuFLi1Xng3VPP4meYnVMWkuXWs402BORc=
                            <br/><br/>
                            By: awemany (1BCnpopAZ4xFSxdX8NvVqUaSvsPffQhNRd)

                            Signature: IH1gTO8LfLt3ZiGef5GO2tgI87PgT7mLf8+JHwN8n4a5YswQgg7RqmgDYNAiCa3S2EtaWOjluJYwzIdfBB4/wx4=
                            <br /><br />
                            0.12.0 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS12}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature:<br />G7vqXvTmXGZzI+h/D0xOjCcH50wbYA8/Rn2zVfNDlccUO56ZX4fbcPEtOt6Xd2QE5uu5LGljV9x5faICDoPtN6A=
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
