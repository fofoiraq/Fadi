const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
    if (message.content.startsWith('+spotify')) {
  let user = message.mentions.users.first() || message.author;
    
  
  if (user.presence.activity !== null && user.presence.activity === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) {
  
  let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`;
  let trackName = user.presence.activity.details;
  let trackAuthor = user.presence.activity.state;
  let trackAlbum = user.presence.activity.assets.largeText;
  
  
  const embed = new Discord.RichEmbed()
  .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png')
    .setColor(0x1ED760)
    .setThumbnail(trackIMG) 
    .addField('Song Name', trackName, true)
    .addField('Album', trackAlbum, true)
    .addField('Author', trackAuthor, false) 
    .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); 
      
    message.channel.send({embed: embed})
  } else {
  if (!message.mentions.users.first()) {
    message.channel.send('**You aren\'t listening to Spotify!**');
  } else {
    message.channel.send('**This user isn\'t listening to Spotify!**');
  }
  
}
}
  });






client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('-bc-all')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
