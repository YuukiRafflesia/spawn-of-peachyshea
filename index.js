require('dotenv').config();

const Commando = require('discord.js-commando');

const client = new Commando.Client({
    commandPrefix: '-',
    owner: '194073671462027265',
    disableEveryone: true
});

const path = require('path');

client.registry
    .registerGroups([
        ['image-posting', 'Post stupid images!'],
        ['misc', 'Other commands!']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.DISCORD_TOKEN);