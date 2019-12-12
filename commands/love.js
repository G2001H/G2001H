const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let person = args[0]
    let person2 = args[1]
    const love = Math.random() * 100;
    if(!person) return message.reply("``;Love <YourName> <CrushName>``")
    if(!person2) return message.reply("``;Love <YourName> <CrushName>``")
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("❣️ **Love Calculator** ❣️")
    .addField("👤 **__Your Name:__**", args[0])
    .addField("❤️ **__Crush Name:__**", args[1])
    .addField("💞 **__The chance of a relationship:__**", Math.floor(love) + "%")
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed);
}