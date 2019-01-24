import express from 'express';
import https from 'https';
import * as fs from "fs";

const app: express.Application = express();
const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'test'
}, app);

app.get('/', function (req: express.Request, res: express.Response) {
    res.send(`Hello world`);
});

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});