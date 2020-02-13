const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const PREFIX = '!';

const http = require('http')
const port = process.env.PORT || 3000;
http.createServer().listen(port);

let db = JSON.parse(fs.readFileSync("./database.js", "utf8"));
require('dotenv/config');

const token = process.env.TOKEN;

client.on('ready', () =>{
    console.log('Cyber has energy!');
    client.user.setActivity('energy usage: 1%', { type: 'WATCHING' })
})

client.on("guildMemberAdd", (member, message) => {

const channel = client.channels.get('673973844502904912')

const ListEmbed = new Discord.RichEmbed()
        .setColor('#d9f5bc')
        .setTitle(`New Minion has arrived!`)  
        .setDescription(`Welcome, ${member.displayName} to The Cave of The Minions, be sure to first read our rules.`)  
    channel.send(ListEmbed)
});


client.on('error', err =>{
    console.log(err);
});


client.login(token);