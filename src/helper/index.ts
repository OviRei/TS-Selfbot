import { Client, Message } from 'discord.js';
const fs = require('fs');
const path = require('path');
const Discord = require('discordjswith1change');
const config = require(path.join(__dirname, '../../config.json'));

const botClient: Client = new Discord.Client();

const directoryPath: String = path.join(__dirname, '/commands');

botClient.once('ready', (): void => 
{
	console.log(`${botClient.user.username} is ready!`);
});

botClient.on("message", (msg: Message): void =>
{
    const args: String[] = msg.content.slice(config.prefix.length).trim().split(/ +/);

    fs.readdir(directoryPath, function(err, files)
    {
        if(err) return console.log('Unable to scan directory: ' + err);
        files.forEach(function(file) 
	    {
            let commandFile = require(`${directoryPath}/${file}`);
            let commandName = file.split('.')[0];
            if(msg.content.startsWith(config.prefix + commandName) && commandFile.commandInfo.minArgs <= 0) commandFile.commandInfo.execute(msg);
            else if(msg.content.startsWith(config.prefix + commandName) && commandFile.commandInfo.minArgs >= 1) commandFile.commandInfo.execute(args);
        });
    });
});

botClient.login(config.botToken);