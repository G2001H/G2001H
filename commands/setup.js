const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Setup Information!")
    .addField("Channels:", `
    **;Create ChannelLogs** - *Will create a channel with name (logs)!*
    `)
    .addField("Roles:", `
    **;Create RoleVerified** - *Will create a role with name (Verified)!*"
    **;Create RoleMuted** - *Will create a role with name (Muted)!*"
    `)
    message.channel.send(Embeds);
}