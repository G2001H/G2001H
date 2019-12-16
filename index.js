const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")

client.on('ready', () =>{
    console.log("Bot is online!"); 
    let statuss = ["dnd", "idle", "online"]
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    setInterval(() => {
    let games = ["G2001H", "In " + client.guilds.size + " Servers", client.users.size + " Users"];
    client.user.setActivity(games[Math.floor(Math.random()* games.length)],
    {url: "https://twitch.tv/G2001H_Developer", type: (types[Math.floor(Math.random()* types.length)])})
	}, 5000)
	setInterval(()=>{
	client.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)])
	}, 10000)
    let myGuild = client.guilds.get('616778093905969155');
    if(!myGuild) return console.log("Err");{
    let memberscont = myGuild.memberCount;
    let membercountchannel = myGuild.channels.get('645738814605623306');
    membercountchannel.setName("Members: " + memberscont).catch(error => console.log(error));
    }
});

client.on("guildCreate", guild => {
	let myGuild = client.guilds.get('616778093905969155');
	if(!myGuild) return console.log("Err");{
    	let channelSend = myGuild.channels.get(c => c.name === "bot-guilds");
	if(!channelSend) return console.log("Err")
	const embed = new Discord.RichEmbed()
	.setTitle("**Join Server**")
	.setColor("RANDOM")
	.addField("**__Guild Name:__**", guild.name)
	.addField("**__Guild ID:__**", guild.id)
	.addField("**__Total Members:__**", guild.memberCount)
	channelSend.send(embed)
	}
  });
  
  client.on("guildDelete", guild => {
	let myGuild = client.guilds.get('616778093905969155');
	if(!myGuild) return console.log("Err");{
    	let channelSend = myGuild.channels.get(c => c.name === "bot-guilds");
	if(!channelSend) return console.log("Err")
	const embed = new Discord.RichEmbed()
	.setTitle("**Left Server**")
	.setColor("RANDOM")
	.addField("**__Guild Name:__**", guild.name)
	.addField("**__Guild ID:__**", guild.id)
	channelSend.send(embed)
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
		message.reply("Unknown command, say ``;help`` to see all commands.");
	}
});

client.login(process.env.BOT_TOKEN);
