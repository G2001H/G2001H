const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let embed1 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**__Prefix:__** **(;)**")
    .setTitle('🕹️ **__All Commands:__** 🕹️')
    .addField('☑️ **__Free Cmds:__**',`
        ;Help
        ;AsciiFace
        ;Date
        ;Weather
        ;Triggered
        ;Ascii
        ;Image
        ;Search
        ;Avatar
        ;Kill
        ;ServerInfo
        ;WhoIs
        ;Ping
        ;8ball
        ;Truth
        ;Dare
        ;Say
        ;Verify
        ;Instagram
        ;Love
        ;RPS
    `,true)
    .addField('👑 **__Administrator Cmds:__**',`
        ;Purge
        ;Kick
        ;Mute
        ;Vote
        ;UnMute
        ;TempMute
        ;Ban
        ;Poll
        ;ServerSetName
        ;ChannelSay
        ;Setup
        ;Giveaway
    `,true)
    .addField('⛔ **__Locked Cmds:__**',`
        ;CreateHire
        ;IsTrusted
        ;Bot
    `,true)
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed1);
}