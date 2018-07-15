const { Command } = require('discord.js-commando');

module.exports = class WelcomeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'welcome',
            group: 'image-posting',
            memberName: 'welcome',
            description: 'Welcome to Made in Anime! Tehehe...',
            examples: ['welcome']
        });
    }

    run(msg) {
        return msg.say(`https://cdn.discordapp.com/attachments/446298050541912065/457948341989277706/what_the_fuck_am_i_doing_with_my_life.png`);
    }
};