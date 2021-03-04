module.exports = {
  apps : [{
    script: 'node ./server/index.js',
    watch: '.',
    env: {
      production: {
        DB_URL: process.env.DB_URL,
        SHORT_URL: process.env.SHORT_URL,
        PORT: process.env.PORT
      }
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'pi',
      host : 'pi.bnji.dev',
      ref  : 'origin/production',
      repo : 'git@github.com:DAVE4547/URL-Shortener.git',
      path : '/projects/production/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production && pm2 save',
      'pre-setup': ''
    }
  }
};
