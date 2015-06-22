var express = require('express');
var router = express.Router();
var mcapi = require('../node_modules/mailchimp-api/mailchimp');

var app = express();
var config;

//set MailChimp API
var apiKey = '79da343dd12c89bd64a54738b89c1260-us10';
var listId = 'b7ada5d04a';
var mc = new mcapi.Mailchimp(apiKey, {version: '2.0'});

//Permanent redirections

router.get('*', function (req, res, next) {
  var path = '/' + req.path.replace('/','');
  if (req.hostname === 'www.saio.fr') {
    res.redirect(301, 'http://saio.fr' + path); 
  }
  else {
    next();
  }
});

//GET home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SAIO - Simplifiez votre relation client digitale', description : 'SAIO vous aide à comprendre et répondre aux attentes de vos visiteurs !', url : config.urlDomain, route : ''});
});

//GET knowledge page
router.get('/base-de-connaissances', function (req, res, next) {
  res.render('base-de-connaissances', { title: 'Base de connaissances SAIO - Facilitez les  échanges sur vos différents canaux de communication', description : 'Facilitez les échanges sur vos différents canaux de communication grâce à la base de connaissances SAIO.', url : config.urlDomain, route : 'base-de-connaissances'});
});

//GET chat auto page
router.get('/chat-automatique', function (req, res, next) {
  res.render('chat-automatique', { title: 'Chat automatique SAIO - Désengorgez vos centres de contact et réduisez vos coûts de support', description : 'Répondez automatiquement à vos visiteurs grâce au chat automatique SAIO et concentrez-vous sur les questions qui comptent !', url : config.urlDomain, route : 'chat-automatique'});
});

//GET live chat page
router.get('/live-chat', function (req, res, next) {
  res.render('live-chat', { title: 'Live chat SAIO - Détectez les leads potentiels et augmentez le taux de conversion de votre site Internet', description : 'Engagez le dialogue avec le bon visiteur au bon moment grâce au live chat SAIO.', url : config.urlDomain, route : 'live-chat'});
});

//GET business intel page
router.get('/business-intelligence', function (req, res, next) {
  res.render('business-intelligence', { title: 'Business Intelligence SAIO - Comprenez les besoins et attentes de vos visiteurs pour mieux y répondre', description : 'Récupérez tous les informations pertinentes grâce à la Business Intelligence SAIO.', url : config.urlDomain, route : 'business-intelligence'});
});

//GET society page
router.get('/societe', function (req, res, next) {
  res.render('societe', { title: 'Société SAIO - Découvrez qui se cache derrière SAIO', description : 'Créée en avril 2014, SAIO ambitionne de révolutionner le service client digital. Notre mission est de simplifier la façon dont les entreprises et leurs clients communiquent et interagissent sur le web.', url : config.urlDomain, route : 'societe'});
});

//GET partners page
router.get('/partenaires', function (req, res, next) {
  res.render('partenaires', { title: 'Partenaires SAIO - Faites confiance à nos partenaires !', description : 'De la définition de vos besoins jusqu’au suivi de vos performances, les partenaires SAIO vous accompagnent au quotidien', url : config.urlDomain, route : ''});
});

//GET recruitment page
router.get('/recrutement', function (req, res, next) {
  res.render('recrutement', { title: 'Recrutement SAIO - Rejoignez l\'aventure SAIO', description : '', url : config.urlDomain, route : ''});
});

//GET legal mentions page
router.get('/mentions-legales', function (req, res, next) {
  res.render('mentions-legales', { title: 'Mentions légales SAIO', description : 'Le site www.saio.fr est une publication de SAIO SAS, société par actions simplifiées au capital de 20 000€, ayant son siège social au : 9 rue Charles Fourier 91000 Evry.', url : config.urlDomain, route : ''});
});

//GET contact page
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact SAIO - Contactez-nous !', description : 'SAIO SAS - 44, rue Cauchy 94110 Arcueil - Tél : +33 1 55 01 04 37 - E-mail : contact@saio.fr', url : config.urlDomain, route : ''});
});

//GET pricing page
router.get('/pricing', function (req, res, next) {
  res.render('pricing', { title: 'Pricing SAIO', description : '', url : config.urlDomain, route : ''});
});

//GET login
router.get('/login', function (req, res, next) {
  res.redirect('http://lily.saio.fr/login');
});

//GET 404 page
router.get('*',function (req, res, next) {
  res.render('404', { title: 'SAIO - Simplifiez votre relation client digitale', description : 'SAIO vous aide à comprendre et répondre aux attentes de vos visiteurs !', url : config.urlDomain, route : ''});
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//send mail
router.post('/mail', function (req, res, next){

  //contact request
  if (!!req.body.email && !!req.body.message) {

    console.log('contact demand sending');

    var mcReq = {
        apikey: apiKey,
        id: listId,
        email: {email: req.body.email},
        'double_optin': false
    }
    //submit subscription request to mail chimp
    mc.lists.subscribe(mcReq, function (data) {
        console.log(data);
    }, function(error) {
        console.log(error);
    });

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
        console.log('contact demand send');
    });
  }

  //test request
  if (!!req.body.test) {

    console.log('test demand sending');

    var mcReq = {
        apikey: apiKey,
        id: listId,
        email: {email: req.body.test},
        'double_optin': false
    }

    //submit subscription request to mail chimp
    mc.lists.subscribe(mcReq, function (data) {
        console.log(data);
    }, function(error) {
        console.log(error);
    });

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
        console.log('test demand send');
    });
  };

  //partner request
  if (!!req.body.company) {

    console.log('partner demand sending');

    var mcReq = {
        apikey: apiKey,
        id: listId,
        email: {email: req.body.email},
        merge_vars: {
            LNAME: req.body.lname,
            COMPANY: req.body.company
        },
        'double_optin': false
    }
    //submit subscription request to mail chimp
    mc.lists.subscribe(mcReq, function (data) {
        console.log(data);
    }, function(error) {
        console.log(error);
    });

    app.mailer.send('mail', {
        to: 'nicolas.mitchell@saio.fr',
        subject: req.body.company + ' - Demande de partenariat',
        email: 'Je souhaite que l\'on parle affaires, voici mon nom : ' + req.body.lname + ' et mon e-mail : ' + req.body.email
      }, function (err) {
        if (err) {
          console.log(err);
          res.send('There was an error sending the test demand');
          return;
        }
        res.send(true);
        console.log('partner demand send');
    });
  };
});

module.exports = function (_app, _config) { 
  app = _app;
  config = _config;
  return router;
};
