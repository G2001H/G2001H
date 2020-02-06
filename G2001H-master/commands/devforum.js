const Discord = require("discord.js")
const request = require('request-promise')

module.exports.run = async (bot, message, args) => {
    const memberName = args.join(" ")
    if(!memberName) return message.reply("`;DevForum <User>`")
    const devForumData = await request({
        uri: `https://devforum.roblox.com/users/${memberName}.json`,
        json: true,
        simple: false
      });
      const devForumData2 = await request({
          uri: `https://devforum.roblox.com/u/${memberName}/summary.json`,
          json: true,
          simple: false
        });
    const img = `https://doy2mn9upadnk.cloudfront.net/user_avatar/devforum.roblox.com/${memberName}/120/600463_2.png`
    const embeds = new Discord.RichEmbed()
    .setTitle("📜 **Developer Forum Member** 📜")
    .setColor("RANDOM")
    .setDescription(devForumData.user.bio_raw || "None")
    .addField("👤 **__Username:__**", devForumData.user.username,true)
    .addField("👍 **__Likes Given:__**", devForumData2.user_summary.likes_given,true)
    .addField("👍 **__Likes Received:__**", devForumData2.user_summary.likes_received,true)
    .addField("💬 **__Topics Viewed:__**", devForumData2.user_summary.topics_entered,true)
    .addField("📖 **__Posts Read:__**", devForumData2.user_summary.posts_read_count,true)
    .addField("📆 **__Days Visited:__**", devForumData2.user_summary.days_visited,true)
    .addField("💬 **__Topic Created:__**", devForumData2.user_summary.topic_count,true)
    .addField("📆 **__Post Created:__**", devForumData2.user_summary.post_count,true)
    .addField("⏰ **__Read Time:__**", devForumData2.user_summary.time_read,true)
    .addField("⏰ **__Recent Read Time:__**", devForumData2.user_summary.recent_time_read,true)
    .addField("💠 **__Badges:__**", devForumData.user.badge_count,true)
    .addField("👤 **__Profile View:__**", devForumData.user.profile_view_count,true)
    .addField("📍 **__Location:__**", devForumData.user.location || "Unknown",true)
    .addField("👁️ **__Last Seen:__**", devForumData.user.last_seen_at,true)
    .addField("📆 **__Created:__**", devForumData.user.created_at,true)
    .setFooter('Bot by: G2001H#6405')
    .setThumbnail(img)
    message.channel.send(embeds)
}
