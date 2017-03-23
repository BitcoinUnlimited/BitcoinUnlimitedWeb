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

const CHECKSUMS1_0_0_1 =  `
{ 'files': { 'bitcoinUnlimited-1.0.0.1-arm32.tar.gz': '290fbf44536ef371b91bec03edac6cc5062a52ca766651cd24dfe5ee5e6fd8e0',
             'bitcoinUnlimited-1.0.0.1-arm64.tar.gz': 'a1937d01b51c4933abb87c117debb01a3acaf82c3ebfe1f69d2a6e4bc5d6ecde',
             'bitcoinUnlimited-1.0.0.1-linux32.tar.gz': '8d7aa35ae940cb821e062255e7b500f05514b6b8f88123b7217dd833a984fda9',
             'bitcoinUnlimited-1.0.0.1-linux64.tar.gz': 'cfedf1a4701cf05f8e8a9ff4da0f887bcb2b3bbdcd7631e9cfdeebb6dff01c72',
             'bitcoinUnlimited-1.0.0.1-osx.dmg': '9fc67a70ab7f71a03a12e83cd130564c1dc27c7c23bf3fffddc56390d516e0f2',
             'bitcoinUnlimited-1.0.0.1-osx.tar.gz': '7d33380d5ff381a101def1daa8e2963776e9080dd2bd2a0cd0f93d918b581cbf',
             'bitcoinUnlimited-1.0.0.1-osx64.tar.gz': '5e2ffcbd94913c5f361e29810453cbcbf3eb8c75869db6a9a6f39636a88bb3ad',
             'bitcoinUnlimited-1.0.0.1-win32-setup.exe': '26962eba5a63c6922a1f2f6176148264766e21897c9dbf0308e3d05e89e7c49e',
             'bitcoinUnlimited-1.0.0.1-win32.zip': '7e3bb027a80242860903a9f4a1e76f2d8e01ee5044a9fe221787172ae99505e9',
             'bitcoinUnlimited-1.0.0.1-win64-setup.exe': 'd2a097b971a5f0807908646430032513dd7a4bb5c004298eda7524da04b051b8',
             'bitcoinUnlimited-1.0.0.1-win64.zip': '0663097597abf62da115d34be7d0566de1c65c45886efb5ad04eb58c8bdc3e33'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.0.1'}
`;

const CHECKSUMS1_0_1_0 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1-arm32.tar.gz': '8edb4f12e7ad08378d7a45845e868344274e87ae420bba59fd78cb61a9db1895',
             'bitcoinUnlimited-1.0.1-arm64.tar.gz': '2f8e9b0b89031cf4360d36fe300ecbd81d59d7645d9b0f0e05d399d7beccd743',
             'bitcoinUnlimited-1.0.1-linux32.tar.gz': 'e5eb6ac6ad8ba3fb036f31f44bf30f2c47c1cc8c67d20e79033742305dd52b72',
             'bitcoinUnlimited-1.0.1-linux64.tar.gz': 'bb604081403eefa423fb2911bf6d99258d9db655ece8c3d557f32388c06a6207',
             'bitcoinUnlimited-1.0.1-osx.dmg': 'e6042821d78e1a775e10858b6755c1224c921570021583e595b21be90c6eff41',
             'bitcoinUnlimited-1.0.1-osx.tar.gz': 'c27883d1e890eddaf5f5e7a423be2dc9931733c80c2e9790300e94e395acd84e',
             'bitcoinUnlimited-1.0.1-osx64.tar.gz': '013441ac99d37749850119a33ef4dca99b3e2ef751cd19cce4a0453762604baa',
             'bitcoinUnlimited-1.0.1-win32-setup.exe': '6d1d8f76f2581a090986a54c5a5302b54e05653bbc2747a25aa6525d7066a2d3',
             'bitcoinUnlimited-1.0.1-win32.zip': '067fb2d2710108f9990b19a953fac841ce58ed281c8bab739fe291d1a9f5429c',
             'bitcoinUnlimited-1.0.1-win64-setup.exe': '16ae33163699dfac2b763377a8936b561ea18bee2f0d1d73f0f57cc04a8eb469',
             'bitcoinUnlimited-1.0.1-win64.zip': '0f742aab2e04aa31ec5c89388a62591cd24e97fe06779b77ecb017b5baa7ea92'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.0'}
