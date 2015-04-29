var express = require('express');
var router = express.Router();
var app;

//GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SAIO - Simplifiez votre relation client digitale', description : 'SAIO vous aide à comprendre et répondre aux attentes de vos visiteurs !'});
});

//GET knowledge page
router.get('/base-de-connaissances', function(req, res, next) {
  res.render('base-de-connaissances', { title: 'Base de connaissances SAIO - Facilitez les  échanges sur vos différents canaux de communication', description : 'Facilitez les échanges sur vos différents canaux de communication grâce à la base de connaissances SAIO.'});
});

//GET chat auto page
router.get('/chat-automatique', function(req, res, next) {
  res.render('chat-automatique', { title: 'Chat automatique SAIO - Désengorgez vos centres de contact et réduisez vos coûts de support', description : 'Répondez automatiquement à vos visiteurs grâce au chat automatique SAIO et concentrez-vous sur les questions qui comptent !'});
});

//GET live chat page
router.get('/live-chat', function(req, res, next) {
  res.render('live-chat', { title: 'Live chat SAIO - Détectez les leads potentiels et augmentez le taux de conversion de votre site Internet', description : 'Engagez le dialogue avec le bon visiteur au bon moment grâce au live chat SAIO.'});
});

//GET business intel page
router.get('/business-intelligence', function(req, res, next) {
  res.render('business-intelligence', { title: 'Business Intelligence SAIO - Comprenez les besoins et attentes de vos visiteurs pour mieux y répondre', description : 'Récupérez tous les informations pertinentes grâce à la Business Intellignece SAIO.'});
});

//GET society page
router.get('/societe', function(req, res, next) {
  res.render('societe', { title: 'Société SAIO - Découvrez qui se cache derrière SAIO', description : 'Créée en avril 2014, SAIO ambitionne de révolutionner le service client digital. Notre mission est de simplifier la façon dont les entreprises et leurs clients communiquent et interagissent sur le web.'});
});

//GET recruitment page
router.get('/recrutement', function(req, res, next) {
  res.render('recrutement', { title: 'Recrutement SAIO - Rejoignez l\'aventure SAIO', description : ''});
});

//GET legal mentions page
router.get('/mentions-legales', function(req, res, next) {
  res.render('mentions-legales', { title: 'Mentions légales SAIO', description : 'Le site www.saio.fr est une publication de SAIO SAS, société par actions simplifiées au capital de 20 000€, ayant son siège social au : 9 rue Charles Fourier 91000 Evry.'});
});

//GET contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact SAIO - Contactez-nous !', description : 'SAIO SAS - 44, rue Cauchy 94110 Arcueil - Tél : +33 1 55 01 04 37 - E-mail : contact@saio.fr'});
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
