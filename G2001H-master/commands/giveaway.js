const discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    var winnerCount = args[0];
    var time = args[1];
    var item = args.splice(2, args.length).join(' ');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You dont have permission to use this command!**");
    if(!winnerCount) return message.reply('``;Giveaway <Winners> <Time> <Giveaway>``')
    if(!time) return message.reply('``;Giveaway <Winners> <Time> <Giveaway>``')
    if(!item) return message.reply('``;Giveaway <Winners> <Time> <Giveaway>``')
    message.delete();
    var date = new Date().getTime();
    var dateTime = new Date(date + (ms(time)));
    var giveawayEmbed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${item}`)
        .setDescription(`
        React with 🎉 to enter!
        Time: **${ms(ms(time))}**
        Hosted by: ${message.author}
        `)
        .setFooter("Bot by: G2001H#2001 | Ends at")
        .setTimestamp(dateTime)
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
    setTimeout(function () {
        var random = 0;
        var winners = [];
        var inList = false;
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
        if (peopleReacted.length == 0) {
            return message.channel.send("**Nobody won**");
        }
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("**Needed more reacts to choose winners!**");
        }
        for (var i = 0; i < winnerCount; i++) {
            inList = false;
            random = Math.floor(Math.random() * peopleReacted.length);
            for (var y = 0; y < winners.length; y++) {
                if (winners[y] == peopleReacted[random]) {
                    i--;
                    inList = true;
                    break;
                }
            }
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
        }
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Congratulations " + winners[i] + `! You won the **${item}**!`);
            embedSend.edit(
            giveway = new discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(`${item}`)
            .setDescription(`
            Winner: ${winners[i]}
            Hosted by: ${message.author}
            `)
            .setFooter("Bot by: G2001H#2001 | Ends at")
            .setTimestamp(dateTime))
        }
    }, ms(time));
}