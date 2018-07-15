const { Command } = require('discord.js-commando');

module.exports = class KumikonnorCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kumikonnor',
            group: 'image-posting',
            memberName: 'kumikonnor',
            description: 'Isn\'t technology marvelous?',
            examples: ['kumikonnor']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/413449617401708555/457952177290215425/Kumikonnor.jpg`);
    }
};