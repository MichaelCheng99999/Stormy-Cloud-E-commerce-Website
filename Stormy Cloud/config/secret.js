module.exports = {

  database: 'mongodb://root:abc123@ds021172.mlab.com:21172/ecommerce',
  port: 3000,
  secretKey: "Michael@$@!#@",

  facebook: {
    clientID: process.env.FACEBOOK_ID || '1740721116173216',
    clientSecret: process.env.FACEBOOK_SECRET || 'd25523181fbbba5ac4b10c41a5221235',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
}
