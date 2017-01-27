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
{ 'files': { 'bitcoin-0.12.0-win32-setup.exe': 'de9bdd45f9ec8c14b67da2a76cc2d319acb6a770eebb25c17179b4569246f617',
             'bitcoin-0.12.0-win64-setup.exe': '7ee11a05cde3cbf985700191caa6d3844e3e55dcc6cb031ae1cb10f5de3155ff',
             'bitcoinUnlimited-0.12.0-linux32.tar.gz': '03e377d707d9b9e68a93c4441ae9e8490761396dbe5c545faac94268f9b57563',
             'bitcoinUnlimited-0.12.0-linux64.tar.gz': '5831c3364fbb0dddf37b06303e2573850ba0116d57aee5710c96ee50f7499031',
             'bitcoinUnlimited-0.12.0-osx.dmg': 'cf5af542306d5c831357d61cb6537fb06d80d146899f03b4b37edad1bac1ad18',
             'bitcoinUnlimited-0.12.0-osx.tar.gz': 'bf0522a749762a592c9febc69772f7c5f03c91ec4663665cf147cc6c95b7d5f4',
             'bitcoinUnlimited-0.12.0-osx64.tar.gz': '8a826331edcc2419f605d41ad6f51e0fc4841699e9fa6bfaecc606102a5b3f7b',
             'bitcoinUnlimited-0.12.0-win.tar.gz': '31fc79dcf4fe2a1de4f2ac06f00b8b2feb00567f617c6fd805ceb96c0da31898',
             'bitcoinUnlimited-0.12.0-win32.zip': '0b03503626208ce69ed106f15b87181bb5c5b3ff2fcd971cc5dc3ab85e1cf40e',
             'bitcoinUnlimited-0.12.0-win64.zip': '113c6d8533e7b0efaebb1207764e88ccd811d313cc01503b33c45553f63374ed',
             'bitcoinUnlimited-0.12.0.tar.gz': '691f1b1f43b1571652b41c273bd2d034185f39d581b86d6b299f283b1b0bdd4f'},
  'program': 'Bitcoin Unlimited',
  'version': '0.12.0'}

`;

const CHECKSUMS0121b =  `
{ 'files': { 'bitcoinUnlimited-0.12.1-linux32.tar.gz': '984111483981bbfa5d33f40014336d74cbb263a51cb42a87e5d1871f88c14a7c',
             'bitcoinUnlimited-0.12.1-linux64.tar.gz': '34de171ac1b48b0780d68f3844c9fd2e8bfe6a7780b55e1f012067c2440ebd8a',
             'bitcoinUnlimited-0.12.1-osx.dmg': 'e40e1586edefd95e47c4db27116dcf0b5e286ea81d4243bd476db3128989bd4d',
             'bitcoinUnlimited-0.12.1-osx.tar.gz': '0b4f7f60a1b439632c31c60d781172d69be0b6bbc2dc5fc58caca77dc90da7fe',
             'bitcoinUnlimited-0.12.1-osx64.tar.gz': 'fceb0fb034e26124cd126954a3f968902d1ebe7758c9869f266aade9e9ff1885',
             'bitcoinUnlimited-0.12.1-win.tar.gz': '68b539df8a6ace5cf9c4ca22bb6b9106127d153b2de01e82356b98f323e313e0',
             'bitcoinUnlimited-0.12.1-win32-setup.exe': '0035006c411498a2c80046f2fb29615b838f045fac4f2c1af0ec0db1220ef8c2',
             'bitcoinUnlimited-0.12.1-win32.zip': 'd2185d4276321bfdc08f1f21a1eee6c51150737b5c69938ddb8cfef065e70d58',
             'bitcoinUnlimited-0.12.1-win64-setup.exe': '58189a3a07949f87998c7c255eda3e313a61b1ac24667d13ba771cff4a6612d4',
             'bitcoinUnlimited-0.12.1-win64.zip': '65a0668f0451b78921275d1a1ec301feb68b29daf603dbbce7da7ece4306bb17'},
  'program': 'Bitcoin Unlimited',
  'version': '0.12.1b'}
