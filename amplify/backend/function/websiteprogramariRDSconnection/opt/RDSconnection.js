const AWS = require('aws-sdk');
//const Context = 
//import { Context } from 'aws-lambda';
const Knex  = require('knex');
//import { Knex} from 'knex';


AWS.config.update({
    region: 'eu-west-3',
});

// these can be specified in the AWS console, in the lambda function environment parameters
// const host = 'iulia-programari-database.cha9omxituke.eu-west-3.rds.amazonaws.com';
// const user = 'admin';
// const password = 'lucUCL10';
// const database = 'iulia-programari';
// const port = '3306';

/// Like this:
const host = process.env.host;
const user = process.env.user;
const password = process.env.password;
const database = process.env.database;
const port = process.env.port;


// add connection params to a "connection" object
const connection = {
    ssl: { rejectUnauthorized: false},
    host,
    user,
    password,
    database,
    port,
};

 // create connection to mysql database
exports.knex = Knex({
    client: 'mysql',
    connection,
});
