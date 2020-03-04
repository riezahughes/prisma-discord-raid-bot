require('dotenv').config()
const xios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // on ready, get all parties. For all parties, set up a scheduled cron job based on

});

client.on('message', msg => {

  let sanatisedMessage = msg.content.toLowerCase();

  if (sanatisedMessage.includes('!$leader') === true) {
    // Check to see if db already has this person registered. If not, register to the bot as a leader.
    msg.reply(`You are now Leader`);
  }

  if (sanatisedMessage.includes('!$passlead') === true) {
    // pass the leader to someone else.
    msg.reply(`You have passed the lead to someone else`);
  }

  if (sanatisedMessage.includes('!$createparty') === true) {
    // Creates Party for the leader who asks. Use a nickname to quick reference maybe? 
    msg.reply(`Party Created!`);
  }

  if (sanatisedMessage.includes('!$removeparty') === true) {
    // delete party for leader who asks. Offer a prompt for it.
    msg.reply('Party Blown Up');
  }

  if(sanatisedMessage.includes('!$clearparty') === true){
    msg.reply(`Party is empty`)
  }

  if (sanatisedMessage.includes('!$viewparty') === true) {
    // Check to see if db already has this person registered. If not, register to the bot as a leader.
    msg.reply(` See Party List `)
  }

  if (sanatisedMessage.includes('!$addmember') === true) {
    msg.reply(`A member has been added to the party`)
  }

  if (msg.content === '!$removeme') {
    msg.reply(`You've removed yourself from the party.`)
    // remove member from party. checks if they are a member or sub.
  }

  if (msg.content === '!$addsub') {
    // Adds an Available Sub to the Party. 
    msg.reply(`You've added a sub.`)
  }

  if (msg.content === '!$removesub'){
    msg.reply(`Sub has been removed.`)
  }

  if (msg.content === `!$clearsubs`){
    msg.reply(`All subs cleared`);
  }

});

client.login(process.env.DISCORD_BOT_TOKEN);