const app = require('./src/config/express')();
const router = require('./src/routes/gitHubRoutes');

const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (_req, res) => {
  res.send({ status: 'ok' });
});

app.use('/api', router);

module.exports = app;
