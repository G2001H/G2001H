const Discord = require('discord.js')
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('📜 **Server Informations:** 📜')
    .addField('👑 **__Owner:__**', message.guild.owner,true)
    .addField('🌟 **__Server Name:__**', message.guild.name,true)
    .addField('🌟 **__Server ID:__**', message.guild.id, true)
    .addField('🙋‍♂️ **__Members Count:__**', message.guild.memberCount, true)
    .addField("🔘 **__Members Online:__**", message.guild.members.filter(m => m.presence.status !== "offline").size.toString(),true)
    .addField('👌 **__Channels Count:__**', message.guild.channels.size, true)
    .addField(`🤍 **__Roles (${message.guild.roles.size - 1}):__**`, message.guild.roles.filter(r => r.id !== message.guild.id).map(r => r).join(" ") || 'None', true)
    .addField('📅 **__Server Created:__**', formatDate(message.guild.createdAt),true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
     message.channel.send(embed);
}