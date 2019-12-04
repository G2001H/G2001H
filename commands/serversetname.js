module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to use this command!");
    const argument = args.join(" ")
    if(!argument) return message.reply('`;ServerSetName <Text>`')
    message.guild.setName(argument);
    message.reply('✅ **Succsessfuly changed server name to:** **__' + argument + '__** ✅')
}