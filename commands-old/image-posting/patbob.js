const { Command } = require('discord.js-commando');

module.exports = class PatbobCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'patbob',
            group: 'image-posting',
            memberName: 'patbob',
            description: 'Thanks again Pod!',
            examples: ['patbob']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/469450295785553921/469458929223598120/What_monster_have_I_helped_create.gif`);
    }
};