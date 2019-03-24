# Oracle DB Connection

This folder structures the Oracle DB connection of the web app.

## DB Config Credentials

The config details for Oracle's DB will be stored in 'config/config.js' - this file is hidden by 
```
.gitignore
```

A fresh config.js must be created in this folder for the credentials to be automatically recognized. A copy of 'config.example.js' can be used, renamed and altered with specific login credentials.

## node-oracledb Driver Documentation

Database connection driver full documentation can be found: [Here](https://oracle.github.io/node-oracledb/doc/api.html)

Examples for the OracleDB driver can be found: [OracleDB](https://github.com/oracle/node-oracledb/tree/master/examples)
