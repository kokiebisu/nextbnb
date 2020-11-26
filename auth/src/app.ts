import express, { json } from 'express';
require('express-async-errors');
import { currentUserRouter } from './routes/current_user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@doitsimple/shared';
import cookieSession from 'cookie-session';

const app = express();

// traffic will be proxied by ingress
// make sure express trusts the proxy
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // not encrypted
    secure: true, // must be on https connection
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
