const { Command } = require('discord.js-commando');

module.exports = class NotWorthCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'notworth',
            aliases: ['temp'],
            group: 'image-posting',
            memberName: 'notworth',
            description: 'Breasts are temporary... But TTGL is eternal!',
            examples: ['notworth']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/446298050541912065/457948301090881539/why_the_fuck_did_i_make_this.png`);
    }
};