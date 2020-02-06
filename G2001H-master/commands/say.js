module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    const says = args.join(" ");
    message.delete(0);
    if(!says) return message.reply("`;Say <Text>`");
    message.channel.send(says);
}
