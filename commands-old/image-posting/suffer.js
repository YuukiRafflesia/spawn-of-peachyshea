const { Command } = require('discord.js-commando');

module.exports = class SufferCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'suffer',
            group: 'image-posting',
            memberName: 'suffer',
            description: 'It\'s suffering time!',
            examples: ['suffer']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/446926093090291712/458863542653681664/image.jpg`);
    }
};