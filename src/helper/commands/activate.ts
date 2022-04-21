import { Message } from 'discord.js';
const { exec } = require("child_process");

function activate(msg: Message): void
{
    msg.channel.send('Activated!');

    exec("node ./out/selfbot/index.js", (error, stdout, stderr) => 
    {
        if(error) 
        {
            console.log(`error: ${error.message}`);
            return;
        }
        if(stderr) 
        {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

export const commandInfo = {
    name: "activate",
    description: "Activate the extension",
    minArgs: 0,
    execute: activate
};