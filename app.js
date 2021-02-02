import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { router as videoRouter } from './src/js/videos.js';
import videoAge from './src/js/age.js';
import videoDuration from './src/js/duration.js';

const app = express();

const host = '127.0.0.1';
const port = 3000;
const path = dirname(fileURLToPath(import.meta.url));

app.locals.importantize = (str) => `${str}!`;
app.locals.age = videoAge;
app.locals.duration = videoDuration;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(join(path, './public')));

app.use('/', videoRouter);

/**
 * Middleware sem sér um 404 villur.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Fannst ekki';
  const message = 'Síða fannst ekki';
  res.status(404).render('error', { title, message });
}

/**
 * Middleware sem sér um villumeðhöndlun.
 *
 * @param {object} err Villa sem kom upp
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`Server @ http://${host}:${port}/`); // eslint-disable-line
});
