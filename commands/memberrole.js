const Discord = require("discord.js")
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
    const MemberName = getMember(message, args.join(" "));
    if(!MemberName) return message.reply("`;MemberRole <@Member>`")
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("Roles:", MemberName.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || "None")
    .setFooter('Bot by: G2001H#2001')
    message.channel.send(embed)
}
