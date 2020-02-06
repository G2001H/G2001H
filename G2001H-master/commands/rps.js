const Discord = require("discord.js");
const { promptMessage } = require("../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
            .setTitle("☑️ **Add a reaction to one of these emojis to play the game!** ☑️")
            .setFooter('Bot by: G2001H#2001')
        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
        const result = await getResult(reacted, botChoice);
        await m.clearReactions();
        embed
            .setTitle("")
            .addField(result, `${reacted} vs ${botChoice}`)
            .setFooter('Bot by: G2001H#6405');
        m.edit(embed);
        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "**__You won!__**";
            } else if (me === clientChosen) {
                return "**__It's a tie!__**";
            } else {
                return "**__You lost!__**";
        }
    }
}
