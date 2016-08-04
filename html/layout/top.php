<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Accueil - KI</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" media="all" href="css/large/styles.css">
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
                    <li id="activites"><a href="#">Activités</a></li>
                    <li id="depannage"><a href="depannage.php" data-titre="Dépannage - KI">Dépannage</a></li>
                    <li id="rejoindre"><a href="rejoindre.php" data-titre="Nous rejoindre - KI"><span class="orange">Rejoindre le KI</span></a></li>
                </ul>
            </nav>
            <nav id="nav-activites" class="nav-secondaire">
                <ul>
                    <li id="formations"><a href="formations.php" data-titre="Nos Formations - KI">Formations</a></li>
                    <li id="lan"><a href="lan.php" data-titre="Les LAN - KI">LAN</a></li>
                    <li id="upont"><a href="upont.php" data-titre="La plateforme uPont - KI">uPont</a></li>
                </ul>
            </nav>
        </div>

        <div id="central"></div>


        <main>