const textrandom = ["🎱 **Yes!**","🎱 **Yup!**","🎱 **No!**","🎱 **I Don't Know!**","🎱 **Maybe!**","🎱 **Not Sure!**","🎱 **Nope!**"];

module.exports.run = async (bot, message, args) => {
    const argumantstwo = args.join(" ");
    if(!argumantstwo) return message.reply('`;8Ball <Question>`')
    message.reply(textrandom[Math.floor(Math.random() * textrandom.length)]);
}