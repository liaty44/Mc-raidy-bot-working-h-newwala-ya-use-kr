const mineflayer = require('mineflayer');
const express = require('express');

// ==================== 🌐 EXPRESS SERVER ====================
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.status(200).send('⚡ Spikelol Minecraft Bot Web Service is Live!');
});

app.listen(PORT, () => {
    console.log(`[HTTP Server] Listening on port ${PORT}`);
});

// ==================== ⚙️ CONFIGURATION ====================
const HOST = process.env.MC_HOST || "CraftySmpseason2.pixelforge.gg";
const BOT_PASSWORD = process.env.MC_PASSWORD || "Gian2342341";
const BOT_USERNAME_PREFIX = process.env.BOT_PREFIX || "Spikelol";
// ⚠️ Yahan dhyan de: Message ke aage-peeche quotes (" ") hone chahiye!
const CHAT_SPAM_MESSAGE = "SPIKE.LOL ON TOP! THIS SERVER RAID BY SPIKE.LOL FREE TOOLS AND MORE RAID SYSTEM BEST JOIN https://discord.gg/pT8RGGvtZg";

console.log(`[BOT SYSTEM] Initializing bot packets to ${HOST}`);

setInterval(function () {
    const bot = mineflayer.createBot({
        host: HOST,
        username: `${BOT_USERNAME_PREFIX}_${generateName(5)}`,
    });

    bot.on('login', () => {
        console.log(`[BOT] Logged in as ${bot.username}`);
        bot.chat("/register " + BOT_PASSWORD + " " + BOT_PASSWORD);
        bot.chat("/login " + BOT_PASSWORD);
        
        const spam = () => {
            try {
                bot.chat(CHAT_SPAM_MESSAGE);
            } catch (e) {}
        };
        setInterval(spam, 3000);
    });

    bot.on('kicked', (reason) => console.log(`[KICKED]: ${reason}`));
    bot.on('error', (err) => console.log(`[ERROR]: ${err.message}`));
}, 6000);

// Bot Name Generator function
function generateName(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}
