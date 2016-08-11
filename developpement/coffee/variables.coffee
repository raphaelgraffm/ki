	# jQuery variables
	$navigation = $('#navigation')
	$main = $('main')
	$fond = $('#fond')
	$window = $(window)
	$flottante = $('#nav-flottante')
	$switchable = $('#switchable')

	# Global variables
	root = exports ? this
	root.navigation_top = $('#nav-activites').css('top')
	root.main_top = $main.css('top')
	root.principal = $('#principal')
	root.principal_top = root.principal.offset().top
	root.deployed = false

	# Assure le fonctionnement des animations quand l'utilisateur resize
	$(window).resize ->
		$main.attr 'style', ""
		$navigation.attr 'style', ""
		root.navigation_top = $('#nav-activites').css('top')
		root.main_top = $main.css('top')
		root.principal_top = root.principal.offset().top
		return
