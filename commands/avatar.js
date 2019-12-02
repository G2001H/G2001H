const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    if (!user) return message.reply("You need to specify a member!")
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`${user.username}'s Avatar.`)
    .setImage(user.avatarURL)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed)
}