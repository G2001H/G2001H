module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to use this command!");
    let msgArgs2 = message.mentions.users.first();
    let msgArgs3 = args.slice(1).join(" ");
    if(!msgArgs2) return message.reply("`;Vote <@Member> <Text>`");
    if(!msgArgs3) return message.reply("`;Vote <@Member> <Text>`");
        message.channel.send("**Vote for** " + msgArgs2 + " **" + msgArgs3 + "** | **Yes** ✅ **or No** ❎").then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(500).catch(console.error);
    });
}