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
        ;Search
        ;Avatar
        ;Minecraft
        ;Kill
        ;ServerInfo
        ;WhoIs
        ;Ping
        ;8ball
        ;Truth
        ;Dare
        ;Say
        ;CreateHire
    `,true)
    .addField('👑 **__Administrator Commands:__**',`
        ;Purge
        ;Kick
        ;Vote
        ;Mute
        ;UnMute
        ;TempMute
        ;Ban
        ;Poll
        ;ServerSetName
        ;ChannelSay
    `,true)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed1);
}
