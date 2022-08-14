function repoMapper(data) {
  if (data.length === 0) {
    return [];
  }

  const reposCSharp = data.filter((item) => item.language === 'C#');
  const sortRepositories = reposCSharp.sort((repoA, repoB) => (
    new Date(repoA.created_at) - new Date(repoB.created_at)
  ));
  const topFive = sortRepositories.slice(0, 5);

  return topFive.map((repo) => ({
    title: repo.full_name,
    subtitle: repo.description,
  }));
}

module.exports = {
  repoMapper,
};
