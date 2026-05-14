import express from 'express';
import routes from './routes';

const app = express();

const [, , database] = process.argv;
app.locals.database = database;

app.use('/', routes);

app.listen(1245);

export default app;
