const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const app = require('./src/config/express')();
const router = require('./src/routes/gitHubRoutes');
const swaggerDocument = require('./swagger.json');

const port = app.get('port');

app.use(cors());
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/api', (_req, res) => {
  res.send({ status: 'ok' });
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

module.exports = app;
