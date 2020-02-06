const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const embeds = new Discord.RichEmbed()
    .setTitle("📜 **G2001H's Bot Information!** 📜")
    .setColor("RANDOM")
    .addField("👑 **__Bot Owners:__**", `G2001H#6405`,true)
    .addField("📅 **__Bot Created:__**", "29/08/2019",true)
    .addField("👥 **__Total Servers:__**", bot.guilds.size,true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#6405')
    message.channel.send(embeds)
}

// .addField("📨 **__Bot Invite:__**", "[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=643184729478266932&scope=bot&permissions=8)",true)
// .addField("🌐 **__Bot Server:__**", "[Click here to join on my server!](https://discord.gg/bmTSy7T)",true)
// .addField("🎟️ **__Bot Website:__**", "Coming Soon!") //[Click here to visit my website!](https://discordapp.com)
// .addField("💰 **__Donate:__**", "Coming Soon!") //[Click here to support me!](https://discordapp.com)
