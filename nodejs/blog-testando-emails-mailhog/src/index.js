const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port: '1025',
  auth: null
});

transport.sendMail({
  from: 'Leonardo Anjos <leodrums11@gmail.com',
  to: 'Eu mesmo <leodrums11@gmail.com',
  subject: 'Testando Mailhog',
  html: '<h1>Funcionou!</h1>'
})