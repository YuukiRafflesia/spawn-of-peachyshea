const { Command } = require('discord.js-commando');

module.exports = class OhioCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ohio',
            group: 'image-posting',
            memberName: 'ohio',
            description: 'OOOHIOOOOOOOOOOO!',
            examples: ['ohio']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/412494829935919106/458308358491996160/good_morning.png`);
    }
};