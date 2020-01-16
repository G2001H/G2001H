const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("📜 **Setup Information!** 📜")
    .addField("**__Channels:__**", `
    **;Create ChannelLogs** - *Will create a channel with name (logs)!*
    `)
    .addField("**__Roles:__**", `
    **;Create RoleVerified** - *Will create a role with name (Verified)!*"
    **;Create RoleMuted** - *Will create a role with name (Muted)!*"
    `)
    .setFooter('Bot by: G2001H#2001')
    message.channel.send(Embeds);
}