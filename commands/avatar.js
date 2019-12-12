const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first()
    if (!user) return message.reply("`;Avatar <@Member>`")
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${user.username}'s Avatar**`)
    .setImage(user.avatarURL||user.displayAvatarURL)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed)
}