'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

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
{ 'files': { 'bitcoinUnlimited-1.0.0-arm32.tar.gz': '290fbf44536ef371b91bec03edac6cc5062a52ca766651cd24dfe5ee5e6fd8e0',
             'bitcoinUnlimited-1.0.0-arm64.tar.gz': 'a1937d01b51c4933abb87c117debb01a3acaf82c3ebfe1f69d2a6e4bc5d6ecde',
             'bitcoinUnlimited-1.0.0-linux32.tar.gz': '8d7aa35ae940cb821e062255e7b500f05514b6b8f88123b7217dd833a984fda9',
             'bitcoinUnlimited-1.0.0-linux64.tar.gz': 'cfedf1a4701cf05f8e8a9ff4da0f887bcb2b3bbdcd7631e9cfdeebb6dff01c72',
             'bitcoinUnlimited-1.0.0-osx.dmg': '9fc67a70ab7f71a03a12e83cd130564c1dc27c7c23bf3fffddc56390d516e0f2',
             'bitcoinUnlimited-1.0.0-osx.tar.gz': '7d33380d5ff381a101def1daa8e2963776e9080dd2bd2a0cd0f93d918b581cbf',
             'bitcoinUnlimited-1.0.0-osx64.tar.gz': '5e2ffcbd94913c5f361e29810453cbcbf3eb8c75869db6a9a6f39636a88bb3ad',
             'bitcoinUnlimited-1.0.0-win32-setup.exe': '26962eba5a63c6922a1f2f6176148264766e21897c9dbf0308e3d05e89e7c49e',
             'bitcoinUnlimited-1.0.0-win32.zip': '7e3bb027a80242860903a9f4a1e76f2d8e01ee5044a9fe221787172ae99505e9',
             'bitcoinUnlimited-1.0.0-win64-setup.exe': 'd2a097b971a5f0807908646430032513dd7a4bb5c004298eda7524da04b051b8',
             'bitcoinUnlimited-1.0.0-win64.zip': '0663097597abf62da115d34be7d0566de1c65c45886efb5ad04eb58c8bdc3e33'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.0.1'}
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
                            {strings().signatures.signatures}
                            <br /><br />
                        <div id='signatureHelp'>
                            {strings().signatures.helpOne}
                            {' '}
                            {strings().signatures.helpTwo}
                            {' '}
                            {strings().signatures.helpThree}
                            {' '}
                            {strings().signatures.helpFour}
                            {' '}
                            {strings().signatures.helpFive}
                            {' '}
                            <a href='http://www.bitco.in/forum'>{strings().signatures.forum}</a>.<br/>
                        </div>
                        <br /><br />
                            1.0.0.1 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS1_0_0}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />HPiROMF+hcj3u2ycJtchNDn42PxdzxySEwndVGUyHT1MUCeZf0D9aGOFPIf/M8wfW4WNTAx1qZxYDVkWoOaS3T8=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />IA8tteWpcp2H7JCuSNi/FVUQOtZATQsjjOKtVTsKsaJTJYWdf5T8zdlq6WwQh3dbw21Y2vhOqhxQaXVtj37O8xY=
                            <br/><br/>
                            {strings().signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            {strings().signatures.signature}:<br />IHdfgXUpRPKfp8tQ5bhhzAY1ICDO91drzc/u1SEt/seBUncPHe6rPNjkwpPsZMO04jKn/yfMfluRt4YMK8dgGSI=
                            <br/><br/>
                            0.12.1 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS0121b}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />G1W1Uq8QagCARx0eK895+5ZBQzwFqpQmRVOP+yPNDkCuAh8yC9BUxp59BtIP0ieHZvZBeHpvdkvepAC4YOkgwu4=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />H0YIZtMm92ntSh321FRIG6Js7TYDDTmTsXoRYwh48UilQzh5uadFz9VHsLqoHshr0wpULEWqeE1WyH6ME9FB+Ec=
                            <br/><br/>
                            0.12.0 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS12}</pre>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            <br/>
                            {strings().signatures.signature}:<br />HIoKBs2zqpn5yXpTlu1IQ6raPbHBmfyZLpDX8PG1xjXadtAHJbVv6MD8CXMcJddjOmDSLXRwCbI7W/JrY/fX/Wk=
                            <br /><br />
                            0.11.2 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS}</pre>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3)
                            <br/>
                            {strings().signatures.signature}: G75i+ydDAY9K/9go5tgac+SwTZi8mZZhj/0apZf1Gww5LsrWnLozR7e+MC0fMQqGfftVQ0nkrjNcnpVnJ6kXeHQ=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)
                            <br/>
                            {strings().signatures.signature}: IG+bTcn/bbm2m0eXXTnJZOTWop3vQ+hi1G2q2ZBfB9BIa9+qFNr0WfuuFLi1Xng3VPP4meYnVMWkuXWs402BORc=
                            <br/><br/>
                            {strings().signatures.awemany} (1BCnpopAZ4xFSxdX8NvVqUaSvsPffQhNRd)
                            <br/>
                            {strings().signatures.signature}: IH1gTO8LfLt3ZiGef5GO2tgI87PgT7mLf8+JHwN8n4a5YswQgg7RqmgDYNAiCa3S2EtaWOjluJYwzIdfBB4/wx4=
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});
