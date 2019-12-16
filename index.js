const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")

client.on('ready', () =>{
    console.log("[" + pref.prefix + "] G2001H\'s Bot is online!"); 
    setInterval(() => {
    let games = ["G2001H", "In " + client.guilds.size + " Servers", client.users.size];
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    let statuss = ["dnd", "idle", "online"]
    client.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)])
    client.user.setActivity((games[Math.floor(Math.random()* games.length)])),
    {type: "WATCHING"}
    }, 5000)
    client.user.setUsername("[" + pref.prefix + "] G2001H's Bot")
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return console.log("Err");{
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("Members: " + memberscont).catch(error => console.log(error));
    }
});

client.on("guildMemberAdd", member => {
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return console.log("Err");{
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("All Members: " + memberscont).catch(error => console.log(error));
    const channel = myGuild.channels.find(ch => ch.name === '👋welcome👋' || ch.name === 'welcome');
    if (!channel) return;
    channel.send(`Hey ${member}, welcome to **${myGuild.name}** 🎉🤗!`);
    }
})
client.on("guildMemberRemove", member => {
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return console.log("Err");{
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("All Members: " + memberscont).catch(error => console.log(error)); 
    const channel = myGuild.channels.find(ch => ch.name === '👋goodbye👋' || ch.name === 'goodbye');
    if (!channel) return;
    channel.send(`**${member.user.tag}** just left the server!`);
    }
})

client.on("message", message => {
	if (message.author.bot) return;
	if (message.author.bot || !message.guild) return;
	if (!message.content.startsWith(pref.prefix)) return;
	let command = message.content.split(" ")[0]; 
	command = command.slice(pref.prefix.length);
    let args = message.content.split(" ").slice(1);
	try {
		let commandFile = require(`./commands/${command.toLowerCase()}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		message.reply("Unknown command, say ``?help`` to see all commands.");
	}
});

client.login(process.env.BOT_TOKEN);
