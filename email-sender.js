
var nodemailer = require('nodemailer');
var { google } = require('googleapis');
var config = require('./config.js');
var OAuth2 = google.auth.OAuth2


var OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials( { refresh_token : config.refreshToken } )

function sendMail(name, recipient) {
    const accessToken = OAuth2_client.getAccessToken()

function get_html_message(name) {
    return `
        <h3> ${name}! Node is Awesome</h3> 
    `
}

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        }
    })

    const mailOptions = {
        from: `Jon Coy <${config.user}>`,
        to: recipient,
        subject: 'Test Email from Node.js using OAuth 2.0',
        html: get_html_message()
    }

    transport.sendMail(mailOptions, function(error, result) {
        if(error) {
            console.log('Error: ', error)
        } else {
            console.log('success: ', result)
        }
        transport.close()
    })
}
 

sendMail("Joe...mama", "himilog962@galcake.com")

// const mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "joncoy0505@gmail.com",
//         pass: "qwerty$@"
//     }
// });

// const mailDetails = {
//     from: "joncoy0505@gmail.com",
//     to: "olutai030@gmail.com",
//     subject: 'Test Email from Node.js',
//     text: 'Hello, this is a test email sent from a Node.js app.',
// }

// mailTransporter.sendMail(mailDetails, (err) => {
//     if(err){
//         console.log("it has an error", err)
//     }
//     else{
//         console.log("email sent!")
//     }
// });

// // const nodemailer = require('nodemailer')
// // const { google } = require('googleapis');
// // const { clientSecret } = require('./config');

// const CLIENT_ID = '744465084987-36dsign1m3phvnsua19bfjji8iarkip4.apps.googleusercontent.com'
// const CLIENT_SECRET = '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'
// const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN = '1//04j2FMr9WOPnECgYIARAAGAQSNwF-L9IrAurYDGkyWDolRdL6Wbw6SrD0GST42EedBmG28t8UzQlzenDWNSruc_gGY6BJq9mARoA'

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL) 
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

// async function sendMail() {

//   try {
//     const accessToken = await oAuth2Client.getAccessToken()

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'callmetrot00@gmail.com',
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken
//       }
//     })

//     const mailOptions = {
//       from: '<callmetrot00@gmail.com>',
//       to: '<himilog962@galcake.com>',
//       subject: "Hello from gmail using API",
//       text: 'Hello, this is a test email sent from a Node.js app using OAuth 2.0.',
//       html: '<h1>Hello, this is a test email sent from a Node.js app using OAuth 2.0.</h1>',
//     };

//     const result = await transport.sendMail(mailOptions)
//     return result


//   } catch (error) {
//     return error
//   }
// }

// sendMail().then((result)=> console.log('Email sent...', result))
// .catch((error) => console.log(error.message));