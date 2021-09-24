const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const axios = require('axios');
const fs = require('fs')
const Config = require('../config');



XTroid.addCMD({pattern: 'menu ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => { 



    var lasiyasimg = await axios.get(Config.MENU_IMAGE)

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CMENUTEXT })

    }));