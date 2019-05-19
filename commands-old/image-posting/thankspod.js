const { Command } = require('discord.js-commando');

module.exports = class ThanksPodCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'thankspod',
            group: 'image-posting',
            memberName: 'thankspod',
            description: 'THANKS POD!!!',
            examples: ['thankspod']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/405533644250152962/460647816575057950/videotogif_2018.06.24_23.26.33.gif`);
    }
};