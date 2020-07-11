// https://github.com/CompactJS/random
const pick = (choices) => {
	return choices[Math.floor(Math.random() * choices.length)];
};

const fetchRepos = async () => {
	const res = await fetch('https://api.github.com/users/TimoBechtel/repos');
	const repos = await res.json();
	return repos;
};

const redirectToRandomRepo = async () => {
	const repos = await fetchRepos();
	window.location.replace(pick(repos).html_url);
};
