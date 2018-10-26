const { Command } = require('discord.js-commando');

module.exports = class ConnorDieCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'connordie',
            aliases: ['cdie','connorsdying'],
            group: 'image-posting',
            memberName: 'connordie',
            description: 'Nooo come back to us Conny-senpai!',
            examples: ['connordie']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/405533644250152962/505441929689956383/videotogif_2018.10.25_07.49.01.gif`);
    }
};