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

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/eK0w9307ubE:APA91bGt9yFxm7mMVIa6qKvO4821p3u-rQkxHw5NL_uGbdr8EbuA03R8wVdsXsu4FejXIdWC2_fCajm9D6WS7A0KehrOeKDhlNm6p839vYxKPjRJc0eMjhhiRkUUR59a6XJxzdh4-Odu", "expirationTime": null, "keys": { "p256dh": "BGNNszVFTwMoX6gP7EjOIEhpC6xNvcT_fOybc6pCmmZ7NjNebacDMBov5avA9WrtXx4DIoPlnR_W-dH5Of0k7po", "auth": "uIDndhtmnZ2sPNIlEBxGkw" } };

push.sendNotification(sub, 'test message');

// Listen to the server
// app.listen(8001, () => {
//     console.log('The server is running at port 8001.');
// });