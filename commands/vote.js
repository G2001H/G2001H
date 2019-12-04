module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permissions to create a vote!");
    let msgArgs2 = message.mentions.users.first();
    let msgArgs3 = args.slice(1).join(" ");
    if(!msgArgs2) return message.reply("You didn't specify a member!");
    if(!msgArgs3) return message.reply("You need to ask anything!");
        message.channel.send("**Vote for** " + msgArgs2 + " **" + msgArgs3 + "** | **Yes** :white_check_mark: **or No** :negative_squared_cross_mark:").then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❎");
        message.delete(500).catch(console.error);
    });
}