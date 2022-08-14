const express = require('express');
require('dotenv').config();

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || '3001');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  return app;
};
