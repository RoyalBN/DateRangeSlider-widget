TW.Runtime.Widgets.daterangeslider= function () {
	var valueElem;
	var displayDebut;
	var displayFin;
	var widget = this;
	
	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName). In
		// this example, we'll just return static HTML
		return 	'<div class="widget-content widget-daterangeslider">' +
					'<span class="daterangeslider-property">' + this.getProperty('DateRangeSlider Property') + '</span>' +
					'<div class="thumbnail-container">' +
						'<div class="item"> <p id="date1"> </p>' +
							'<div class="button-container">' +
								'<button id="h0-0" class="h0"> 00H </button>' +
								'<button id="h0-6" class="h6"> 6H </button>' +
								'<button id="h0-12" class="h12"> 12H </button>' +
								'<button id="h0-18" class="h18"> 18H </button>' +
							'</div>' +
						'</div>' +	 
						'<div class="item"> <p id="date2"></p>' + 
							'<div class="button-container">' +
								'<button id="h1-0" class="h0"> 00H </button>' +
								'<button id="h1-6" class="h6"> 6H </button>' +
								'<button id="h1-12" class="h12"> 12H </button>' +
								'<button id="h1-18" class="h18"> 18H </button>' +
							'</div>' +
						'</div>' +
						'<div class="item"> <p id="date3"></p>' +
							'<div class="button-container">' +
								'<button id="h2-0" class="h0"> 00H </button>' +
								'<button id="h2-6" class="h6"> 6H </button>' +
								'<button id="h2-12" class="h12"> 12H </button>' +
								'<button id="h2-18" class="h18"> 18H </button>' +
							'</div>' +
						'</div>' +
						'<div class="item"> <p id="date4"></p>' +
							'<div class="button-container">' +
								'<button id="h3-0" class="h0"> 00H </button>' +
								'<button id="h3-6" class="h6"> 6H </button>' +
								'<button id="h3-12" class="h12"> 12H </button>' +
								'<button id="h3-18" class="h18"> 18H </button>' +
							'</div>' +
						'</div>' +
						'<div class="item"> <p id="date5"></p>' +
							'<div class="button-container">' +
								'<button id="h4-0" class="h0"> 00H </button>' +
								'<button id="h4-6" class="h6"> 6H </button>' +
								'<button id="h4-12" class="h12"> 12H </button>' +
								'<button id="h4-18" class="h18"> 18H </button>' +
							'</div>' +
						'</div>' +
					'</div> <br><br> ' +
					'<div class="dateButton">' +
						'<input type="radio" id="dateDebut" class="dateDebut" name="date" checked><label for="dateDebut">Date Début : </label>' +
						'<label id="dateDebutDisplay" class="dateDebutDisplay">' + this.getProperty('DateDebut') + '</label> <br><br>' +
						'<input type="radio" id="dateFin" class="dateFin" name="date"><label for="dateFin">Date Fin : </label>' +
						'<label id="dateFinDisplay" class="dateFinDisplay">' + this.getProperty('DateFin') + '</label>' +
					'</div>' +
				'</div>';
	};

	
	
	
	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
		widgetElement = this.jqElement;
		// get a reference to the value element
		valueElem = this.jqElement.find('.daterangeslider-property');
		// update that DOM element based on the property value that the user set
		// in the mashup builder
		valueElem.text(this.getProperty('DateRangeSlider Property'));
		
		// Affichage Date Début
		displayDebut = this.jqElement.find('.dateDebutDisplay');
		displayDebut.text(this.getProperty('DateDebut'));
		
		// Affichage Date Fin
		displayFin = this.jqElement.find('.dateFinDisplay');
		displayFin.text(this.getProperty('DateFin'));
		
		//****************************
		// 	  AFFICHAGE DATES
		//****************************
		var n =  new Date();
		var y = n.getFullYear();
		var m = n.getMonth() + 1;
		var d = n.getDate();
		var i = 0;
		var k = 0;
		for (i=1; i<6; i++) {
		    document.getElementById("date"+i).innerHTML = d + "/" + m;
		    d++;
		}


		//*************************
		// 	CHARGEMENT PROPERTIES
		//*************************
		var dateDebut = this.getProperty('DateDebut');
		var dateFin = this.getProperty('DateFin');
		var debutChecked = this.getProperty('DateDebutChecked');
		var finChecked = this.getProperty('DateFinChecked');
		
		
		//****************************
		// 	 GESTION BOUTONS RADIOS
		//****************************
		var radioDebut = widgetElement.find('.dateDebut');
		radioDebut.on('click',function (event) {
			debutChecked = true;
			finChecked = false;
		});
		
		var radioFin = widgetElement.find('.dateFin');
		radioFin.on('click',function (event) {
			debutChecked = false;
			finChecked = true;
		});
		

		//****************************
		// 	 BOUTONS EVENT HANDLER
		//****************************
		var numbT =  new Date();
		var monthsT = numbT.getMonth() + 1;
		var daysT = numbT.getDate();
		
		function printDate(ind_jour, ind_heure){
			switch(debutChecked){
				
				case true :
					var str = parseInt(daysT) + ind_jour + "/" + monthsT + " à " + ind_heure;
					var resp = str.toString(); 
					
					var getFin = widget.getProperty('DateFin');
					var finJour = getFin.substring(0,2);
					var finMois = getFin.substring(3,5);
					var finHeures = parseInt(getFin.slice(-3));
					var indHeures = parseInt(ind_heure);
					
					// Vérifier SI DateDebut > DateFin
					if(parseInt(daysT)+ind_jour > finJour ){
						widget.setProperty('DateDebut', 'La date de début doit être avant la fin');
						document.getElementById("dateDebutDisplay").innerHTML = 'La date de début doit être avant la fin';
					}
					else if(parseInt(daysT)+ind_jour == finJour && indHeures > finHeures){
						widget.setProperty('DateDebut', 'La date de début doit être avant la fin');
						document.getElementById("dateDebutDisplay").innerHTML = 'La date de début doit être avant la fin';
					}
					else {
						widget.setProperty('DateDebut', resp);
						document.getElementById("dateDebutDisplay").innerHTML = resp;
					}
					break;
				
					
				case false :
					var str = parseInt(daysT) + ind_jour + "/" + monthsT + " à " + ind_heure;
					var resp = str.toString();
					
					var getDebut = widget.getProperty('DateDebut');
					var debJour = getDebut.substring(0,2);
					var debMois = getDebut.substring(3,5);
					var debHeures = parseInt(getDebut.slice(-3));
					var indHeures = parseInt(ind_heure);
					
					// Vérifier SI DateFin < DateDebut
					if(parseInt(daysT)+ind_jour < debJour ){
						widget.setProperty('DateFin', 'La date de fin doit être après le début');
						document.getElementById("dateFinDisplay").innerHTML = 'La date de fin doit être après le début';
					}
					else if(parseInt(daysT)+ind_jour == debJour && indHeures < debHeures){
						widget.setProperty('DateFin', 'La date de fin doit être après le début');
						document.getElementById("dateFinDisplay").innerHTML = 'La date de fin doit être après le début';
					}
					else {
						widget.setProperty('DateFin', resp);
						document.getElementById("dateFinDisplay").innerHTML = resp;
					}
					break;
					
			}
		}
		
		
		//****************************
		// 	  ADD EVENTS BOUTONS
		//****************************
		//*********
		//   00H
		//*********
		var Button0H = document.getElementsByClassName("h0");
		Button0H[0].addEventListener("click", function() { printDate(0, "00H");});
		Button0H[1].addEventListener("click", function() { printDate(1, "00H");});
		Button0H[2].addEventListener("click", function() { printDate(2, "00H");});
		Button0H[3].addEventListener("click", function() { printDate(3, "00H");});  
		Button0H[4].addEventListener("click", function() { printDate(4, "00H");});
		
		//*********
		//   6H
		//*********
		var Button6H = document.getElementsByClassName("h6");
		Button6H[0].addEventListener("click", function() { printDate(0, "6H");});
		Button6H[1].addEventListener("click", function() { printDate(1, "6H");});
		Button6H[2].addEventListener("click", function() { printDate(2, "6H");});
		Button6H[3].addEventListener("click", function() { printDate(3, "6H");});  
		Button6H[4].addEventListener("click", function() { printDate(4, "6H");});
	
		//*********
		//   12H
		//*********		
		var Button12H = document.getElementsByClassName("h12");
		Button12H[0].addEventListener("click", function() { printDate(0, "12H");});
		Button12H[1].addEventListener("click", function() { printDate(1, "12H");});
		Button12H[2].addEventListener("click", function() { printDate(2, "12H");});
		Button12H[3].addEventListener("click", function() { printDate(3, "12H");});  
		Button12H[4].addEventListener("click", function() { printDate(4, "12H");});
		
		//*********
		//   18H
		//*********
		var Button18H = document.getElementsByClassName("h18");
		Button18H[0].addEventListener("click", function() { printDate(0, "18H");});
		Button18H[1].addEventListener("click", function() { printDate(1, "18H");});
		Button18H[2].addEventListener("click", function() { printDate(2, "18H");});
		Button18H[3].addEventListener("click", function() { printDate(3, "18H");});  
		Button18H[4].addEventListener("click", function() { printDate(4, "18H");});
		
		
	};

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'DateRangeSlider Property') {
			valueElem.text(updatePropertyInfo.SinglePropertyValue);
			this.setProperty('DateRangeSlider Property', updatePropertyInfo.SinglePropertyValue);
		}
		
		
		if (updatePropertyInfo.TargetProperty === 'DateDebut'){
			displayDebut.text(updatePropertyInfo.SinglePropertyValue);
			this.setProperty('DateDebut', updatePropertyInfo.SinglePropertyValue);
		}
		
		if (updatePropertyInfo.TargetProperty === 'DateFin'){
			displayFin.text(updatePropertyInfo.SinglePropertyValue);
			this.setProperty('DateFin', updatePropertyInfo.SinglePropertyValue);
		}
		

	};
};