require('dotenv').config()
const url = 'mongodb+srv://edielam:*qjwa7JC-eeu!Nt@miawe.ajy3wvd.mongodb.net/?retryWrites=true&w=majority';
const JWT = '7tgdyhvhavdug'
const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: JWT || process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: url || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') +
    '/mernproject'
   }
export default config