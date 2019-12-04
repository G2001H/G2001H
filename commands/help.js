const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**__Prefix:__** **;**")
    .setTitle('🕹️ **__All Commands:__** 🕹️')
    .addField('☑️ **__Free Commands:__**',`
        ;Help
        ;AsciiFace
        ;Date
        ;Weather
        ;Triggered
        ;Ascii
        ;Image
        ;Images
        ;Avatar
        ;Minecraft
        ;Kill
        ;ServerInfo
        ;Info
        ;Ping
        ;8ball
        ;Truth
        ;Dare
    `,true)
    .addField('👑 **__Administrator Commands:__**',`
        ;Purge
        ;Kick
        ;Vote
        ;V
        ;Mute
        ;Ban
        ;Poll
        ;ServerSetName
    `,true)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed1);
}
