require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Peachyshea is up and running and ready to do stupid shit!`);
});

bot.on('message', msg => {
    if (!msg.guild) return;

    // *** HELP FOR BEING HELPFUL *** //

    if (msg.content === '&help') {
        const helpEmbed = new  Discord.RichEmbed()
            .setColor('#33ffa2')
            .setTitle('You rangggg?')
            .setDescription('Sup? Ya boi Peachyshea ready to kick ass with cool commands!')
            .addBlankField()
            .addField('&score <thing to score>', `Get's my super-well-educated opinion on whatever you say!`)
            .addField('&images', `DM's ya with a list of image posting commands! Just... Don't tell my mother about &tasty...`);

        msg.channel.send(helpEmbed);
    }

    if (msg.content === '&images') {
        msg.author.send(`Yo! Here's that cool-ass list ya asked for!\n\n&bahaha\n&connordie\n&kumikonnor\n&penguinlove\n&ohio\n&patbob\n&peach\n&smug\n&suffer\n&delicious\n&tasty\n&notworth\n&thankspod\n&welcome\n&wholesome\n&thot\n&nitrosaga`);
    }

    // *** FUN STUFF *** //

    if (msg.content.startsWith('&score')) {
        let score = Math.floor(Math.random() * 11);
        let thingToScore = msg.content.slice(7);
        
        let msgVariant = Math.floor(Math.random() * 3);
        switch (msgVariant) {
            case 0:
                msg.channel.send(`Hmmm... I think I'll give **${thingToScore}** a score of **${score}/10**!`);
                break;
            case 1:
                if (score > 7) msg.channel.send(`I gotta give **${thingToScore}** a **${score}/10** for sure!`);
                else if (score < 8 && score > 3) msg.channel.send(`I'm gonna give **${thingToScore}** a **${score}/10**. It's alright I guess.`);
                else if (score < 4) msg.channel.send(`Uh, it's a ${score}/10. Not worth your time really.`)
                break;
            case 2:
                msg.channel.send(`I gave **${thingToScore}** a score of **${score}/10**, of course!`);
                break;
        }
    }

    // *** IMAGE MANIPULATION *** //

    // Coming soon maybe

    // ***** GAMES ***** //
    
    // Coming soon maybe

    // *** IMAGE POSTING *** //

    if (msg.content === '&bahaha') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/467904020275658762/Bahaha_v2.gif`);
    }
    if (msg.content === '&connordie') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/505441929689956383/videotogif_2018.10.25_07.49.01.gif`);
    }
    if (msg.content === '&kumikonnor') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/413449617401708555/457952177290215425/Kumikonnor.jpg`);
    }
    if (msg.content === '&penguinlove') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/416425531375091732/473460432921690128/Yuukin_do_it.gif`);
    }
    if (msg.content === '&ohio') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/458308358491996160/good_morning.png`);
    }
    if (msg.content === '&patbob') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/469450295785553921/469458929223598120/What_monster_have_I_helped_create.gif`);
    }
    if (msg.content === '&peach') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/458418438704988181/IMG_20180519_184134_572-1.jpg`);
    }
    if (msg.content === '&smug') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/458961669012324362/at_this_point_im_just_trying_to_make_as_many_connor_memes_as_i_possibly_can.png`);
    }
    if (msg.content === '&suffer') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446926093090291712/458863542653681664/image.jpg`);
    }
    if (msg.content === '&delicious') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/350298065741152286/502007678940217354/image0.gif`);
    }
    if (msg.content === '&tasty') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/350298065741152286/502007678940217354/image0.gif`);
    }
    if (msg.content === '&notworth') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446298050541912065/457948301090881539/why_the_fuck_did_i_make_this.png`);
    }
    if (msg.content === '&thankspod') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/460647816575057950/videotogif_2018.06.24_23.26.33.gif`);
    }
    if (msg.content === '&welcome') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/446298050541912065/457948341989277706/what_the_fuck_am_i_doing_with_my_life.png`);
    }
    if (msg.content === '&wholesome') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/412494829935919106/472863254318678034/not_sure_how_i_missed_that_the_first_time.gif`);
    }
    if (msg.content === '&thot') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/560851328935526424/image0.png`);
    }
    if (msg.content === '&nitrosaga') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/405533644250152962/570289755355480285/Screen_Shot_2019-04-24_at_1.47.32_AM.jpg`);
    }
    if (msg.content === '&connorpiss') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/453249833709469712/599553546618142750/SmartSelect_20180625-002644_Discord.jpg`);
    }
    if (msg.content === '&givemethepiss') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/453249833709469712/599553546618142750/SmartSelect_20180625-002644_Discord.jpg`);
    }
    if (msg.content === '&gamerboypiss') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/453249833709469712/599553546618142750/SmartSelect_20180625-002644_Discord.jpg`);
    }
    if (msg.content === '&piss') {
        msg.channel.send(`https://cdn.discordapp.com/attachments/453249833709469712/599553546618142750/SmartSelect_20180625-002644_Discord.jpg`);
    }
});

bot.login(process.env.DISCORD_TOKEN);