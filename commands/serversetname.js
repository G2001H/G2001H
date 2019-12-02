module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to change server name!");
    const argument = args.join(" ")
    if(!argument) return message.reply('You need to specify a name for server!')
    message.guild.setName(argument);
    message.reply('✅ **Succsessfuly changed server name to:** **__' + argument + '__** ✅')
}
