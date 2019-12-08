const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embeds = new Discord.RichEmbed()
    .setTitle("📜 **G2001H's Bot Information!** 📜")
    .setColor("RANDOM")
    .setDescription("**__If you see any bug please report to G2001H#7660 or join on my server link below__**")
    .addField("👑 **__Owner:__**", "G2001H#7660",true)
    .addField("📅 **__Created:__**", "29/08/2019",true)
    .addField("📨 **__Invite:__**", "[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=643184729478266932&scope=bot&permissions=8)")
    .addField("🌐 **__Server:__**", "[Click here to join on my server!](https://discord.gg/bmTSy7T)")
    .addField("🎟️ **__Website:__**", "Coming Soon!") //[Click here to visit my website!](https://discordapp.com)
    .addField("💰 **__Donate:__**", "Coming Soon!") //[Click here to support me!](https://discordapp.com)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embeds)
}