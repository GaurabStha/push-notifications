const express = require('express');
const push = require('web-push');
const app = express();

// app.use(express.static('./app'));
// app.get('/', (req, res) => {
//     app.get('/', function(req, res) {
//         res.render('index.html');
//     });
// });

let vapidKeys = {
    publicKey: 'BNBAt-CItQKq7rOT3SibPF9HVv70peMAirxLrrNVFsSatt3FvsUJygD9tuZWaBH_A3CinHn7580Ler6tAYi9ALs',
    privateKey: 'TLlGgtMcPm9ETj_h2mYbQfYLQZCmcUFKOm3n6ST3v2U'
}

push.setVapidDetails('mailto:gaurabian111@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');

// Listen to the server
// app.listen(8001, () => {
//     console.log('The server is running at port 8001.');
// });