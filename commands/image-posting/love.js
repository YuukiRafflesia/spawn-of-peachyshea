const { Command } = require('discord.js-commando');

module.exports = class LoveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'love',
            group: 'image-posting',
            memberName: 'love',
            description: 'We spray you with L O V E !',
            examples: ['love']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/416425531375091732/473460432921690128/Yuukin_do_it.gif`);
    }
};