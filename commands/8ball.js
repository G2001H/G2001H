const textrandom = ["🎱 Yes!","🎱 No!","🎱 Yes!","🎱 No!","🎱 Yes!","🎱 No!"];

module.exports.run = async (bot, message, args) => {
    const argumantstwo = args.join(" ");
    if(!argumantstwo) return message.reply('`;8Ball <Text>`')
    message.reply(textrandom[Math.floor(Math.random() * textrandom.length)]);
}