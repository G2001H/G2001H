module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to use this command!");
    let msgArgs2 = message.mentions.users.first();
    if(!msgArgs2) return message.reply("`;V <@Member>`");
        message.channel.send("**Vote for** " + msgArgs2 + " **Is he/she trusted? Yes** ✅ **or No** ❎").then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(500).catch(console.error);
    });
}
