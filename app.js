require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // on ready, get all parties. For all parties, set up a scheduled cron job based on

});

client.on('message', msg => {
  if (msg.content === '!$leader') {
    // Check to see if db already has this person registered. If not, register to the bot as a leader.
  }
  if (msg.content === '!$createparty') {
    // Creates Party for the leader who asks.
  }
  if (msg.content === '!$deleteparty') {
    // delete party for leader who asks. Offer a prompt for it.
  }
  if (msg.content === '!$addmember') {
    // Adds a member to the party. 
  }
  if (msg.content === '!$addsub') {
    // Adds an Available Sub to the Party. 
  }

});

client.login(process.env.DISCORD_BOT_TOKEN);