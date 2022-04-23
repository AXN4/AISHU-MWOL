const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/C4ego0A.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `Pʀɪɴᴄᴇ Sᴇʀ Bᴏᴛ💝
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918590451659

ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/919946432377

Pʀɪɴᴄᴇ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/FH8pCHTfpCMFkHbWVGVaLv

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/AXN4/AISHU-MWOL

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/AXN4/AISHU-MWOL/tree/master/Aishu_bgms

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/AXN4/AISHU-MWOL/tree/master/Aishu_stickers


💝ᴛʜɪs ʙᴏᴛ ᴡᴀs ᴄʀᴇᴀᴛᴇᴅ Bʏ ᴘʀɪɴᴄᴇ sᴇʀ💝
`}) 

}));
