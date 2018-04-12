const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 3001;
const path = require("path");
const crypto = require("crypto");
const {OAuth2Client} = require('google-auth-library');
const G_CLIENT_ID = "406419867255-aiscktvrh9qgf35pi1602b5pmt15040g.apps.googleusercontent.com";
const gClient = new OAuth2Client(G_CLIENT_ID);

http.listen(port, () => {
    console.log("listening on port", port);
});

app.use(express.static(path.join(__dirname, "../build")));

const state = {
    users: {},
    games: []
};

io.on("connection", socket => {
    console.log("User Connected!");
    let UserToken; // This is the userToken for the user related to THIS socket

    socket.on("authenticate", (userToken, sendResponse) => {
        UserToken = userToken;
        console.log("got authenticate event")
        verifyToken(UserToken).then(userData => {
            console.log("Got user:", userData);
        }).catch(error => {
            console.log("Bad things happened", error);
        });
        sendResponse({action: "newUser"});
    });
});

async function verifyToken(idToken) {
    const ticket = await gClient.verifyIdToken({
        idToken,
        audience: G_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    const name = payload['given_name'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
    return {userid, name};
  }
