// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express()
// const port = 3000

// function sendMail(){
//     return new Promise((resolve , reject) => {

//         var transport = nodemailer.createTransport({
//             service:'gmail',
//             auth:{
//                 user:'myemail',
//                 pass:'mypassword'
//             }
//         })

//         const mail_configs = {
//             from:'myemail',
//             to:'taibann00@gmail.com',
//             subject:'Testing Herbs 101 Email',
//             text:'just checking if this email will be sent'
//         }
//         transporter.sendMail(mail_configs, function(error, info) {
//             if(error){
//                 console.log(error)
//                 return reject({message:`An error has occured`})
//             }
//                 return resolve({message:"Email sent successfully"})
//         })
//     })
// }


// app.get('/',(req,res) => {

//     sendMail()
//     .then(response => res.send(response.message))
//     .catch(error => res.status(500).send(error.message))
// })
// // app.listen(port, () => {
// //     console.log(`nodemailerProject is listening at http://localhost:${port}`)
// // })


// const nodemailer = require("nodemailer");

// const html = `
//     <h1>Hello world<h1/>
//     <p>Isn't Nodemailer useful</p>
// `;

// async function main() {

//     const transporter = nodemailer.createTransport({
//         host: 'taibann00@gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'callmetrot00@gmail.com',
//             pass: 'qwerty00$'
//         }
//     });
//     const info = await transporter.sendMail({
//         from: 'HerbsBots <callmetrot00@gmail.com>',
//         to: 'taibann00@gmail.com',
//         subject: 'Testing, testing, 123',
//         html: html,
//     })
//     console.log("Message sent: " + info.messageId);
// }

const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "taiban00@gmail.com",
            pass: "*********"
    }
});

let info = await transporter.sendMail({
    from: ' "Herbs" taibann00@gmail.com',
    to: 'olutai030@gmail.com',
    subject: 'hello',
    text: 'Hello world',
    html: '<b>Hello world</b>'
});
    console.log('Message sent: %s', info.messageId)
}

sendEmail();