module.exports.run = async (bot, message, args) => {
    const msgArgs3 = message.mentions.users.first() 
    if(!msgArgs3) return message.reply('`;Kill <@Member>`');{
    const memberss = message.guild.member(msgArgs3);
    if (!memberss) return message.reply("Invalid Member!");{
        message.channel.send(msgArgs3 + " **Was Killed by** " + `${message.author}` + "! 🔪")
        message.delete(1000).catch(console.error);
    }};
}