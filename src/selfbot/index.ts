import { Client, Message } from 'discord.js';
const Discord = require('discordjswith1change');
const path = require('path');
const config = require(path.join(__dirname, '../../config.json'));

const userClient: Client = new Discord.Client(); 

userClient.once('ready', (): void => 
{
	console.log(`${userClient.user.username} is ready!`);
});

userClient.on("message", (msg: Message): void =>
{
    if(msg.author.id != config.userid || msg.author.id != config.botid) return;

    const args: string[] = msg.content.trim().split(/ +/g);

    if(msg.content.startsWith(`emoji::`)) 
    {
        msg.delete();
        msg.channel.send(`https://wasabi123.ml/media/emojis/${args[0].split("emoji::").join('')}`);
    }
    else if(msg.content.startsWith(`video::`)) 
    {
        msg.delete();
        msg.channel.send(`https://wasabi123.ml/media/videos/${args[0].split("video::").join('')}`);
    }
    else if(msg.content.startsWith(`media::`)) 
    {
        msg.delete();
        msg.channel.send(`https://wasabi123.ml/media/${args[0].split("media::").join('')}`);
    }
    else if(msg.content.startsWith(`..deactivate`))
    {
        exit();
    }
});

export function exit(): void
{
    process.exit();
}

userClient.login(config.userToken);