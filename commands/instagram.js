const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
    const name = args.join(" ");
    if (!name) {
        return message.reply("`;Instagram <Username>`")
    }
    const url = `https://instagram.com/${name}/?__a=1`;
    let res; 
    try {
        res = await fetch(url).then(url => url.json());
    } catch (e) {
        return message.reply("**Couldn't find that account**")
    }
    const account = res.graphql.user;
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("📜 **Instagram Profile of " + account.username + "** 📜")
    .setDescription(`[Profile](https://instagram.com/${name})`)
    .setThumbnail(account.profile_pic_url_hd)
    .addField("🙎‍♂️ **__Username:__**", account.username,true)
    .addField("🙎‍♂️ **__Full name:__**", account.full_name,true)
    .addField("🗒️ **__Biography:__**", account.biography.length == 0 ? "None" : account.biography)
    .addField("🖼️ **__Posts:__**", account.edge_owner_to_timeline_media.count,true)
    .addField("🌐 **__Followers:__**", account.edge_followed_by.count,true)
    .addField("🌐 **__Following:__**", account.edge_follow.count,true)
    .addField(account.is_private ? "🔐 **__Private account__**" : "🔓 **__Private account__**", account.is_private ? "Yes" : "No")
    .setFooter('Bot by: G2001H#7660')
    message.channel.send(embed);
}