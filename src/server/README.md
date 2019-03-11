# Back end

This server folder structures the back end workings of the web app.

## Express

Express is a web application framework for Node.js. It is used to build our backend API's.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

```javascript
const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(8080, () => console.log("Listening on port 8080!"));
```

This starts a server and listens on port 8080 for connections. The app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.

## OracleDB

The config details for Oracle's DB will be stored in 'config/config.js' - this file is hidden by 
```
.gitignore
```

Examples for the OracleDB driver can be found: [OracleDB](https://github.com/oracle/node-oracledb/tree/master/examples)