const Discord = require("discord.js");
const config = require('../package.json');

module.exports.run = async (bot, message, args) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to ban members!');
    if (!target) return message.reply('You need to specify a member!');
    if (!reason) return message.reply('You need to specify a reason!');
    if (!logs) return message.reply(`Cannot find channel ${config.logsChannel}!`);
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .setTitle("<:Ban:631893577617899530> **" + target.user.username + " has been Banned:** <:Ban:631893577617899530>")
        .addField('<:Ban:631893577617899530> **__Banned Member:__**', `${target}`,true)
        .addField('<:Ban:631893577617899530> **__Banned MemberID:__**', target.user.id,true)
        .addField(':date: **__Banned Date:__**', message.createdAt)
        .addField(':point_down: **__Banned by:__**', `${message.author}`,true)
        .addField(':question: **__Banned Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        //.setFooter('Banned user information', target.user.displayAvatarURL);
        message.channel.send(`${target} has been banned! https://tenor.com/view/banned-thor-gif-6072837`);
    target.ban(reason);
    logs.send(embed);
};
