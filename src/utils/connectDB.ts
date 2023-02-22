import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const client = new MongoClient();

// // Connecting to a Local Database
await client.connect("mongodb://127.0.0.1:27017");

// Connecting to a Mongo Atlas Database
// await client.connect({
//   db: "deno_mongodb",
//   tls: true,
//   servers: [
//     {
//       host: 'ac-d31euag-shard-00-01.nwqtn5o.mongodb.net',
//       port: 420,
//     },
//   ],
//   credential: {
//     username: "root",
//     password: "IhvkxnDwROpiDZpd",
//     db: "JSX",
//     mechanism: "SCRAM-SHA-1",
//   },
// });

// // Connect using srv url
// await client.connect(
//   "mongodb+srv://root:IhvkxnDwROpiDZpd@jsx.nwqtn5o.mongodb.net/?retryWrites=true&w=majority",
// );

export { client };
