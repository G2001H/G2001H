var cheerio = require("cheerio");
var request = require("request"); 
var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var search = args.join(" ");
    if(!search) return message.reply("`;Image <Text>`")
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            return;
        }
        const embeds = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`**Search: ${search}**`)
        .setImage(urls[0])
        .setFooter('Bot by: G2001H#7660')
        message.channel.send(embeds);
    });
}
