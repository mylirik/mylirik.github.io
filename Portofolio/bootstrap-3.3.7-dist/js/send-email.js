var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aristotelessiregar86@gmail.com',
        pass: 'vdgsepugkkapbzqm'
    }
});

var mailOptions = {
    from: 'aristotelessiregar86@gmail.com',
    to: 'aristotelessiregar89@gmail.com',
    subject: 'Daisuki',
    text: 'Nai'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});