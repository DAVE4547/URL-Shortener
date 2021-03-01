module.exports = {
  apps : [{
    name: 'api',
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    server : {
      user : 'root',
      host : '157.245.44.125',
      ref  : 'origin/master',
      repo : 'https://github.com/DAVE4547/express-test.git',
      path : '/projects/pm2',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
