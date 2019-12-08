const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('📅 **__Date:__**', (months[new Date().getMonth()]) + "/" + ((new Date().getDate())) + "/" + (new Date().getFullYear()))
    .addField('📌 **__Day:__**', (days[new Date().getDay()]))
    .addField('🕐 **__Time:__**', (new Date().getHours()) + ":" + (new Date().getMinutes()) + ":" + (new Date().getSeconds()))
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embeds)
}