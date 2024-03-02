module.exports = {
  apps: [
    {
      name: 'clownPocket',
      script: 'clown-pocket-server.js'
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '114.132.167.29',
      ref: 'origin/main',
      repo: 'git@github.com:Rainyrou/Pocket-React.git',
      path: '/workspace/clownPocket',
      'post-deploy':
        'git reset --hard && git checkout main && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
