module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    const channels = message.mentions.channels.first() || message.guild.channels.find(ch => ch.name === args[0]);
    const says = args.slice(1).join(" ");
    message.delete(0);
    if(!channels) return message.reply("`;ChannelSay <#Channel> <Text>`");
    if(!says) return message.reply("`;ChannelSay <#Channel> <Text>`");
    channels.send(says);
}