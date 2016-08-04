	# jQuery variables
	$navigation = $('#navigation')
	$main = $('main')

	# Global variables
	root = exports ? this
	root.navigation_top = $('#nav-activites').css('top')
	root.main_top = $main.css('top')

	# Assure le fonctionnement des animations quand l'utilisateur resize
	$(window).resize ->
		$main.attr 'style', ""
		$navigation.attr 'style', ""
		root.navigation_top = $('#nav-activites').css('top')
		root.main_top = $main.css('top')
		return
