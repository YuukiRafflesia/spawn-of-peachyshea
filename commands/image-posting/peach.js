const { Command } = require('discord.js-commando');

module.exports = class PeachCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'peach',
            group: 'image-posting',
            memberName: 'peach',
            description: 'Please do not finger the peaches...',
            examples: ['peach']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/405533644250152962/458418438704988181/IMG_20180519_184134_572-1.jpg`);
    }
};