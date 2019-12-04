module.exports.run = async (bot, message, args) => {
    if(args[0].toLowerCase() === "owner?"){
        if(!message.member.ID === message.guild.ownerID) return message.reply('No your not!')
        message.reply('Yes you are!')
    };
}
