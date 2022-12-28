import config from './../config/config'
import app from './express'
import mongoose from 'mongoose';
import Template from './../template'

app.listen(config.port, (err) => {
    if (err) {
    console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.get('/', (req, res) => {
    res.status(200).send(Template())
   })