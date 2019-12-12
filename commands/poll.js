module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**You don't have permissions to use this command!**");
        let msgArgs = args.join(" ");
        if(!msgArgs) return message.reply("`;Poll <Text>`")
        message.channel.send("🔷 " + "**" + msgArgs + "**" + " 🔷").then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
        message.delete(500).catch(console.error);
    });
}