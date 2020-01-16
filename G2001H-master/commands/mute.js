const Discord = require("discord.js")
const ms = require('ms');
const config = require('../package.json');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let mainrole = message.guild.roles.find(role => role.name === "Verified");
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    let reason = args.slice(2).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if(!person) return message.reply("`;Mute <@Member> <Reason>`");
    if(!reason) return message.reply("`;Mute <@Member> <Reason>`");
    if(!muterole) return message.reply("**Cloudn't find role @Muted, please say** ``;Setup`` **to check for info!**");
    if(!mainrole) return message.reply("**Cloudn't find role @Verified, please say** ``;Setup`` **to check for info!**");
    if(!logs) return message.reply(`**Cloudn't find channel ${config.logsChannel}, please say** ``;Setup`` **to check for info!**`);
    const embeds = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(person.user.avatarURL)
        .setTitle("🔇 **[Mute] " + person.user.username + "** 🔇")
        .addField('🔇 **__Muted Member:__**', `${person}`,true)
        .addField('🔇 **__Muted MemberID:__**', person.user.id ,true)
        .addField('📅 **__Muted Date:__**', formatDate(message.createdAt))
        .addField('👇 **__Muted by:__**', `${message.author}`,true)
        .addField('❓ **__Muted Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#2001')
        person.removeRole(mainrole.id);
        person.addRole(muterole.id);
        logs.send(embeds)
        message.channel.send(`${person} **has been muted!**`);
}
