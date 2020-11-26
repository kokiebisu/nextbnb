import express, { Request, Response } from 'express';
import { BadRequestError } from '@doitsimple/shared';
import { User } from '../models/user';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordMatch = await Password.compare(existingUser.password, password);

  if (!passwordMatch) {
    throw new BadRequestError("Password didn't match");
  }

  const userJwt = jwt.sign(
    { id: existingUser.id, email: existingUser.email },
    process.env.JWT_KEY!
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(200).send(existingUser);
});

export { router as signinRouter };
