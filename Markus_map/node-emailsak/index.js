let passWord = ''









var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: passWord
    }
});

var mailOptions = {
    from: 'frans.ekstrand@gmail.com',
    to: 'isakextragrankulla@gmail.com',
    subject: 'not a spam email',
    text: 'it was working very much !',
    attachments: [{
        filename: 'retardedSonic.gif',
        path: 'retardedSonic.gif'
    }]
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});