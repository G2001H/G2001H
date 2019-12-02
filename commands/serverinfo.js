const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(':scroll: **Server Informations:** :scroll:')
    .addField(':star2: **__Server Name:__**', message.guild.name,true)
    .addField(':star2: **__Server ID:__**', message.guild.id, true)
    .addField(':date: **__Server Created:__**', message.guild.createdAt)
    .addField(':man_raising_hand: **__Members:__**', message.guild.memberCount, true)
    .addField(':crown: **__Owner:__**', message.guild.owner,true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
     message.channel.send(embed);
}