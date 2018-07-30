require('dotenv').config();

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sops.glitch.me/`);
}, 280000);

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