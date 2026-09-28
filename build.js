const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'public');
const output = path.join(__dirname, 'dist');
fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(source, output, { recursive: true });

const gameServerUrl = (process.env.GAME_SERVER_URL || '').trim().replace(/\/$/, '');
fs.writeFileSync(
  path.join(output, 'config.js'),
  `window.GAME_SERVER_URL = ${JSON.stringify(gameServerUrl)};\n`,
  'utf8',
);
console.log(`Frontend listo en dist/ (servidor de juego: ${gameServerUrl || 'mismo origen'}).`);
