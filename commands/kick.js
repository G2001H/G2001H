const Discord = require("discord.js");
const config = require('../package.json');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You dont have permission to use this command!**');
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find(ch => ch.name === config.logsChannel);
    if (!target) return message.reply('`;Kick <@Member> <Reason>`');
    if (!reason) return message.reply('`;Kick <@Member> <Reason>`');
    if (!logs) return message.reply(`**Cloudn't find channel ${config.logsChannel}, please say** ``;Setup`` **to check for info!**`);
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .setTitle("👤 **" + target.user.username + " has been Kicked:** 👤")
        .addField('👤 **__Kicked Member:__**', `${target}`,true)
        .addField('👤 **__Kicked MemberID:__**', target.user.id,true)
        .addField('📅 **__Kicked Date:__**', formatDate(message.createdAt))
        .addField('👇 **__Kicked by:__**', `${message.author}`,true)
        .addField('❓ **__Kicked Reason:__**', reason,true)
        .setFooter('Bot by: G2001H#7660')
        message.channel.send(`${target} **has been kicked!**`);
    target.kick(reason);
    logs.send(embed);
};
