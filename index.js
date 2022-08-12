const app = require('./src/config/express')();

const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (_req, res) => {
  res.send({ status: 'ok' });
});
