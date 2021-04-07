const fetch = require('node-fetch');

async function awake() {
  try {
    const ft = await fetch('https://freelancerr.glitch.me/awake');
    const res = await ft.json();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
} 

setInterval(() => {
  awake();
}, 3000);