`;

const CHECKSUMS1_0_1_1 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.1-arm32.tar.gz': '1b2c74742fc8fc9c2a80d35a5a3b7c544c845db3f54c283fcb0b75a5483c35bd',
             'bitcoinUnlimited-1.0.1.1-arm64.tar.gz': '7d2e9da7a6850a5de44aa4222613423684afa0a5a177a0fc92e3fba1d0efb517',
             'bitcoinUnlimited-1.0.1.1-linux32.tar.gz': 'dd3b37359600823add87edcd165ec2238e0578904170401b07c7f9b53f0d6bf0',
             'bitcoinUnlimited-1.0.1.1-linux64.tar.gz': '68439e21ff6806af2acb64b3d4b60ef9bb47d82ba68fce98752de6cc9d1f4502',
             'bitcoinUnlimited-1.0.1.1-osx.dmg': '47aa38b237d15112ea41e70341be3d2cbbc0edc431a2ddf2533bb34cbd359db9',
             'bitcoinUnlimited-1.0.1.1-osx.tar.gz': 'c663198315e45e7fca99c4f1a8466df42610c8b264d9136e74bfca8699427ccf',
             'bitcoinUnlimited-1.0.1.1-osx64.tar.gz': 'c4d59bdf596808a6205e8e538c5cf759d59119fe3e1986cdba828e2dc4cb8378',
             'bitcoinUnlimited-1.0.1.1-win32-setup.exe': '06ff0cf3ee73cf17236bc3b295ec92bf824135ebabdae2042778cbe34265d42e',
             'bitcoinUnlimited-1.0.1.1-win32.zip': '5abec76bff8f944f4e17c1f05e06f895ccac1ab968e352756ae8f93749e305b0',
             'bitcoinUnlimited-1.0.1.1-win64-setup.exe': '26ef474ca4dfcdfb547b865db49fe9de381d97be70bb0e7cd90e3915841a14e2',
             'bitcoinUnlimited-1.0.1.1-win64.zip': '0e71a7a0b6aa725cd1ebd9753376803e8e56eca0fa35c1a1fe86ed5e427f7a06'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.1'}
`;

const CHECKSUMS1_0_1_2 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.2-arm32.tar.gz': '5e7a9e60d4232c386370e14db1351f609fe0e5efb57393433f501ba665453673',
             'bitcoinUnlimited-1.0.1.2-arm64.tar.gz': 'df66bf78edcf743c3245cda5b88d128d82def1f1e24abd7d02d97bcd14ebab9e',
             'bitcoinUnlimited-1.0.1.2-linux32.tar.gz': '20e62907672f6d4622520bebf97b4673219e96390e8c05373eb92dbf2cbedd38',
             'bitcoinUnlimited-1.0.1.2-linux64.tar.gz': '5ea1740325b2ad6bcd2c6985d1716186d2f2da54b9d9ab7a9948afa06f15d030',
             'bitcoinUnlimited-1.0.1.2-osx.dmg': 'cc866bffaad75b2249b18c55554f85313626206b16799ed1a7a6863f7971d60d',
             'bitcoinUnlimited-1.0.1.2-osx.tar.gz': '6b3d3dde0f02567a9cffee457f1b41087de07bad3e9c7533c5cad723a1a9a059',
             'bitcoinUnlimited-1.0.1.2-osx64.tar.gz': '23f728945b031cdc4a3a287f22118be564295229f2cc9f65a59c8988f3667749',
             'bitcoinUnlimited-1.0.1.2-win32-setup.exe': '53537bcf85f08330781c1acb9ba5dfaef01cc4f21c972eb74c77f502afa11f0e',
             'bitcoinUnlimited-1.0.1.2-win32.zip': '5b244002a27b97b52c9b41f08599a2056b735613a28198de54ef2ec701a4695e',
             'bitcoinUnlimited-1.0.1.2-win64-setup.exe': '399f2da16d908855c3e4a1ad6403b975e841e0fe0b86524414f1a2e1a527ba2f',
             'bitcoinUnlimited-1.0.1.2-win64.zip': '736b9aef0b56494172cf0c984cdf81e492ff4e5def72a067da46f2b5a803704e'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.2'}
