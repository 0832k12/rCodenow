// These will be replaced at build-time by generate-service-worker-plugin.js
const HTML_ASSETS = ["editor.html","index.html","fullscreen.html","addons.html"];
const LAZY_ASSETS = ["static/assets/c0c919779f63c0d93da228d599091567.svg","static/assets/1b40be6633fec134e36277988c4f8f9f.svg","static/assets/d4bd9e79fbbf466964d7d3bd4f332213.svg","static/assets/1dddb4d8057f7befe561ab361d052eaa.svg","static/assets/445f0fbce09a6929f51eb690fc9b5a1c.svg","static/assets/1667bada0f4c7d183f1206ca05f4f8e0.svg","static/assets/4947ae4ad434a610ee0e473bb902b4ff.svg","static/assets/598d98df2610e37760dcfa8ca411e82c.svg","static/assets/c3553e1328e4c9a5d69980c302e3d71e.svg","static/assets/ed959edcd8aa6c14a2c36b6f9b63e1f1.svg","static/assets/2e8ed4c351767c4049864395e8f7b521.svg","static/assets/270f59e49fdd5c72e748292118800f05.svg","static/assets/d7e36d4b72c290bd87993ed7f2fd48b8.svg","static/assets/482dc5011057fe26e9542e9476601bf2.png","static/assets/8e63473559f27006f09389a969508168.svg","static/assets/99350440a4ef41df6fd2b283ff14ea65.svg","static/assets/9cdf1c7a5683ecdcc0b972d6e2d13e65.svg","static/assets/2f3badb79b1152377be11fdd3e7f3bd6.svg","static/assets/7232f9ffa00b94b9c97cd285a9d61c84.svg","static/assets/f2ac219261ce957fc191cf81ca263be6.svg","static/assets/fddb7c38ec6f376edbec6b1b023ba10e.svg","static/assets/7464b3a281fd1b6f90cbd2c01dd068fe.svg","static/assets/691d93a973b4d6769f49c89ca46a910c.svg","static/assets/60cd7e90b6267c6ffa2eb6c95889d6d8.svg","static/assets/5871f96d7bfc69f80a15ba6c5bad22cf.svg","static/assets/2d9948d7fcafa04d3389d84c9609e2c1.svg","static/assets/5e5bc8f246e90124825ad772e97d392e.svg","static/assets/68a3edc2a524be9a4206be39f07cdb7f.svg","static/assets/d9e3c766ad755f88b408d519bcdbe6e7.svg","static/assets/46303d08e5dea81e8ab564bb277ac051.svg","static/assets/637ee68d612df10e76850c9ef23f3ffb.svg","static/assets/249eb53fdf0ad465d99c53e5bf34548e.svg","static/assets/33a2343bccd1df569c6a2af3923ec929.svg","static/assets/e73606948ba1537e5f21d6d629639fa1.svg","static/assets/ef7ef15b55db7f0c69bc458b02c6210b.svg","static/assets/b9c7e612f7a58801bd0b15c2475a3272.svg","static/assets/d09eb3f3c0063ecbe4b251cb48d6b586.svg","static/assets/59b61cc1ff63568909a882c4917d0611.svg","static/assets/6ed06bcd245a4f92492d3f28dc8ed74b.svg","static/assets/3eb3febe52a8993e3f2f403fb350109d.svg","static/assets/967be07eee8086c5ea36fb516d62a578.svg","static/assets/c7bc2c28031bcb9637b47a400462a54d.svg","static/assets/b5bee913d7bc47e43525e7694f4ca7e1.svg","static/assets/538e0b13fa86966f97218948d4c78030.svg","static/assets/5e3a8778826807a995d185e69a920075.svg","static/assets/74ceb8d372bff6828a8f78b259856972.svg","static/assets/c20b57ddd59910c969cf00e1c30f00f8.svg","static/assets/a5de91fbb71921ccc5f060ba64be41ed.svg","static/assets/58faa698e8693b66e1e69bc9317e924e.svg","static/assets/90eaf6469dbf3a808a3d9739cc77358d.mp3","static/assets/4240a79d13ecf2792f825457194c96d9.mp3","static/assets/9ad12a9de73f49fb645902987027eb2b.mp3","static/assets/2b7b80de8884cc3cf584aa0deb86a59b.mp3","static/assets/5c6533a34175f61a9cab627f671111e1.mp3","static/assets/5888c4ba6b8a0767f8be5bbc81994397.mp3","static/assets/fad59dd220562492e6722aa8a97f9369.mp3","static/assets/51a75dd50afd0bc6022dfc86455be19c.mp3","static/assets/9f8e3a1db63c7a8fd976beca7e3546c3.mp3","static/assets/b6a8e4a96ffcd83154ad2c5cbcb52751.mp3","static/assets/1c9630b745711a0b829841e8555d76e4.mp3","static/assets/f8d8b9d9f1aa45900b786980418219b1.mp3","static/assets/83f2d48d0c7d1e6be8a509d4d2c6d0e5.mp3","static/assets/b700cf6f9c368ce49851d287ddd3b63c.mp3","static/assets/3fbd690bdae84637e34b8b933a164e3d.mp3","static/assets/a7c08a472cc8b1c4e0c45ae9b030b414.mp3","static/assets/f28b1ecd6fccd6218a837c14b1109da7.mp3","static/assets/f9868658d8483a6dbcd600e0226dfeef.mp3","static/assets/10af80546707afae5507edb828dd35a0.mp3","static/assets/7a7fdb40997804d4778e2a12bd7599f7.mp3","static/assets/a61fc8393abec3c0d1e813fc01f252ee.mp3","static/assets/a0b130dbafdc7958b73d162239053173.mp3","static/assets/d72b98474fc83d6268886779339e242e.mp3","static/assets/d4b3ce804680eb7d58f6accc7436e807.mp3","static/assets/129b99ac19024c35228d855f42fb852b.mp3","static/assets/8c0c02f16572b730d422f96a3ce53e7f.mp3","static/assets/00d2dff9d5ece15a67074374b2027590.mp3","static/assets/09995475180591a6c64c8744fbfdf4d8.mp3","static/assets/961bfad11616b6f5c951c58499cf267a.mp3","static/assets/2b0cfb89b2c8d1badb03136fcf911c3b.mp3","static/assets/c44ce3bfa465281e765f197d6c3ee7ea.mp3","static/assets/e6180253665b8248f685c6d96881f75b.mp3","static/assets/b52b83f63e8482255d46f40ea454fa01.mp3","static/assets/1e7ed7b14b056ebd80f434143846fb4e.mp3","static/assets/c36dd943607003a3229aca77b49d32de.mp3","static/assets/f382f43d667b784d1bcd8cfe7aa6fff0.mp3","static/assets/5e0704b815761d38242f1b961ce9ef69.mp3","static/assets/1a87a73db1ba0193283680e37b35754e.mp3","static/assets/fc383956e315b7ee2bd8dd09de311701.mp3","static/assets/0b18f02669375ad2ee80bef8d07ea7ec.mp3","static/assets/1980303ffc6f5c17c601a9e5992aea77.mp3","static/assets/57f0f65052d9dac78ee66b11cc696b6a.mp3","static/assets/da1a6ebcd442e9d867b31fb21ce6a289.mp3","static/assets/bacc13779ca01580b89f39dd2118c22a.mp3","static/assets/0dcd27b60c185811b19f59d56eaa12f6.mp3","static/assets/1a064f9a752824e781ccf79ab66850ed.mp3","static/assets/a05bbf6359407ad7950e115edab178d9.mp3","static/assets/da3126c6a70c4ef84192c33f99996354.mp3","static/assets/103fe904046c35630c600cb122492d78.mp3","static/assets/8ca9997e9ed7534a8d0f349a6125bd24.mp3","static/assets/83857346b7c2e6a351c69377e82a3606.mp3","static/assets/ecb1cbda3b9c4f29ab971734d97e3faf.mp3","static/assets/0043f23189fb3cbf2021a88959961ece.mp3","static/assets/78a74345ee778afbd6abe637b4f69efc.mp3","static/assets/d434438e5d193118e4aad3a846e1c7ba.mp3","static/assets/39563f3b38b1fdb805323b1f69dace54.mp3","static/assets/0e8ed599d9875c77d52db36de2b2b33f.mp3","static/assets/7337f194b0a727f4be98902487dfb615.mp3","static/assets/ed2a96fbdb476efe419246982e357121.mp3","static/assets/7c5a16e0627c64fd62ec597bb72b879d.mp3","static/assets/e27f7cdf42df8b768345ae83fecffe4b.mp3","static/assets/318e019bdee5ed02903aa5f22a9903f2.svg","static/assets/e1249124e702a974df36355af6aa2385.svg","static/assets/9d7acb2e5784a9a1d52e564af3d8469b.svg","static/assets/bd6d382729ecbd23c5181cf2b327072f.svg","static/assets/e008ee0cb1202de1137823150da1644a.svg","static/assets/c088896fb05dc466b45ecaa1d5c4d007.svg","static/assets/ab2c140af0ffba6b515eebc2156742e2.svg","static/assets/7601fa61034e5d7d542538e1e4338a4e.svg","static/assets/7b98085c05bdcd97dd0c6d4b34317793.svg","static/assets/4bfaa15915bc5fb88b40b3e1a537c3ea.svg","static/assets/60fb267c5ab0c6f4ed9ab4a891ca7dd5.svg","static/assets/8a30520407ffdf5b0e7e06e490db9c1d.svg","static/assets/76b6cb627b95d79705c0b41664064f0e.svg","static/assets/c846a442121113b1d04f6b9d50912038.svg","static/assets/0e009d6e684951615b31a267baa37636.svg","static/assets/88a77444f0bb453209bf1c62becbd37c.svg","static/assets/1821649bb254ff5d93bb397ad646a23f.svg","static/assets/b2c44c738c9cbc1a99cd6edfd0c2b85b.svg","static/assets/e21225ab4b675bc61eed30cfb510c288.svg","static/assets/3547fa1f2678a483a19f46852f36b426.svg","static/assets/969aaca3d7c0ff67b664b24c2652fb12.svg","static/assets/70f8bee49a78f131d8dc87658809a684.svg","static/assets/e997e36ade408c75ef4424b928e10846.svg","static/assets/7c9434c4f1f44e3d198db3bc77305fff.svg","static/assets/6f52bcc0310181641bac6fec51c69e13.svg","static/assets/b987c9e2c37b17bd7c97f1fa47257d7e.svg","static/assets/6fb602003b4d9e845e84f77129346396.svg","static/assets/1640b6d968e0a0e13bc3c309a616deaa.svg","static/assets/385aa4b73a425883b4f9e91501a52299.svg","static/assets/e587d9d7e9a2f1f28041ba5c15db7a40.svg","static/assets/94b06fb716871f81bec601724e29a457.svg","static/assets/551aae506dfa65ce3b45713b5300a678.svg","static/assets/497f797eeffe5fa7e6a626abc0db08a1.svg","static/assets/301439e2e5ab88b658368ee525e6752b.svg","static/assets/44e4859e354c81d66c73f741df2e5ec7.svg","static/assets/c9528ee4be1a12380a6c9caf73bd99e9.svg","static/assets/9cfdd378e4cc977fe663ca932e530ec6.svg","static/assets/35c6867250ec4f430624bc9e2e7072d7.svg","static/assets/53ef96392ac2a92361884783808a02c9.svg","static/assets/63e5827c1506216bd7c9927a4e5eb558.svg","static/assets/b8f0b40efdf6eafc02c3f894a5941818.svg","static/assets/89a5687599f173f2b910aa5fcd862b42.svg","static/assets/a3e689235188ba10c5cfd75730cb88a7.svg","static/assets/04e28ba12fe914cf4f131dcb85ae82d6.svg","static/assets/a80790c977586cc0595b5fe2f0bcb39a.svg","static/assets/33592a76d0d0fdaa4a32b2ea41db5e16.svg","static/assets/76121b7f4eff7d7ca0d49a45479d3f3f.svg","static/assets/ee54d776d2cda9a3c537ac7e8f144037.svg","static/assets/cb666b99d3528f91b52f985dfb102afa.svg","static/assets/97926439955086f8ee4aabbd81580f17.png","static/assets/3e83d9d800459175308f0b45b117af16.png","static/assets/42157e6edddc19588c3c2ff188703799.svg","static/assets/0fd9fd69a38ab79358df5a77b29702c8.svg","static/assets/8b8f2d052b4092ec47ad66c30c8b1642.svg","static/assets/4b6100c9f591be6470cdfd4697de0b54.svg","static/assets/71655cde34ae75f48cb8820abf4b31e7.svg","static/assets/05e05756b592740a3670417b4df19ca9.svg","static/assets/572a212c2e777e3a9061c97453497009.png","static/assets/dd98971c2c185caf86144b6b5234d0fa.svg","static/assets/10811a978de201353d564df7ba1ddb58.svg","static/assets/8beb9da10f72d02b48baf0b24ac72449.svg","static/assets/2a70b21aaaed0619bdfcdec91db1ebe8.svg","static/assets/a5787bb7364d8131ed49a8f53037d7f4.svg","static/assets/143a9041098d0e0724ed22c89e6558cc.svg","static/assets/9cc1e7a12b63848899055ddc982ab2ce.svg","static/assets/8ea23814ef4f6dc9f86859a028377a3a.svg","static/assets/57593d3aac258d2c0abf75a0b8ecbdaa.svg","static/assets/0dd03e5061d2865c0e8ac50cc75e9982.svg","static/assets/5e460dab4dfda0fe34f93d3faf95b778.svg","static/assets/c8481ea8e104d4d2bb6b340e0c90da26.svg","static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg","static/assets/5f85a3e5a04dd3de4271589dac82d45b.svg","static/assets/afc646fe671f2f43cf0deb3f2247b8bf.svg","static/assets/5f4208a6b7257c456c018d57efc8a7e9.svg","static/assets/2ede3b1977411d39f0cc8ba0a973e25c.svg","static/assets/1319094a51748798730f01d1dc0972ac.svg","static/assets/dfe35552790fb5ff38c78a43f5e62f30.svg","static/assets/1bb0adb555e07593962e9fc28ec7566d.svg","static/assets/582b9f12ce60392a8ef736c5dfabb4ce.svg","static/assets/7bd7487b704797cb5ab3cb441486ea70.svg","static/assets/ce5820b006d753e4133f46ae776f4d96.svg","static/assets/f9dce53613d5f85b311ce9f84423c08b.svg","static/assets/bbbd98ae6a34eac772e34a57aaa5f977.svg","static/assets/664d94e5cb8676c780c74c695f2e972c.svg","static/assets/5dbf111a76a93a93613ec81c16dfc6d3.svg","static/assets/e764d9d9a7a12892e0845b11cd4202df.png","static/assets/52797b48d511ecdd8e938684cee7638e.png","static/assets/f8ff5dbef05bc3337cd3660fb956cffa.svg","static/assets/2f9cda00a530ac237fc24063067377c3.svg","static/assets/8bcd9c00e30a0af9d832735651fd9643.svg","static/assets/74546102be38f592d24b4330a16a8639.svg","static/assets/90e939d170002c61a50116ed55763b19.svg","static/assets/4da38973d5ffd15c54e80894d430288c.svg","static/assets/df6a71244d4727d19c5a78d71677d2a6.svg","static/assets/a4d91e3b83e7cbccaf4a4e2322b873f5.svg","static/assets/27f90bfa982840e56c3ad207561193fa.svg","static/assets/21988681fa28c8ce37982ca26463a6f5.svg","static/assets/d889a872f3b0985b28fa872764172ef1.svg","static/assets/26255153f92ea41df149a58d3c3fe2cf.svg","static/assets/993a0700d8a0972d309307b0a4688ed7.svg","static/assets/f0f9f818bc9fff5dc6f30f34cb1cc156.svg","static/assets/516274ebe91f61197ef4c62d1dc2024a.svg","static/assets/193be3815628fb3d90d4d636a0e97f3a.svg","static/assets/fb3f9fa9be421f5153cd0223c3b0cb87.svg","static/assets/42428924171999cebe3efd5e70b7bc53.svg","static/assets/f22d5ea0ef6a46b2a4a174fed722c396.svg","static/assets/8279ce395d0333b880b8be6d243fd111.svg","static/assets/5306d1506a03db52b6f918de4c809ca7.svg","static/assets/b5257afbe4bcf7953029ddb8f18b24fe.svg","static/assets/f231056019ffe328e58432393f6102c5.svg","static/assets/fe5afd6776eac0f7724b132a9ff5057d.svg","static/assets/199f58b4a80fa56c5d8e032d6da5e9c2.svg","static/assets/424371873bc8df88d6a305d8727157ab.svg","static/assets/481fbac64b59203d7ddffa564a7537d8.svg","static/assets/82605c2ddff77109d8fafc0e4cf997ed.svg","static/assets/e214dc66bba3d014deaa931a2be33f53.svg","static/assets/c80022cd3424a0dc9635de89433cf08e.svg","static/assets/38a70367a21e2f1fb15aa59b7d367450.svg","static/assets/9ddae4f6c1aeaf0784007203d9d4ac9c.svg","static/assets/a138d86b3fb820d3f81697f49b05441c.svg","static/assets/af243440c987b9713fb7d8dfc5230ba4.svg","static/assets/05e9c069d478b9e056e35f04e7dedf64.svg","static/assets/ccab7b68206b18fededc5a978f2e973a.svg","static/assets/613108ec34b05c9b66730c959f1f91f4.svg","static/assets/36fcc7dbca20720abcab01e49d4955f9.svg","static/assets/fb356e819d8ab210a241ce81b9bac33c.png","static/assets/f2457825850317e66ef2128504613c30.svg","static/assets/33b737193edfe1730f38112ad35a84b4.svg","static/assets/620f707d6d9dcd512ec6604b0eda2cb3.svg","static/assets/c4c75827d7f30081f493963fadec60a1.svg","static/assets/171fbf8ebb9d7127d4c59a04568e2af4.svg","static/assets/905aaa5ec7fca7cf364f5e74bcb10be1.png","static/assets/aaa4a3575852fe11d04f44c4a972ae73.svg","static/assets/bc45b073cd2fc0c2265374bdb4e05d67.svg","static/assets/b433ee02a13fa2a12f7f7059f1f6729a.svg","static/assets/d92e74438d72c2223692825df66e026e.svg","static/assets/73773f78bf2bfc449218fbaee1922964.svg","static/assets/3d9e2585d6ed12b9fb994438e0c4c42a.svg","static/assets/bf3ee9d7d91a231cde773f88f6799425.png","static/assets/d8ab603698994c2d739011d89354b542.svg","static/assets/8e5e28b23ba596614a60d319d9c64165.svg","static/assets/3286e2838658ebdb82f62d062b14e951.svg","static/assets/6608d56b3dce2738b2b137569d305d3b.png","static/assets/f670ae90c48a23b1d52faa968337d08f.svg","static/assets/d7029d96cccb42cb374617612bc13b0e.svg","static/assets/fa121178a0dc748c56257f39987f0540.svg","static/assets/f09d35c985867eab306d7c2534159922.svg","static/assets/7cb8e495a3b344d45a731a6658e86b4a.svg","static/assets/8c740b2e4a378e6bebe07b52b51a4279.svg","static/assets/7af71563a3a6a2514ac02b57953c9f6e.svg","static/assets/6abfc69297c971a680a43caaf436533c.svg","static/assets/0dd70c7812cf6035b6ca348f4bb583b1.svg","static/assets/60fc7acc624571cfa9d250d7d5cff041.svg","static/assets/7b6399d516d5921bb199f57cdd8bbbbe.svg","static/assets/5a70df361bb00fa62b9338d89c92f377.png","static/assets/471d856b38b693d87162b39e48318135.png","static/assets/d61429ad96a25ec2917ebc77d900aae0.svg","static/assets/c30d6a0e73cf38ad6ea7f5e4fe0428a3.png","static/assets/84a9455c54ab68ad8dcf8b6f6465ae71.svg","static/assets/6be143c7cb9d23c787f7f20674a76f72.svg","static/assets/4b6ca5259f1271d510f081867e746847.png","static/assets/504d73be1b361b4b9ca7f655ce085dc6.svg","static/assets/7eea42371f5ccb84b4fc7d0ba7331ea3.png","static/assets/800f6f1573677d59954e8d3164602287.svg","static/assets/7679e8aa3b5a6b745823e00a7b950065.png","static/assets/3974f581a413918ddf63e846483a9f9f.svg","static/assets/09289f1b458a2874099e5e42ec5a69c3.svg","static/assets/c7ffd288176b935f835311512a224d4b.svg","static/assets/d6f130fb79e78e4dd351fd930e742bcc.png","static/assets/f40501ed87782097b1a4eec8747eb84a.png","static/assets/b6162ffbfe48d4b6c67f0b469f1615ae.png","static/assets/8631e81b32644527d0d056b213faddc8.svg","static/assets/5e8eccd5a576638f029a1ed2deb4784b.svg","static/assets/a03436c2c26c934fc0a7997065971874.png","static/assets/7130491bf33852e50503dcb4024c0279.svg","static/assets/5f7a79af3db62e0f5b7306ac0bd5ebf9.svg","static/assets/0f9efe3bd6e80747dfa3aeb9e19997b5.svg","static/assets/f011f09e649e804c4c0c8275a7d1ba5b.png","static/assets/87a3a62c0627e925b92d3ede2f62b04f.ttf","static/assets/eb64e706eb7a3b324ba50d3279a980b1.ttf","static/assets/3682b35e452a7f4a5a61167d1632e24a.ttf","static/assets/9ec3449723269a806ec6eaba0f8f6cef.ttf","static/assets/bbc0dd79717bfa338a199bb26cdd780b.ttf","static/assets/8996930d8e83f63cc3341172205df460.otf","static/assets/64bcfe1f13fce38e2ea26280157ff2ce.ttf","js/addon-default-entry.js","js/addon-entry-2d-color-picker.js","js/addon-entry-better-img-uploads.js","js/addon-entry-block-count.js","js/addon-entry-block-palette-icons.js","js/addon-entry-blocks2image.js","js/addon-entry-cat-blocks.js","js/addon-entry-clones.js","js/addon-entry-columns.js","js/addon-entry-custom-block-shape.js","js/addon-entry-custom-block-text.js","js/addon-entry-custom-zoom.js","js/addon-entry-data-category-tweaks-v2.js","js/addon-entry-debugger.js","js/addon-entry-default-costume-editor-color.js","js/addon-entry-disable-paste-offset.js","js/addon-entry-disable-stage-drag-select.js","js/addon-entry-editor-buttons-reverse-order.js","js/addon-entry-editor-colored-context-menus.js","js/addon-entry-editor-extra-keys.js","js/addon-entry-editor-sounds.js","js/addon-entry-editor-stage-left.js","js/addon-entry-editor-stepping.js","js/addon-entry-editor-theme3.js","js/addon-entry-fullscreen.js","js/addon-entry-gamepad.js","js/addon-entry-hide-delete-button.js","js/addon-entry-hide-flyout.js","js/addon-entry-hide-new-variables.js","js/addon-entry-hide-stage.js","js/addon-entry-initialise-sprite-position.js","js/addon-entry-load-extensions.js","js/addon-entry-mediarecorder.js","js/addon-entry-mouse-pos.js","js/addon-entry-no-script-bumping.js","js/addon-entry-number-pad.js","js/addon-entry-paint-by-default.js","js/addon-entry-paint-snap.js","js/addon-entry-remove-curved-stage-border.js","js/addon-entry-remove-sprite-confirm.js","js/addon-entry-script-snap.js","js/addon-entry-search-sprites.js","js/addon-entry-sprite-properties.js","js/addon-entry-swap-local-global.js","js/addon-entry-transparent-orphans.js","js/addon-entry-tw-disable-cloud-variables.js","js/addon-entry-tw-disable-compiler.js","js/addon-entry-tw-remove-backpack.js","js/addon-entry-tw-remove-feedback.js","js/addon-entry-tw-straighten-comments.js","js/addon-entry-variable-manager.js","js/addon-entry-vol-slider.js","js/addon-entry-zebra-striping.js","js/addon-l10n-de.js","js/addon-l10n-es.js","js/addon-l10n-fr.js","js/addon-l10n-hu.js","js/addon-l10n-it.js","js/addon-l10n-ja.js","js/addon-l10n-ko.js","js/addon-l10n-nl.js","js/addon-l10n-pl.js","js/addon-l10n-pt.js","js/addon-l10n-ro.js","js/addon-l10n-ru.js","js/addon-l10n-sl.js","js/addon-l10n-tr.js","js/addon-l10n-zh.js","js/addon-l10n-zh-tw.js","js/addon-settings.js","js/addon-settings~addons~editor~fullscreen~player.js","js/addons.js","js/editor.js","js/editor~embed~fullscreen~player.js","js/fullscreen.js","js/player.js","js/sb.js","js/vendors~addon-settings~credits~editor~embed~fullscreen~player.js","js/vendors~editor~embed~fullscreen~player.js","static/blocks-media/click.mp3","static/blocks-media/click.ogg","static/blocks-media/click.wav","static/blocks-media/comment-arrow-down.svg","static/blocks-media/comment-arrow-up.svg","static/blocks-media/delete-x.svg","static/blocks-media/delete.mp3","static/blocks-media/delete.ogg","static/blocks-media/delete.wav","static/blocks-media/dropdown-arrow-dark.svg","static/blocks-media/dropdown-arrow.svg","static/blocks-media/eyedropper.svg","static/blocks-media/green-flag.svg","static/blocks-media/handclosed.cur","static/blocks-media/handdelete.cur","static/blocks-media/handopen.cur","static/blocks-media/repeat.svg","static/blocks-media/rotate-left.svg","static/blocks-media/rotate-right.svg","static/blocks-media/sprites.png","static/blocks-media/status-not-ready.svg","static/blocks-media/status-ready.svg","static/blocks-media/zoom-in.svg","static/blocks-media/zoom-out.svg","static/blocks-media/zoom-reset.svg","static/blocks-media/extensions/music-block-icon.svg","static/blocks-media/extensions/pen-block-icon.svg","static/blocks-media/icons/arrow.svg","static/blocks-media/icons/arrow_button.svg","static/blocks-media/icons/control_forever.svg","static/blocks-media/icons/control_repeat.svg","static/blocks-media/icons/control_stop.svg","static/blocks-media/icons/control_wait.svg","static/blocks-media/icons/remove.svg"];
const LAZY_ASSETS_NAME = "tw-lazy-bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f";

