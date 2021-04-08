const fetch = require('node-fetch');

async function awake() {
  try {
    const ft = await fetch('https://freelancerr.glitch.me/awake');
  } catch (err) {
    console.error(err);
  }
} 

setInterval(async () => {
  await awake();
}, 30000);
