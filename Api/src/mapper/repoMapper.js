function repoMapper(data) {
  if (data.length === 0) {
    return {};
  }

  const result = {};
  const reposCSharp = data.filter((item) => item.language === 'C#');
  const sortRepositories = reposCSharp.sort((repoA, repoB) => (
    new Date(repoA.created_at) - new Date(repoB.created_at)
  ));
  const topFive = sortRepositories.slice(0, 5);

  topFive.forEach((repo, index) => {
    result[index] = {
      title: repo.full_name,
      subtitle: repo.description,
    };
  });

  return result;
}

module.exports = {
  repoMapper,
};
