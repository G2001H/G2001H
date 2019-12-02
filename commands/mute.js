const Discord = require("discord.js")
const ms = require('ms');
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {
    let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let mainrole = message.guild.roles.find(role => role.name === "Verified");
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    let time = args[1];
    let reason = args.slice(2).join(' ');
    let logs = message.guild.channels.find('name', config.logsChannel);
    if(!person) return message.reply("You need to specify a member!");
    if(!time) return message.reply("You didn't specify a time!");
    if(!reason) return message.reply("You didn't specify a reason!");
    if (!muterole) return message.reply("Cloudn't find role @Muted");
    if (!mainrole) return message.reply("Cloudn't find role @Verified");
    if (!logs) return message.reply(`Cannot find channel ${config.logsChannel}!`);
    const embeds = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(person.user.avatarURL)
        .setTitle(":mute: **" + person.user.username + " has been Muted!** :mute:")
        .addField(':mute: **__Muted Member:__**', `${person}`,true)
        .addField(':mute: **__Muted MemberID:__**', person.user.id ,true)
        .addField(':date: **__Muted Date:__**', message.createdAt)
        .addField(':point_down: **__Muted by:__**', `${message.author}`,true)
        .addField(':clock1: **__Muted Time:__**', `${ms(ms(time))}`, true)
        .addField(':question: **__Muted Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        person.removeRole(mainrole.id);
        person.addRole(muterole.id);
        logs.send(embeds)
        message.channel.send(`${person} has been muted for ${ms(ms(time))}! https://tenor.com/view/ash-mute-pokemon-role-muted-gif-12700315`);
        setTimeout(function(){
        person.addRole(mainrole.id);
        person.removeRole(muterole.id);
        message.channel.send(`${person} has been unmuted!`)
    }, ms(time));
}