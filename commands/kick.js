const Discord = require("discord.js");
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to kick members!');
    if (!target) return message.reply('You need to specify a member!');
    if (!reason) return message.reply('You need to specify a reason!');
    if (!logs) return message.reply(`Cannot find channel ${config.logsChannel}!`);
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .setTitle(":bust_in_silhouette: **" + target.user.username + " has been Kicked:** :bust_in_silhouette:")
        .addField(':bust_in_silhouette: **__Kicked Member:__**', `${target}`,true)
        .addField(':bust_in_silhouette: **__Kicked MemberID:__**', target.user.id,true)
        .addField(':date: **__Kicked Date:__**', message.createdAt)
        .addField(':point_down: **__Kicked by:__**', `${message.author}`,true)
        .addField(':question: **__Kicked Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        //.setFooter('Kicked user information', target.user.displayAvatarURL);
        message.channel.send(`${target} has been kicked! https://tenor.com/view/kick-gif-9316304`);
    target.kick(reason);
    logs.send(embed);
};
