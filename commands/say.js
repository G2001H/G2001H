module.exports.run = async (bot, message, args) => {
    const says = args.join(" ");
    if(!says) return message.reply("`;Say <Channel> <Text>`");
    message.channel.send(says);
}