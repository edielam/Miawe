import express from 'express';
import devBundle from './devBundle';

const app = express();
devBundle.compile(app); // this is only for dev't mode. Should be commented out in production
