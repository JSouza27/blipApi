function errorMapper(error) {
  const { response } = error;

  return {
    status: response.status,
    message: response.data.message,
  };
}

module.exports = {
  errorMapper,
};
