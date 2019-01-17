const { Command } = require('discord.js-commando');

module.exports = class WholesomeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wholesome',
            group: 'image-posting',
            memberName: 'wholesome',
            description: 'It doesn\'t get more wholesome than this! :^)',
            examples: ['wholesome']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/412494829935919106/472863254318678034/not_sure_how_i_missed_that_the_first_time.gif`);
    }
};