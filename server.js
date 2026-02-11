const express = require('express');
const client = require('prom-client');

const app = express();
app.use(express.json());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
  name: 'notes_request_count',
  help: 'Total requests'
});

let notes = [];

app.get('/', (req, res) => {
  counter.inc();
  res.send('Notes API Running');
});

app.post('/add', (req, res) => {
  notes.push(req.body.note);
  res.send('Note added');
});

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(7000, () => console.log('Server on 3000'));
