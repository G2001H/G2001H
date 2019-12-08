const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const usersnms = message.mentions.users.first();
    if(!usersnms) return message.reply(";WhoIs <Member>")
    const membernames = message.guild.member(usersnms);
    if(!membernames) return message.reply("Cloudn't find that member!")
    const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`📜 **${usersnms.username}'s Information:** 📜`)
    .addField('🙎‍♂️ **__Member Name:__**', usersnms.tag, true)
    .addField('🙎‍♂️ **__Member ID:__**', usersnms.id, true)
    .addField('📅 **__Created:__**', usersnms.createdAt)
    .setThumbnail(usersnms.avatarURL)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed2);
}