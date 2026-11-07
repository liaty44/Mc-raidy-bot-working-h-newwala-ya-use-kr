const mineflayer = require('mineflayer');
const express = require('express');

// ==================== 🌐 EXPRESS SERVER (Render Port Handling) ====================
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.status(200).send('⚡ Spikelol Minecraft Bot Web Service is Live!');
});

app.listen(PORT, () => {
    console.log(`[HTTP Server] Listening and active on Render port ${PORT}`);
});

// ==================== 🤖 MINECRAFT BOT CONFIG & LOGIC ====================
const HOST = "CraftySmpseason2.pixelforge.gg"; // Tera server IP
const BOT_PASSWORD = "Gian2342341";             // Tera password
const BOT_USERNAME_PREFIX = "Spikelol";         // Bot name prefix
const CHAT_SPAM_MESSAGE = "Spikelol Raid active! .gg/spikelol"; // Tera spam message

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
                bot.chat(SPIKE.LOL ON TOP! THIS SERVER RAID BY SPIKE.LOL FREE TOOLS AND MORE RAID SYSTEM BEST JOIN https://discord.gg/pT8RGGvtZg);
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
