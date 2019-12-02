module.exports.run = async (bot, message, args) => {
    if(args[0].toLowerCase() === "verified?"){
        if(!message.member.roles.find(r => r.name === "Verified")) return message.reply('No your not!')
        message.reply('Yes you are!')
    };
    if(args[0].toLowerCase() === "owner?"){
        if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('No your not!')
        message.reply('Yes you are!')
    };
}