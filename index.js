const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")

client.on('ready', () =>{
    console.log("[" + pref.prefix + "] G2001H\'s Bot is online!"); 
    let games = ["G2001H"];
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    setInterval(() => {
        client.user.setActivity(games[Math.floor(Math.random()* games.length)],
        {url: "https://twitch.tv/G2001H_Developer", type: (types[Math.floor(Math.random()* types.length)])})
    }, 10000)
    let statuss = ["dnd", "idle", "online"]
    setInterval(() => {
    client.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)])
    }, 10000)
    client.user.setUsername("[" + pref.prefix + "] G2001H's Bot")
});

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
		console.error(err);
	}
});

client.login(process.env.BOT_TOKEN);
