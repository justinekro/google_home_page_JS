// Première partie : afficher les éléments de la page

let monBouton = document.querySelector('button');
let monLogo = document.getElementById('logo');
let maSearchBar = document.getElementById('searchbar');
let searchButton = document.getElementById('searchbutton');


monBouton.onclick = function() {
	
		monLogo.style.display ="flex";
		maSearchBar.style.display ="flex";
		searchButton.style.display ="flex";
		monBouton.style.display="none";

}

// Deuxième partie : renvoyer vers Google


let monBoutonDeRecherche = document.getElementById("googlesearch") ;


function recherche() {

	let maRecherche = document.getElementById("recherche").value;
	window.location = "http://www.google.fr/search?q=" + maRecherche ;

}

monBoutonDeRecherche.onclick = function() {
	recherche ();

}

// Troisième partie : créer une fenêtre popup
