# spcanvas
Make configurable canvas easily with spcanvas

# Installation
```sh
npm i spcanvas
```

[![NPM](https://nodei.co/npm/spcanvas.png)](https://nodei.co/npm/spcanvas/)

# Documentation
* [Spotify](https://github.com/ARYANOP-Radio/spcanvas/blob/main/docs/Spotify.md)


# Example of code (Discord.js v14)

```js
const spcanvas = require("spcanvas");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.Presences, GatewayIntentBits.Messages] });

client.on("ready", () => {
  console.log(`I connect to ${client.user.tag}`)
});
```



<h2><a href="https://github.com/ARYANOP-Radio/spcanvas/blob/main/docs/Spotify.md">Spotify</a> card</h2>

```js
client.on("messageCreate", async message => {
  if (message.content === "!spotify") {
    const spotify = await new spcanvas.Spotify()
    .setAuthor("Alan Walker, Ava Max")
    .setAlbum("Alan Walker Album")
    .setBackground("image", "https://th.bing.com/th/id/R.0bbabe949adc2ea6c853eddad2f38519?rik=jshX8YIYBDnF4w&pid=ImgRaw&r=0")
    .setImage("https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177")
    .setTimestamp(40000, 179000)
    .setTitle("Alone, Pt II")
    .build();

    message.reply({
      files: [{
        attachment: spotify.toBuffer(),
        name: `spotify-${message.member.id}.png`
      }]
    });
  }
});
```

![img](https://i.imgur.com/RY6uXqZ.png)

# Note
This package is the continuation of discanvas package

# Server Support 
[![Discord Banner](https://discordapp.com/api/guilds/805734218122264606/widget.png?style=banner2)](https://discord.gg/wrCzESkVzK)
