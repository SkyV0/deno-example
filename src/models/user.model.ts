import { ObjectId } from '../deps.ts';
import { client } from '../utils/connectDB.ts';

interface UserSchema {
  _id?: ObjectId;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
const db = client.database("test");
export const User = db.collection<UserSchema>('users');
