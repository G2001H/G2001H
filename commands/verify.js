module.exports.run = async (bot, message, args) => {
    if(message.guild.id === "616778093905969155"){ //Not Allowed In This Server!
        message.reply("**Its not allowed to use this command in this server!**");
    }else{
        let verifyrle = message.member.guild.roles.find("name", "Verified");
        if(!verifyrle) return message.reply("**Cloud't find role (@Verified), please say** ``;Setup`` **to check for info!**");
        message.member.addRole(verifyrle);
        message.reply("**You are verified now!**")
    }
}