const knownCaches = [
    LAZY_ASSETS_NAME
];
const base = location.pathname.substr(0, location.pathname.indexOf('sw.js'));

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(caches.open(LAZY_ASSETS_NAME).then(cache => cache.addAll(HTML_ASSETS)));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(i => !knownCaches.includes(i)).map(i => caches.delete(i))))
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.origin !== location.origin) return;
    if (event.request.method !== 'GET') return;

    let relativePathname = url.pathname.substr(base.length);
    if (/^(\d+\/?)?$/.test(relativePathname)) {
        relativePathname = 'index.html';
    } else if (/^(\d+\/)?editor\/?$/i.test(relativePathname)) {
        relativePathname = 'editor.html';
    } else if (/^(\d+\/)?fullscreen\/?$/i.test(relativePathname)) {
        relativePathname = 'fullscreen.html';
    } else if (/^addons\/?$/i.test(relativePathname)) {
        relativePathname = 'addons.html';
    }

    if (HTML_ASSETS.includes(relativePathname)) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(new Request(relativePathname)))
        );
    } else if (LAZY_ASSETS.includes(relativePathname)) {
        event.respondWith(
            caches.open(LAZY_ASSETS_NAME).then(cache => cache.match(new Request(relativePathname)).then(response => (
                response || fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                })
            )))
        );
    }
});
