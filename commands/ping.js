const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**Pong** 🏓 **${Math.round(bot.ping)} ms**!`)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed)
}