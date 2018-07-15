const { Command } = require('discord.js-commando');

module.exports = class BahahaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bahaha',
            group: 'image-posting',
            memberName: 'bahaha',
            description: 'The finest collection of bahaha screenshots around!',
            examples: ['bahaha']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/412494829935919106/467904020275658762/Bahaha_v2.gif`);
    }
};