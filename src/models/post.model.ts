import { ObjectId } from '../deps.ts';
import { client } from '../utils/connectDB.ts';

export interface PostSchema {
  _id?: ObjectId;
  title: string;
  content: string;
  category: string;
  user: ObjectId;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
const db = client.database("test");
export const Post = db.collection<PostSchema>('posts');
