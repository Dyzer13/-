const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'تعال') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('اوكي');
        })
        .catch(console.log);
    } else {
      message.reply('تعال اول شي رووم');
    }
  }
});



client.login("process.env.BOT_TOKEN");