const axios = require('../config/axios');
const { errorMapper } = require('../mapper/errorMapper');
const { repoMapper } = require('../mapper/repoMapper');

async function getAvatar(_req, res) {
  try {
    const { data } = await axios.get();

    return res.status(200).json({ avatar: data.avatar_url });
  } catch (error) {
    const { status, message } = errorMapper(error);

    return res.status(status).json({ message });
  }
}

async function getRepository(_req, res) {
  try {
    const { data } = await axios.get('/repos');
    const response = repoMapper(data);

    return res.status(200).json(response);
  } catch (error) {
    const { status, message } = errorMapper(error);

    return res.status(status).json({ message });
  }
}

module.exports = {
  getAvatar,
  getRepository,
};