`;

const CHECKSUMS1_0_0 =  `
{ 'files': { 'bitcoinUnlimited-1.0.0-linux32.tar.gz': '80f07279e904d911641f2d3792810c609f5086a322a0d38d04a77c1c9c4f3fd0',
             'bitcoinUnlimited-1.0.0-linux64.tar.gz': '65b2061c7de35afa2f094f27aa48ef6c5a75a54ea0516948303a04c65ecbc2d5',
             'bitcoinUnlimited-1.0.0-osx.dmg': '201c4e7e57ed9377f23336bb35c04eb681559d13d4aceadf2eb26b01ac6992be',
             'bitcoinUnlimited-1.0.0-osx.tar.gz': '2b5c533c011614e99599d204018f2ab979c682ee48f413dc3581e404d97fbc94',
             'bitcoinUnlimited-1.0.0-osx64.tar.gz': '9e30784e4c15315cfe2a3f0e90a0e0f92ebb029af366addd27073df4541b7fdf',
             'bitcoinUnlimited-1.0.0-win32-setup.exe': 'c34c1d7f54b587bed3f628356f1cc49e2db5a9af6029ae318d69eeeffc7e0abb',
             'bitcoinUnlimited-1.0.0-win32.zip': 'a06348d7c60efbc313fcf2775cda5eae4a5d38e99fbb18dc58214bfff6ba6160',
             'bitcoinUnlimited-1.0.0-win64-setup.exe': '5de7f1dc8da05e9145acf6bb815474c1d71b6061d7d5591b82f79172c2267819',
             'bitcoinUnlimited-1.0.0-win64.zip': 'a21c0c92afd14f17887b2223307b5f25a3634e1cc7f1d987a9a0f2893a89a951',
             'bitcoinUnlimited-1.0.0-arm32.tar.gz':'6bb4489c74d0d295741e7c9f3cbd95dbfc54ae7ae29ca8badbc413f14fd587ef',
             'bitcoinUnlimited-1.0.0-arm64.tar.gz':'22b9cd90e79b8d8c98b5a546c401d8716c2a3949b17606e5678ce35dc245167e',
},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.0'}

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
                        <div id='signatureHelp'>
                            To validate these signatures, use 'File->verify signatures' on any Satoshi Client.  Paste the signer's address into the first field, the signature statement into the second field, and the signature into the third one.  Note: do not change the whitespace of the signature statement.  Finally run 'sha256sum' on your downloaded file to make sure it matches.  You can check these signatures on the users' profile page on the <a href='http://www.bitco.in/forum'>bitco.in forum</a>.<br/>
                        </div>
                        <br /><br />
                            1.0.0 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS1_0_0}</pre>
                            <br />
                            Do not add a final return character to the statement above when verifying the signatures in the Bitcoin client<br/>
                            <br />
                            Signing addresses are included here for convenience but should be verified from another source, such as bitco.in to ensure that an attacker does not change the address here.  (And please save these addresses locally for when you download the next version...)
                            <br />
                            By: Andrew Stone (theZerg) (address: 1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)<br/>
                            Signature:<br />HP/1xQab4vXE9DR3ssSALu9/FXZgbAmb4zkGlL41qt6zLhdbempdRVFFg/jIF35gfVEJZkof3EiPQdr3TSpbZrM=
                            <br/><br/>
                            By: Andrea Suisani (sickpig) (address: 1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            Signature:<br />ILsDPK42Zxn4zqksxYUTo+6vHmchdEsp7Rw/AFR/CcGzcQ1U1josi1Zq4TsjDA7HHD0Rn4TkPDQo08AFuVjbqko=
                            <br/><br/>
                            By: Amaury SECHET (deadalnix) (address: 1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            Signature:<br />H+zbZUA4tDdCHXENMvKsUAeDviI77RM28jpABKvaYqzBa5sWx2nb2cUpORFRklY1OAensLV02qdWkFieIccvs8w=
                            <br/><br/>
                           
                            0.12.1 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS0121b}</pre>
                            <br />
                            Do not add a final return character to the statement above when verifying the signature in the Bitcoin client<br/>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - verify address on bitco.in user thezerg)<br/>
                            Signature:<br />G1W1Uq8QagCARx0eK895+5ZBQzwFqpQmRVOP+yPNDkCuAh8yC9BUxp59BtIP0ieHZvZBeHpvdkvepAC4YOkgwu4=
                            <br/><br/>
                            By: sickpig (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            Signature:<br />H0YIZtMm92ntSh321FRIG6Js7TYDDTmTsXoRYwh48UilQzh5uadFz9VHsLqoHshr0wpULEWqeE1WyH6ME9FB+Ec=
                            <br/><br/>
                            0.12.0 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS12}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature:<br />HIoKBs2zqpn5yXpTlu1IQ6raPbHBmfyZLpDX8PG1xjXadtAHJbVv6MD8CXMcJddjOmDSLXRwCbI7W/JrY/fX/Wk=
                            <br /><br />
                            0.11.2 Signed Statement:<br /><br />
                            <pre>{CHECKSUMS}</pre>
                            <br />
                            By: Andrew Stone (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            Signature: G75i+ydDAY9K/9go5tgac+SwTZi8mZZhj/0apZf1Gww5LsrWnLozR7e+MC0fMQqGfftVQ0nkrjNcnpVnJ6kXeHQ=
                            <br/><br/><br/>
                            By: sickpig (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)
                            <br/>
                            Signature: IG+bTcn/bbm2m0eXXTnJZOTWop3vQ+hi1G2q2ZBfB9BIa9+qFNr0WfuuFLi1Xng3VPP4meYnVMWkuXWs402BORc=
                            <br/><br/>
                            By: awemany (1BCnpopAZ4xFSxdX8NvVqUaSvsPffQhNRd)

                            Signature: IH1gTO8LfLt3ZiGef5GO2tgI87PgT7mLf8+JHwN8n4a5YswQgg7RqmgDYNAiCa3S2EtaWOjluJYwzIdfBB4/wx4=
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
