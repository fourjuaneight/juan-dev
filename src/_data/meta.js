const meta = async () => {
  const url = process.env.ELEVENTY_ENV === 'local' ? '' : process.env.ELEVENTY_ENV === 'development' ? 'https://development.juanvillela.dev' : 'https://www.juanvillela.dev';
  return {
    domain: url,
    title: 'Juan Villela',
    description: 'Front-End Developer, automation nerd, and astronomy enthusiast.',
    social: 'fourjuaneight',
    image: '/icons/juan.png',
    datefmt: { year: 'numeric', month: 'long', day: 'numeric' }
  };
};

module.exports = meta;