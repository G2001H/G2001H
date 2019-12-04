module.exports.run = async (bot, message, args) => {
    const channels = message.guild.channels.find(ch => ch.name === args[0]);
    const says = args.slice(1).join(" ");
    if(!channels) return message.reply("`;ChannelSay <Channel> <Text>`");
    if(!says) return message.reply("`;ChannelSay <Channel> <Text>`");
    channels.send(says);
}