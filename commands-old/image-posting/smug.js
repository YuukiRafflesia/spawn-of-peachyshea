const { Command } = require('discord.js-commando');

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            group: 'image-posting',
            memberName: 'smug',
            description: 'Smug animu grillz...',
            examples: ['smug']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/412494829935919106/458961669012324362/at_this_point_im_just_trying_to_make_as_many_connor_memes_as_i_possibly_can.png`);
    }
};