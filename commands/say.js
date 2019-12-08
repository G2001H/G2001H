module.exports.run = async (bot, message, args) => {
    const says = args.join(" ");
    message.delete(0);
    if(!says) return message.reply("`;Say <Text>`");
    message.channel.send(says);
}