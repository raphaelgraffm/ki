<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Accueil - KI</title>
        <meta name="description" content="">
<!--         <meta name="viewport" content="width=device-width, initial-scale=1"> -->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" media="all" href="css/large/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <div id="fond"></div>
        <!-- Navigation principale -->
        <div id="navigation">
            <nav id="nav-principale">
                <?php include 'html/layout/logo.php'; ?>
                <div id="nav-principale-fond"></div>
                <ul>
                    <li id="accueil"><a href="index.php" data-titre="Accueil - KI">Accueil</a></li>
                    <li id="activites"><a href="#" class="unclickable"><img src="img/layout/fleche.svg" style="height:1em;"/> Activités</a></li>
                    <li id="membres"><a href="membres.php" data-titre="Membres - KI">Membres</a></li>
                    <li id="depannage"><a href="depannage.php" data-titre="Nous contacter - KI">Contact</a></li>
                </ul>
            </nav>
            <nav id="nav-activites" class="nav-secondaire">
                <ul>
                    <li id="formations"><a href="formations.php" data-titre="Nos Formations - KI">Formations</a></li>
                    <li id="lan"><a href="lan.php" data-titre="Jeux Vidéos - KI">Jeux vidéos</a></li>
                    <li id="upont"><a href="upont.php" data-titre="La plateforme uPont - KI">uPont</a></li>
                </ul>
            </nav>
            <div id="nav-hover"></div>
        </div>

        <!-- Navigation flottante -->
        <div id="nav-flottante">
            <nav id="flot-principale">
                <div id="flot-nav-titre">Nos Formations</div>
                <ul class="clearfix">
                    <li id="flot-depannage"><a href="depannage.php" data-titre="Nous contacter - KI">Contact</a></li>
                    <li id="flot-membres"><a href="membres.php" data-titre="Membres - KI">Membres</a></li>
                    <li id="flot-activites"><a href="#" class="unclickable"><img src="img/layout/fleche.svg" style="height:1em;"/> Activités</a></li>
                    <li id="flot-accueil"><a href="index.php" data-titre="Accueil - KI">Accueil</a></li>
                </ul>
            </nav>
            <nav id="flot-activites" class="flot-secondaire">
                <ul class="clearfix">
                    <li id="flot-empty"></li>
                    <li id="flot-upont"><a href="upont.php" data-titre="La plateforme uPont - KI">uPont</a></li>
                    <li id="flot-lan"><a href="lan.php" data-titre="Jeux Vidéos - KI">Jeux vidéos</a></li>
                    <li id="flot-formations"><a href="formations.php" data-titre="Nos Formations - KI">Formations</a></li>
                </ul>
            </nav>
        </div>

        <div id="central"></div>


        <main>
        <div id="switchable">