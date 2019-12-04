const Discord = require('discord.js');
const client = new Discord.Client();
const pref = require("./package.json")

client.on('ready', () =>{
    console.log('Bot is ON');
    let games = ["G2001H","Say ;Help"];
    let types = ["WATCHING", "STREAMING", "PLAYING", "LISTENING"]
    setInterval(() => {
        client.user.setActivity(games[Math.floor(Math.random()* games.length)],
        {url: "https://twitch.tv/G2001H_Developer", type: (types[Math.floor(Math.random()* types.length)])})
    }, 10000)
    let statuss = ["dnd", "idle", "online"] //"invisible"
    setInterval(() => {
    client.user.setStatus(statuss[Math.floor(Math.random()* statuss.length)]) // dnd, idle, online, invisible
    }, 10000)
    client.user.setUsername("[" + pref.prefix + "] G2001H's Bot")
});

client.on("message", message => {
	if (message.author.bot) return; // check if is bot talking
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
