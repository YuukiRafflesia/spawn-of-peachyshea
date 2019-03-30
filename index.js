require('dotenv').config();

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Peachyshea is up and running and ready to do stupid shit!`);
});

let prefix = '&';

bot.on('message', msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!msg.guild) return;

    // *** RANDOM SHIT *** //
    
    if (command === 'testo') {
        msg.channel.send(`Testingu testingu!`);
    }

    if (command === 'dumbify') {
        let letterArr = args;
    }

    // *** FUN STUFF *** //

    /*
    if (command === 'score') {
        
        Math.floor(Math.random() * Math.floor(11));
    }
    */

    // *** IMAGE MANIPULATION *** //

    // Coming soon maybe
    
    // *** ANILIST STUFF *** //

    // Coming soon maybe

    // ***** GAMES ***** //
    
    // Coming soon maybe

    // *** IMAGE POSTING *** //

    if (command === 'bahaha') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/467904020275658762/Bahaha_v2.gif`);
    }
    if (command === 'connordie') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/505441929689956383/videotogif_2018.10.25_07.49.01.gif`);
    }
    if (command === 'kumikonnor') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/413449617401708555/457952177290215425/Kumikonnor.jpg`);
    }
    if (command === 'penguinlove') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/416425531375091732/473460432921690128/Yuukin_do_it.gif`);
    }
    if (command === 'ohio') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/458308358491996160/good_morning.png`);
    }
    if (command === 'patbob') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/469450295785553921/469458929223598120/What_monster_have_I_helped_create.gif`);
    }
    if (command === 'peach') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/458418438704988181/IMG_20180519_184134_572-1.jpg`);
    }
    if (command === 'smug') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/458961669012324362/at_this_point_im_just_trying_to_make_as_many_connor_memes_as_i_possibly_can.png`);
    }
    if (command === 'suffer') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446926093090291712/458863542653681664/image.jpg`);
    }
    if (command === 'delicious') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/350298065741152286/502007678940217354/image0.gif`);
    }
    if (command === 'tasty') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/350298065741152286/502007678940217354/image0.gif`);
    }
    if (command === 'notworth') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446298050541912065/457948301090881539/why_the_fuck_did_i_make_this.png`);
    }
    if (command === 'thankspod') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/460647816575057950/videotogif_2018.06.24_23.26.33.gif`);
    }
    if (command === 'welcome') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446298050541912065/457948341989277706/what_the_fuck_am_i_doing_with_my_life.png`);
    }
    if (command === 'wholesome') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/472863254318678034/not_sure_how_i_missed_that_the_first_time.gif`);
    }
    if (command === 'thot') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/560851328935526424/image0.png`);
    }

    // ***** MADE IN ANIME WAR ***** //

    // Gotta figure out other shit first lmao
});

bot.login(process.env.DISCORD_TOKEN);