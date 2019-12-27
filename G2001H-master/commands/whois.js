const Discord = require('discord.js');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    if(!member) return message.reply("``;WhoIs <Member>``")
    const membernames = message.guild.member(member);
    if(!membernames) return message.reply("**Cloudn't find that member!**")
    const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`📜 **${member.user.username}'s Information:** 📜`)
    .addField('🙎‍♂️ **__Member Name:__**', member.user.tag, true)
    .addField('🙎‍♂️ **__Member ID:__**', member.id, true)
    .addField('🤍 **__Member Roles:__**', member.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || 'None')
    .addField('📅 **__Member Created:__**', formatDate(member.user.createdAt),true)
    .addField('📅 **__Member Joined:__**', formatDate(member.joinedAt), true)
    .setThumbnail(member.user.avatarURL)
    .setFooter('Bot by: G2001H#2001')
    message.channel.send(embed2);
}