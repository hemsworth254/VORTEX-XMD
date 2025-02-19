function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "stablediffussion",
  'alias': ['sd', "imagine2"],
  'react': '🎉',
  'desc': "Generate an image using AI api.",
  'category': "fun",
  'filename': __filename
}, async (_0x36af40, _0x3d61ee, _0x1d2b7b, {
  from: _0xea2597,
  quoted: _0x48293c,
  body: _0x46d832,
  isCmd: _0x38d313,
  command: _0x41bd67,
  args: _0x555589,
  q: _0x338d29,
  isGroup: _0x146911,
  sender: _0x909cea,
  senderNumber: _0x1a80ee,
  botNumber2: _0x39e539,
  botNumber: _0xc69267,
  pushname: _0x5f1aec,
  isMe: _0x30c779,
  isOwner: _0x263a74,
  groupMetadata: _0x3b17f8,
  groupName: _0x41a12c,
  participants: _0x47f706,
  groupAdmins: _0x19e440,
  isBotAdmins: _0x33aae4,
  isAdmins: _0x45997f,
  reply: _0x1dd9a7
}) => {
  try {
    if (!_0x338d29) {
      return _0x1dd9a7("Please provide a prompt for the image.");
    }
    await _0x1dd9a7("Vᴏʀᴛᴇx Diffussing Your image...");
    let _0x19e0c0 = await fetchJson("https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=" + _0x338d29);
    const _0x217b9b = _0x19e0c0.result;
    await _0x36af40.sendMessage(_0x1d2b7b.chat, {
      'image': {
        'url': _0x217b9b
      }
    });
  } catch (_0x575536) {
    console.error(_0x575536);
    _0x1dd9a7("An error occurred: " + _0x575536.message);
  }
});