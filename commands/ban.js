const Discord = require("discord.js");
const config = require('../package.json');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if (!target) return message.reply('`;Ban <@Member> <Reason>`');
    if (!reason) return message.reply('`;Ban <@Member> <Reason>`');
    if (!logs) return message.reply(`**Cloudn't find channel ${config.logsChannel}, please say** ``;Setup`` **to check for info!**`);
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .setTitle("<:Ban:631893577617899530> **[Banned] " + target.user.username + "** <:Ban:631893577617899530>")
        .addField('<:Ban:631893577617899530> **__Banned Member:__**', `${target}`,true)
        .addField('<:Ban:631893577617899530> **__Banned MemberID:__**', target.user.id,true)
        .addField('📅 **__Banned Date:__**', formatDate(message.createdAt))
        .addField('👇 **__Banned by:__**', `${message.author}`,true)
        .addField('❓ **__Banned Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        message.channel.send(`${target} **has been banned!**`);
    target.ban(reason);
    logs.send(embed);
};
