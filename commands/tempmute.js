const Discord = require("discord.js")
const ms = require('ms');
const config = require('../package.json');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let mainrole = message.guild.roles.find(role => role.name === "Verified");
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    let time = args[1];
    let reason = args.slice(2).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if(!person) return message.reply("`;TempMute <@Member> <Time> <Reason>`");
    if(!time) return message.reply("`;TempMute <@Member> <Time> <Reason>`");
    if(!reason) return message.reply("`;TempMute <@Member> <Time> <Reason>`");
    if(!muterole) return message.reply("**Cloudn't find role @Muted, please say** ``;Setup`` **to check for info!**");
    if(!mainrole) return message.reply("**Cloudn't find role @Verified, please say** ``;Setup`` **to check for info!**");
    if(!logs) return message.reply(`**Cloudn't find channel ${config.logsChannel}, please say** ``;Setup`` **to check for info!**`);
    const embeds = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(person.user.avatarURL)
        .setTitle("🔇 **[TempMute] " + person.user.username + "** 🔇")
        .addField('🔇 **__Temporarily Muted Member:__**', `${person}`,true)
        .addField('🔇 **__Temporarily Muted MemberID:__**', person.user.id ,true)
        .addField('📅 **__Temporarily Muted Date:__**', formatDate(message.createdAt))
        .addField('👇 **__Temporarily Muted by:__**', `${message.author}`,true)
        .addField('🕐 **__Temporarily Muted Time:__**', `${ms(ms(time))}`, true)
        .addField('❓ **__Temporarily Muted Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        person.removeRole(mainrole.id);
        person.addRole(muterole.id);
        logs.send(embeds)
        message.channel.send(`${person} **has been temporarily muted for ${ms(ms(time))}!**`);
        setTimeout(function(){
        person.addRole(mainrole.id);
        person.removeRole(muterole.id);
        message.channel.send(`${person} **has been unmuted!**`)
    }, ms(time));
}