`;

const CHECKSUMS1_0_1_3 =  `
{ 'files': { 'bitcoinUnlimited-1.0.1.3-arm32.tar.gz': '5faab324ab50e6621b5cc2cf0b82d528e52075a9db401d5b3e4ea10a499ac0bd',
             'bitcoinUnlimited-1.0.1.3-arm64.tar.gz': '3d603431f3685a10eb2e55080e511024d2562be66de7d89092df8df4e52bb279',
             'bitcoinUnlimited-1.0.1.3-linux32.tar.gz': 'bb5088b8dfb2be930534f1b174279299eec090542fa62fd04fe05eb9d43f14ba',
             'bitcoinUnlimited-1.0.1.3-linux64.tar.gz': '864908c88d6b9d08c64e46b12acb5c1f8418b0737dfbeffdb8b1c03907892b02',
             'bitcoinUnlimited-1.0.1.3-osx.dmg': '7e19427a5931278a06cefdea972a674b676bbfeab2816993ab6b530889aeb536',
             'bitcoinUnlimited-1.0.1.3-osx.tar.gz': '94fd5d1bb878ecf3f0f50333e2625f1e6632de7506207f1b5b5dece148c69c73',
             'bitcoinUnlimited-1.0.1.3-osx64.tar.gz': '588224a2558f026b764ee8583fc3b0c359167357805bb350375d011282cff7d2',
             'bitcoinUnlimited-1.0.1.3-win32-setup.exe': 'a8db3159799309439f31e4c60faab0e2ac24819e918f7f3402cec76c0b009d68',
             'bitcoinUnlimited-1.0.1.3-win32.zip': 'e754fdd303cbceb955929e4a1b626d6251a767665c3cea9796426b0f406bdb36',
             'bitcoinUnlimited-1.0.1.3-win64-setup.exe': '2fd35bdb9bf50bc78a7cba2ee4890b07475737b2d6d46d22cc68dccae85b9a6e',
             'bitcoinUnlimited-1.0.1.3-win64.zip': '8e837b44ee71d9c7b6693320e5909cb5cd1f12580e7b828d359828bc8a06d4ee'},
  'program': 'Bitcoin Unlimited',
  'version': '1.0.1.3'}
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
                        <br />
                          <br />
                            1.0.1.3 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS1_0_1_3}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />HBy+OJ6JfRRw7w6r7VEfn9GiDN+ygZgf9rF/ZZWoY7LZPjeHffnyrlA5XN6FWRAhJ5gMpFz+S6F+icux1/POSMc=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />HyCsg5XRdH5/X5h7TuZNn5oqyhtP03rH1OO/Bb9RAhq6OxqozDGc9RISoHMOboD4LXktEZ6305cJiH81YJf2EzE=
                            <br/><br/>
                            {strings().signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            {strings().signatures.signature}:<br />IMiQROapmiXpURSuBzRRXvaKFGl3DDsD+ZqMRp7619X/TmLgejkkcxVQc92CUyLrXpOH6QXDc/SvLIz0GfNunG4=
                            <br/>                        
                          <br />
                            1.0.1.2 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS1_0_1_2}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />HDChbyQJwPuT/UR6swXC88e8De34aVSlOqx/KGjqYjveFehDtMMbE7nlh5kYHSJeatckCTG4tVRCLXe+IsduDRk=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />IIYVLF5kSeOpo6MI6Xy3d85+rXHskWdts+N9YEfAugGtUSDtoteU4FAseTFpveK1eNmZJhAyfDMCYC1zpJ5P6og=
                            <br/><br/>
                            {strings().signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            {strings().signatures.signature}:<br />H/Yx99GzjGz2eXpyttFYh5KR4DwbcXWJlVwubBZvhMERYq7DBH+6T3euvZSJ03P+F4G0HrcgjFvVDueGhSSjYe4=
                            <br/>
                          <br />
                            1.0.1.1 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS1_0_1_1}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />GwsAg+EvOxIYqHZfQfZXW+NLaVeHezl7CuNWIE1HqZr4D1SpvZAqzSNlMl4RFVprpCZqKfmV/y7FCDS93m5mBUM=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />H4KsTrAhlXbIXnuokxreCbQHy5LpUhQlauE5O8n8tSwCBZt66QIGDlLTy02URgD3ORWXbCFqbrr5HbQPtZbb7UU=
                            <br/><br/>
                            {strings().signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            {strings().signatures.signature}:<br />H2m8fPV6twB7wjL6umJ9zy8D/wSLolKJwEKzNs1ehcnGJtiTe1071AqPYyQerzTh7vozklr+X8xSZVySRB+DQ5c=
                            <br/>
                          <br/>

                          <br />
                            1.0.0.1 {strings().signatures.statement}:<br /><br />
                            <pre>{CHECKSUMS1_0_0_1}</pre>
                            <br />
                            {strings().signatures.tip}
                            <br/>
                            <br />
                            {strings().signatures.andrew} (1zerg12nRXZ41Pw4tfCTqgtdiJx6D1We3 - {strings().signatures.thezerg})
                            <br/>
                            {strings().signatures.signature}:<br />GwsAg+EvOxIYqHZfQfZXW+NLaVeHezl7CuNWIE1HqZr4D1SpvZAqzSNlMl4RFVprpCZqKfmV/y7FCDS93m5mBUM=
                            <br/><br/>
                            {strings().signatures.sickpig} (1LwvkQTWmotqTosgBcK8kFPCKzW2BPiE1G)<br/>
                            {strings().signatures.signature}:<br />H4KsTrAhlXbIXnuokxreCbQHy5LpUhQlauE5O8n8tSwCBZt66QIGDlLTy02URgD3ORWXbCFqbrr5HbQPtZbb7UU=
                            <br/><br/>
                            {strings().signatures.deadalnix} (1KEaWZ7tpLF4n5xFf5bpTPff7G7uJZiDGw)<br/>
                            {strings().signatures.signature}:<br />H2m8fPV6twB7wjL6umJ9zy8D/wSLolKJwEKzNs1ehcnGJtiTe1071AqPYyQerzTh7vozklr+X8xSZVySRB+DQ5c=
                            <br/>
                          <br/>
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
