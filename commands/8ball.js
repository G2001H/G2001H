const textrandom = [":8ball: Yes",":8ball: No",":8ball: Yes",":8ball: No",":8ball: Yes",":8ball: No"];

module.exports.run = async (bot, message, args) => {
    const argumantstwo = args.join(" ");
    if(!argumantstwo) return message.reply(':8ball: You need to ask anything!')
    message.reply(textrandom[Math.floor(Math.random() * textrandom.length)]);
}