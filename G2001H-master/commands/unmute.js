const Discord = require("discord.js")
const ms = require('ms');
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let mainrole = message.guild.roles.find(role => role.name === "Verified");
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if(!person) return message.reply("`;UnMute <@Member>`");
    if(!muterole) return message.reply("**Cloudn't find role @Muted, please say** ``;Setup`` **to check for info!**");
    if(!mainrole) return message.reply("**Cloudn't find role @Verified, please say** ``;Setup`` **to check for info!**");
    if(!logs) return message.reply(`**Cloudn't find channel ${config.logsChannel}, please say** ``;Setup`` **to check for info!**`);
    person.removeRole(muterole.id);
    person.addRole(mainrole.id);
    message.channel.send(`${person} **has been unmuted!**`);
}