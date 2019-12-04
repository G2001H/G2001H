const weather = require('weather-js');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.reply("`;Weather <Location>`");
        if (result.length === 0) {
            message.reply('Invalid Location!')
            return; 
        }
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setTitle(`🌥️ Weather for ${current.observationpoint} 🌥️`)
            .setThumbnail(current.imageUrl)
            .setColor("RANDOM")
            .addField('⏲️ **__Timezone:__**',`UTC${location.timezone}`, true)
            .addField('🌡️ **__Temperature:__**',`${current.temperature}°`, true)
            .addField('🌥️ **__Feels Like:__**', `${current.feelslike}°`, true)
            .addField('📍 **__Degree Type:__**',location.degreetype, true)
            .addField('🌬️ **__Winds:__**',current.winddisplay, true)
            .addField('💧 **__Humidity:__**', `${current.humidity}%`, true)
            message.channel.send(embed);
    });
}