module.exports = {
  apps : [{
    name: 'URL Shortener',
    script: './server/index.js',
    env: {
      NODE_ENV: 'production',
      DB_URL: process.env.DB_URL,
      PORT: process.env.PORT,
      SHORT_URL: process.env.SHORT_URL
    }
  }],

  deploy : {
    production : {
      user : 'pi',
      host : process.env.S_HOST,
      key: '~/.ssh/deploy.key',
      ref  : 'origin/production',
      repo : 'https://github.com/DAVE4547/URL-Shortener.git',
      path : '/home/pi/projects/production',
      'pre-deploy-local': '',
      'post-deploy' : `npm install && DB_URL=${process.env.S_DB_URL} PORT=${process.env.S_PORT} SHORT_URL=${process.env.S_SHORT_URL} pm2 startOrRestart ecosystem.config.js --update-env && pm2 save`,
      'pre-setup': ''
    },
    setup : { // windows
      user : 'pi',
      host : process.env.HOST,
      ref  : 'origin/production',
      repo : 'https://github.com/DAVE4547/URL-Shortener.git',
      path : './projects/production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js && pm2 save',
      'pre-setup': ''
    }
  }
}