Using

- Typescript
- Node.js (express.js, https, fs)

Note: Self signed certificate using openSSL

`openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365`

> refer [this](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/) for better selfsigned certs 

To start the program `npm start`