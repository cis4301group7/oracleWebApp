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

API connection info [here](https://github.com/oracle/node-oracledb/blob/master/doc/api.md)

## node-oracleDB Installation

On the client machine in which this web app runs on, prerequisite software may be required in order for node-oracledb driver to properly work (such as Oracle Database Instant Client).

Check the Install [Instructions](https://github.com/oracle/node-oracledb/blob/master/INSTALL.md) for node-oracledb to see what may be required on your system for the driver.

Oracle Instant Client Download [page](https://www.oracle.com/technetwork/topics/winx64soft-089540.html#ic_winx64_inst) for Windows.

More Documentation on installing the Oracle Database Instant Client can be found [here](https://docs.oracle.com/cd/E83411_01/OREAD/installing-oracle-database-instant-client.htm#OREAD246).
