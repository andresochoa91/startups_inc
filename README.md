# startups_inc
1. Run `mysql.server start` to run MySQL DB server
2. Run `./server.sh` inside your project root directory to set up server and database
* In MySQL db user, if you don't have one, type `root`
* In database password, if you don't have one, leave blank
3. run `source ./server2.sh` inside your project root directory to access startups_inc commands
* `startups_inc db` : To access startups_inc database
* `startups_inc dump_db` : To dump database with new inputs
4. `yarn dev` to run node server
5. When a new typeorm entity is created to connect our server with the database, in index.ts in src directory, we should change synchronize to true, this is located in the createConnection.
```
await createConnection({
    type: "mysql",
    database: "startups_inc",
    username: "root",
    password: "",
    **logging: true,**
    synchronize: false,
    entities: [User, Photo],
});
```
    
