const { Command } = require('discord.js-commando');

module.exports = class TastyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tasty',
            aliases: ['delicious','gross'],
            group: 'image-posting',
            memberName: 'tasty',
            description: 'Only the finest food here at MiA! Spiderwebs included free!',
            examples: ['tasty']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/350298065741152286/502007678940217354/image0.gif`);
    }
};