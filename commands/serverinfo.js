const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('📜 **Server Informations:** 📜')
    .addField('🌟 **__Server Name:__**', message.guild.name,true)
    .addField('🌟 **__Server ID:__**', message.guild.id, true)
    .addField('📅 **__Server Created:__**', message.guild.createdAt)
    .addField('🙋‍♂️ **__Members Count:__**', message.guild.memberCount, true)
    .addField('🔘 **__Roles Count:__**', message.guild.roles.size - 1, true)
    .addField('👌 **__Channels Count:__**', message.guild.channels.size, true)
    .addField('👑 **__Owner:__**', message.guild.owner,true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
     message.channel.send(embed);
}