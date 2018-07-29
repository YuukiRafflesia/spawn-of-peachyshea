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
        return msg.say(`https://cdn.discordapp.com/attachments/412494829935919106/472839799846469662/been_sitting_on_this_format_for_a_while_now_so_had_to_make_something.gif`);
    }
};