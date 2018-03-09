const ghPages = require('gh-pages');

ghPages.publish('demo', {
  repo: `https://${process.env.GITHUB_TOKEN}@github.com/zendeskgarden/css-components.git`,
  silent: true
});
