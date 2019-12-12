const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(message.guild.id === "638377655439196198"){ //Allowed only in this server!
    const embeds = new Discord.RichEmbed()
    .setTitle("📜 **G2001H's Bot Information!** 📜")
    .setColor("RANDOM")
    .setDescription("**__If you see any bug please report to G2001H#7660 or join on my server link below:__**")
    .addField("👑 **__Bot Owners:__**", `
    G2001H#7660
    Clashzone_fc#2117
    `,true)
    .addField("📅 **__Bot Created:__**", "29/08/2019",true)
    .addField("👥 **__Total Servers:__**", bot.guilds.size,true)
    .addField("📨 **__Bot Invite:__**", "[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=643184729478266932&scope=bot&permissions=8)",true)
    .addField("🌐 **__Bot Server:__**", "[Click here to join on my server!](https://discord.gg/bmTSy7T)",true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embeds)
}else{
    message.reply("**Its not allowed to use this command in this server!**");
}
}


// .addField("🎟️ **__Bot Website:__**", "Coming Soon!") //[Click here to visit my website!](https://discordapp.com)
// .addField("💰 **__Donate:__**", "Coming Soon!") //[Click here to support me!](https://discordapp.com)