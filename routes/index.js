var express = require('express');
var router = express.Router();
var app;

//GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET knowledge page
router.get('/base-de-connaissances', function(req, res, next) {
  res.render('base-de-connaissances');
});

//GET chat auto page
router.get('/chat-automatique', function(req, res, next) {
  res.render('chat-automatique');
});

//GET live chat page
router.get('/live-chat', function(req, res, next) {
  res.render('live-chat');
});

//GET business intel page
router.get('/business-intelligence', function(req, res, next) {
  res.render('business-intelligence');
});

//GET society page
router.get('/societe', function(req, res, next) {
  res.render('societe');
});

//GET recruitment page
router.get('/recrutement', function(req, res, next) {
  res.render('recrutement');
});

//GET legal mentions page
router.get('/mentions-legales', function(req, res, next) {
  res.render('mentions-legales');
});

//GET contact page
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

//send mail contact
router.post('/mail', function(req, res, next){

  if (!!req.body.email && !!req.body.message) {
    app.mailer.send('mail', {
        to: 'contact@saio.fr',
        subject: req.body.subject,
        email: 'Envoyé par : ' + req.body.email,
        message: req.body.message
      }, function (err) {
        if (err) {
          console.log(err);
          res.send('There was an error sending the email');
          return;
        }
        res.send(true);
    });
  }
  if (!!req.body.test) {
    app.mailer.send('mail', {
        to: 'contact@saio.fr',
        subject: 'Demande de test',
        email: 'Je souhaite tester vos solutions, voici mon e-mail : ' + req.body.test
      }, function (err) {
        if (err) {
          console.log(err);
          res.send('There was an error sending the test demand');
          return;
        }
        res.send(true);
    });
  };
});

module.exports = function (_app) { 
  app = _app;
  return router;
};
