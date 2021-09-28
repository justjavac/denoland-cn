/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

const req = await fetch(
<<<<<<< HEAD
  "https://cdn.jsdelivr.net/gh/github/gemoji/db/emoji.json"
=======
  "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json",
>>>>>>> 70b18777bf6ad07e3028ad9b8619ef8b93f70d08
);
const emojis = await req.json();

const emojisMap = {};

emojis.forEach((emoji) => {
  emoji.aliases.forEach((alias) => (emojisMap[alias] = emoji.emoji));
});

await Deno.writeTextFile("./util/emojis.json", JSON.stringify(emojisMap));
