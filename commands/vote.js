module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to create a vote!");
    let msgArgs2 = message.mentions.users.first();
    if(!msgArgs2) return message.reply("You didn't specify a member!");
        message.channel.send("**Vote for** " + msgArgs2 + " **Is he/she trusted? Yes** :white_check_mark: **or No** :negative_squared_cross_mark:").then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(500).catch(console.error);
    });
}