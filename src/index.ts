import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { User } from "./Entities/User";
import { Photo } from "./Entities/Photo";

(async () => {
  await createConnection({
    type: "mysql",
    database: "startups_inc",
    username: "root",
    password: "",
    logging: true,
    synchronize: true,
    entities: [User, Photo],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => console.log("Server running on port 3001"));
})().catch(console.log);
