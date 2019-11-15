const Discord = require('discord.js');
const ms = require('ms');
const cheerio = require('cheerio');
const request = require('request');
const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();
const PREFIX = '';
const textrandom = ["Yes","No","Yes","No","Yes","No"];
const truths = ["What is the worst date you’ve ever been on?","Who is your current crush?","How long have you gone without a shower?","Would you rather eat dog food or cat food?","If your crush told you he liked your best friend, what would you do?","Who's hotter? You or your friend?","Would you let a friend cheat on a test?","Have you ever been late to class?","Who would you never ever want to sit next to in class?","Have you ever failed a class?","How tall do you want to be?","What's your dream job?","What are you most excited about?","Basketball, baseball, or football?","How many hours would you spend online if you didn't have school or homework?"];
const dares = ["You have to delete five people on Instagram. Name them.","Describe the person of your dreams.","Tell us your most embarrassing vomit story.","Tell us your biggest secret.","Talk to a pillow like it's your crush.","Sing a song","Talk without closing your mouth.","Send us a pic of you","Send last pic in your gallery","Send your first pic in Gallery","Send us a childhood pic of yours","Make us to laught","Write my name Letter by Letter"];


// Check if bot is on
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('G2001H', {type: "WATCHING"}).catch(console.error);
})

// Bot Commands
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MEMBERS COMMANDS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Help
        case ';help':
                const embed4 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Commands For Members**')
                .addField('**Prefix:**', ";")
                .addField('**Free Commands:**', "`;Server Info`, `;Player Info`, `;ping`, `;hello`, `;dog`, `;cat`, `;quotes`, `;facts`, `;Im Verified?`, `;8-ball`, `;Truth`, `;Dare`")
                .setFooter('This bot is By: G2001H#7660')
                 message.channel.send(embed4);
                const embed5 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Commands For Owners**')
                .addField('**Prefix:**', ";")
                .addField('**Owner Commands:**', "`;purge`, `;kick`, `;mute`, `;ban`, `;I Owner?`, `;poll`")
                 .setFooter('This bot is By: G2001H#7660')
                  message.channel.send(embed5);
            break;
        // Ping
        case ';ping': 
            message.reply('Pong! :ping_pong:');
            break;
        // Hello
        case ';hello': 
            message.channel.send('hello guys!');
            break;
        // 8-ball
        case ';8-ball':
            const argumantstwo = args.slice(1).join(" ");
            if(!argumantstwo) return message.reply('You need to ask anything!')
            message.reply(textrandom[Math.floor(Math.random() * textrandom.length)])
            break;
        // Truth
        case ';Truth':
            message.reply(truths[Math.floor(Math.random() * truths.length)])
            break;
        // Dare
        case ';Dare':
            message.reply(dares[Math.floor(Math.random() * dares.length)])
            break;
         // Server
        case ';Server':
            if(args[1] === "Info"){
                const embed = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Server Information**')
                .addField('Server Name:', message.guild.name)
                .addField('Owner of Server:', message.guild.owner)
                .addField('Created:', message.guild.createdAt)
                .addField('Members Count:', message.guild.memberCount)
                .setFooter('This bot is By: G2001H#7660')
                 message.channel.send(embed);
            }else{
                message.reply('Invalid Argument!')
            }
            break;
        // Player
        case ';Player':
            if(args[1] === "Info"){
                const embed2 = new Discord.RichEmbed()
                .setColor(0xFF00A2)
                .setTitle('**Player Information**')
                .addField('Player Name:', message.author.username)
                .addField('Created:', message.author.createdAt)
                .setThumbnail(message.author.avatarURL)
                .setFooter('This bot is By: G2001H#7660')
                message.channel.send(embed2);
            }else{
                 message.reply('Invalid Argument!')
            }
            break;
        // Member
        case ';Im':
            if(args[1] === "Verified?"){
                if(!message.member.roles.find(r => r.name === "Verified")) return message.reply('No your not!')
            //  .then(msg => msg.delete(5000));
                message.reply('Yes you are')
            }else{
                message.reply('Invalid Argument!')
            }
            break;
        // Image Dog
        case ';dog':
            dogs(message);
            break;
        // Image Cat
        case ';cat': 
            cats(message);
            break;
        // Image Quotes
        case ';quotes': 
            quotes(message);
            break;
        // Image Facts
        case ';facts': 
            fact(message);
            break;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OWNER COMMANDS:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        // Poll
        case ';poll':
            if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('You dont have permission to use this command!')
            let msgArgs = args.slice(1).join(" ");
            message.channel.send("🔷 " + "**" + msgArgs + "**" + " 🔷").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete(1000).catch(console.error);
            });
            break;
        // Owner
        case ';I':
            if(args[1] === "Owner?"){
                if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('No your not!')
            //  .then(msg => msg.delete(5000));
                message.reply('Yes you are')
            }else{
                message.reply('Invalid Argument!')
            }
            break;
        // Purge
        case ';purge': 
        if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('You dont have permission to use this command!')
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
        // Kick
        case ';kick':
        if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('You dont have permission to use this command!')
            
            const users1 = message.mentions.users.first();

            if(users1) {
                const member = message.guild.member(users1);
                if(member) {
                    member.kick('You are kicked from server for a reason!').then(() => {
                        message.channel(`@${users1.tag} were kicked from this server!`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("Cloudn't find that member!")
                }
            } else {
                message.reply("You didn't specify a member!")
            }
            break;
        // Ban
        case ';ban':
        if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('You dont have permission to use this command!')
            const users2 = message.mentions.users.first();
            if(users2) {
                const member = message.guild.member(users2);
                if(member) {
                    member.ban({ression: 'You are Banned from server for a reason!'}).then(() => {
                        message.channel(`@${users2.tag} were banned from this server!`)
                    })
                } else {
                    message.reply("Cloudn't find that member!")
                }
            } else {
                message.reply("You didn't specify a member!")
            }
            break;
        // Mute
        case ';mute':
        if(!message.member.roles.find(r => r.name === "Owner")) return message.reply('You dont have permission to use this command!')
            let person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply("Cloudn't find that member!");

            let mainrole = message.guild.roles.find(role => role.name === "Verified");
            let muterole = message.guild.roles.find(role => role.name === "Mute");

            if (!muterole) return message.reply("Cloudn't find that role!");

            let time = args[2];
            if(!time){
                return message.reply("You didn't specify a time!");
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`@${person.user.tag} has been muted for ${ms(ms(time))}`);

            setTimeout(function(){
                person.addRole(mainrole.id);
                person.removeRole(muterole.id);
                message.channel.send(`@${person.user.tag} has been unmuted!`)
            }, ms(time));
            break;
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SETTINGS IMAGES:
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Image Dog
function dogs(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "dog",
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
        console.log(urls);
        if (!urls.length) {  
            return;
        }
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
// Image Cat
function cats(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cat",
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
        console.log(urls);
        if (!urls.length) {  
            return;
        }
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
// Image Quotes
function quotes(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "quotes",
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
        console.log(urls);
        if (!urls.length) {  
            return;
        }
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
// Image Facts
function fact(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "facts about animals",
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
        console.log(urls);
        if (!urls.length) {  
            return;
        }
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.login(process.env.BOT_TOKEN);
