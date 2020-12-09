TW.IDE.Widgets.daterangeslider = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/DateRangeSlider/ui/daterangeslider/default_widget_icon.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'DateRangeSlider',
			'description': '',
			'category': ['Common'],
			'properties': {
				'DateRangeSlider Property': {
					'baseType': 'STRING',
					'defaultValue': 'DateRangeSlider Property default value',
					'isBindingTarget': true,
					'isBindingSource': true,
				},
				 'DateDebut': {
                    'baseType': 'STRING',
                    'defaultValue': 'Choisissez une date de debut',
                    'isBindingTarget': true,
                    'isBindingSource': true,
                    
                },
                 'DateFin': {
                    'baseType': 'STRING',
                    'isBindingSource': true,
                    'isBindingTarget': true,
                    'defaultValue': 'Choisissez une date de fin',
                },
                 'DateDebutChecked': {
                    'baseType': 'BOOLEAN',
                    'isBindingSource': false,
                    'defaultValue': true,
                },
                 'DateFinChecked': {
                    'baseType': 'BOOLEAN',
                    'isBindingSource': false,
                    'defaultValue': false,
                },
			}
		}
	};
	
	

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'Style':
			case 'DateRangeSlider Property':
				thisWidget.jqElement.find('.daterangeslider-property').text(value);
			case 'Alignment':
				refreshHtml = true;
				break;
			case 'DateDebut':
				thisWidget.jqElement.find('.dateDebutDisplay').text(value);
				refreshHtml = true;
				break;
			case 'DateFin':
				thisWidget.jqElement.find('.dateFinDisplay').text(value);
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-daterangeslider">' +
					'<span class="daterangeslider-property">' + this.getProperty('DateRangeSlider Property') + '</span>' +
					'<div class="thumbnail-container">' +
							'<div class="item"> <p id="date1"> </p>' +
							'<div class="button-container">' +
								'<button id="h0-0" class="h0-0"> 00H </button>' +
								'<button id="h0-6" class="h0-6"> 6H </button>' +
								'<button id="h0-12" class="h0-12"> 12H </button>' +
								'<button id="h0-18" class="h0-18"> 18H </button>' +
							'</div>' +
						'</div>' +	 
						'<div class="item"> <p id="date2"></p>' + 
							'<div class="button-container">' +
								'<button id="h1-0" class="h1-0"> 00H </button>' +
								'<button id="h1-6" class="h1-6"> 6H </button>' +
								'<button id="h1-12" class="h1-12"> 12H </button>' +
								'<button id="h1-18" class="h1-18"> 18H </button>' +
							'</div>' +
						'</div>' +
						'<div class="item"> <p id="date3"></p>' +
							'<div class="button-container">' +
								'<button id="h2-0" class="h2-0"> 00H </button>' +
								'<button id="h2-6" class="h2-6"> 6H </button>' +
								'<button id="h2-12" class="h2-12"> 12H </button>' +
								'<button id="h2-18" class="h2-18"> 18H </button>' +
							'</div>' +
						'</div>' +
						'<div class="item"> <p id="date4"></p>' +
							'<div class="button-container">' +
								'<button id="h3-0" class="h3-0"> 00H </button>' +
								'<button id="h3-6" class="h3-6"> 6H </button>' +
								'<button id="h3-12" class="h3-12"> 12H </button>' +
								'<button id="h3-18" class="h3-18"> 18H </button>' +
							'</div>' +	
						'</div>' +
						'<div class="item"> <p id="date5"></p>' +
							'<div class="button-container">' +
								'<button id="h4-0" class="h4-0"> 00H </button>' +
								'<button id="h4-6" class="h4-6"> 6H </button>' +
								'<button id="h4-12" class="h4-12"> 12H </button>' +
								'<button id="h4-18" class="h4-18"> 18H </button>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="dateButton">' +
						'<input type="radio" id="dateDebut" name="date" class="date" checked><label for="dateDebut">Date Début : </label>' +
						'<label id="dateDebutDisplay" class="dateDebutDisplay">' + this.getProperty('DateDebut') + '</label> <br><br>' +
						'<input type="radio" id="dateFin" name="date" class="date"><label for="dateFin">Date Fin : </label>' +
						'<label id="dateFinDisplay" class="dateFinDisplay">' + this.getProperty('DateFin') + '</label>' +
					'</div>' +
				'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()

		// get a reference to the value element
		valueElem = this.jqElement.find('.daterangeslider-property');
		// update that DOM element based on the property value that the user set
		// in the mashup builder
		valueElem.text(this.getProperty('DateRangeSlider Property'));
		
		// Affichage Date Début
		var displayDebut = this.jqElement.find('.dateDebutDisplay');
		displayDebut.text(this.getProperty('DateDebut'));
		
		// Affichage Date Fin
		var displayFin = this.jqElement.find('.dateFinDisplay');
		displayFin.text(this.getProperty('DateFin'));
		
	};

};