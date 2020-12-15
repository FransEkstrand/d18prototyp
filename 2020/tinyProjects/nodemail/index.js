const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});




















let message = ""
for (let i = 0; i < 99; i++) {
    if (i < 98) {
        message = message + "Frans Ekstrand \n"
    } else {
        let mailDetails = {
            from: 'frans.ekstrand@gmail.com',
            to: 'frans.ekstrand2@gmail.com',
            subject: 'Test mail',
            text: 'Nå ja, klart he' + message
        };

        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log('Error Occurs' + err);
            } else {
                console.log('Email sent successfully');
            }
        });
    }

}


// let mailDetails = {
//     from: 'frans.ekstrand@gmail.com',
//     to: 'markus.sallinen@optimaedu.fi',
//     subject: 'Test mail',
//     text: 'Nå ja, klart he' + message
// };

// mailTransporter.sendMail(mailDetails, function (err, data) {
//     if (err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });
