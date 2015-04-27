var express = require('express');
var router = express.Router();
var app;

//GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SAIO - Simplifiez votre relation client digitale' });
});

//GET knowledge page
router.get('/base-de-connaissances', function(req, res, next) {
  res.render('base-de-connaissances', { title: 'Base de connaissances SAIO - Facilitez les  échanges sur vos différents canaux de<br>communication' });
});

//GET chat auto page
router.get('/chat-automatique', function(req, res, next) {
  res.render('chat-automatique', { title: 'Chat automatique SAIO - Désengorgez vos centres de contact et réduisez vos coûts de support' });
});

//GET live chat page
router.get('/live-chat', function(req, res, next) {
  res.render('live-chat', { title: 'Live chat SAIO - Détectez les leads potentiels et augmentez le taux de conversion de votre site Internet' });
});

//GET business intel page
router.get('/business-intelligence', function(req, res, next) {
  res.render('business-intelligence', { title: 'Business Intelligence SAIO - Comprenez les besoins et attentes de vos visiteurs pour mieux y répondre' });
});

//GET society page
router.get('/societe', function(req, res, next) {
  res.render('societe', { title: 'Société SAIO - Découvrez qui se cache derrière SAIO' });
});

//GET recruitment page
router.get('/recrutement', function(req, res, next) {
  res.render('recrutement', { title: 'Recrutement SAIO - Rejoignez l\'aventure SAIO' });
});

//GET legal mentions page
router.get('/mentions-legales', function(req, res, next) {
  res.render('mentions-legales', { title: 'Mentions légales SAIO' });
});

//GET contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact SAIO - Contactez-nous !' });
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
