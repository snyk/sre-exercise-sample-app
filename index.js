const express = require('express');
const safeStringify = require('fast-safe-stringify');

const hugeObject = require('./lib/huge-object');
const waitAround = require('./lib/wait-around');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/wait-around', async (req, res) => {
  const delay = Math.random() * 2000;
  await waitAround(delay);
  res.send('Hello World! ' + delay + 'ms');
});

app.get('/huge-object', (req, res) => {
  res.json(hugeObject());
});

app.get('/huge-object-size', (req, res) => {
  const size = safeStringify(hugeObject()).length;

  res.send(`Huge object was ${size} chars long as JSON!`);
});

app.get('/slow-regex', (req, res) => {
  const slowRegex = /A(B|C+)+D/;
  setImmediate(() => {
    const input = 'A' + 'C'.repeat((Math.random() * 20) + 10) + 'X';
    const result = slowRegex.test(input);
    res.send('Tested ' + input);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
