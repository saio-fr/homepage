<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>SAIO - Simplifiez votre relation client digitale</title>
	<!--[if lt IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script src="dist/html5shiv.js"></script>
            <![endif]-->
            <link rel="icon" type="image/png" href="images/favicon_saio.png">
            <meta http-equiv="content-type" content="text/html; charset=UTF-8">
            <link rel="stylesheet" href="css/reset.css" type="text/css">
            <link rel="stylesheet" href="css/style.css" type="text/css">
		<!--[if IE]>
    	<link type="text/css" rel="stylesheet" href="css/style-ie.css" />
    	<![endif]-->
		<meta name="viewport" content="width=device-width, maximum-scale=1" />
    	<meta name="keywords" content="SAIO, base de connaissances, chat automatique, live chat, business intelligence"/>
    	<meta name="description" content="SAIO"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>

        <header>
        	<nav>
        		<div class="wrapper">
        			<a href="index.html"><img src="images/logo_saio.png"></a>
        			<ul>
        				<li><a href="#">Solutions</a></li>
        				<li><a href="societe.html">Société</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <a href="http://www.saio.fr/login"><div class="button">Connexion</div></a>
    					<div class="selector">
    						<a href="#">FR<div class="arrow"></div></a>
    						<ul class="lang_select">
    							<li class="lang_active"><a href="#">FR</a></li>
    							<li><a href="#">EN</a></li>
    							<li><a href="#">ES</a></li>
    						</ul>
    					</div>
        			</ul>
        			
        		</div>
        	</nav>
        </header>

    	<!--Home-->
    	<section id="punchline" class="contact">

    		<div class="wrapper">
    			<div class="contact-us">
    		          <h1>Contactez-nous !</h1>
                      <img src="images/avatars-contact.svg" alt="Contactez-nous">
		        </div>

				<?php
				    $email = $_POST['email'];
				    $message = $_POST['message'];
				    $from = 'From: SAIO'; 
				    $to = 'contact@saio.fr'; 
				    $subject = $_POST['select'];

				    $body = "E-Mail: $email\nMessage:\n$message";

				    if ($_POST['submit']) {
				        if (mail ($to, $subject, $body, $from)) { 
				        } 
				        else { 

				        }
				    }
				?>

                <form class="contact-form" method=POST action="contact.php">
                    <input type="email" name="email" placeholder="Votre adresse e-mail" size="30" required/>
                    <select name="select" class="selector">
                        <option value="Vos solutions m'intéressent" selected>Vos solutions m'intéressent</option>
                        <option value="Je souhaite travailler chez vous">Je souhaite travailler chez vous</option>
                        <option value="J'ai un problème">J'ai un problème</option>
                    </select>
                    <textarea name="message" placeholder="Votre message" required></textarea>
                    <input class="button" name="submit" type="submit" value="Envoyer">
                </form>

		    </div>

		</section>

        <section id="map">

            <div class="wrapper">
                <div class="contact-details">
                    <img src="images/localization.svg" alt="Localisation">
                    <p><strong>SAIO SAS</strong><br>44, rue Cauchy<br>94110 Arcueil<br><br>Tél : +33 1 55 01 04 37<br>E-mail : contact@saio.fr</p>
                </div>
            </div>

        </section>

        <section id="action" class="home">

            <h2>Demandez une démonstration personnalisée !</h2>
            <div class="test">
                <input type="text" name="mail" placeholder="Votre adresse e-mail" size="30"/>
                <div class="button">Demander un test</div>
             </div>

        </section>

        <footer>

            <div class="wrapper">
                <div class="logo">
                    <img class="logo" src="images/logo_saio.png">
                    <p>© SAIO 2015</p>
                </div>
                <div class="container">
                    <h3>Solutions</h3>
                    <p><a href="base-de-connaissances.html">Base de connaissances</a><br><a href="chat-automatique.html">Chat automatique</a><br><a href="live-chat.html">Live chat</a><br><a href="business-intelligence.html">Business Intelligence</a></p>
                </div>
                <div class="container">
                    <h3>En savoir plus</h3>
                    <p><a href="societe.html">Société</a><br><a href="recrutement/html">Recrutement</a><br><a href="mentions-legales.html">Mentions légales</a></p>
                </div>
                <div class="container">
                    <h3>Contact</h3>
                    <p>+33 1 55 01 04 37<br>contact@saio.fr<br>44, rue Cauchy<br>94 110 Arcueil</p>
                </div>
                <div class="social"></div>
            </div>

        </footer>


<script src="js/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<!--[if lt IE 9]>
    <script src="js/respond.min.js"></script>
<![endif]-->




</body>

</html>