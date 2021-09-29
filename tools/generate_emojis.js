/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

const req = await fetch(
<<<<<<< HEAD
  "https://cdn.jsdelivr.net/gh/github/gemoji/db/emoji.json"
=======
  "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json",
>>>>>>> 76aea7d3dd821424c92138fa0b3478586e1e0da6
);
const emojis = await req.json();

const emojisMap = {};

emojis.forEach((emoji) => {
  emoji.aliases.forEach((alias) => (emojisMap[alias] = emoji.emoji));
});

await Deno.writeTextFile("./util/emojis.json", JSON.stringify(emojisMap));
