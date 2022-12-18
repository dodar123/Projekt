export interface Objekt {
	"id": String,
	"Bezeichnung": String,
	"Adresse": String,
	"Baujahr": Number,
	"Garagenstellplatz": Boolean,
	"Etagen": Number,
	"Wohnfläche": Number,
	"Erstelltam": Date,
	//"Erstelltvon": Text,
	"Firma":String,
	"Preis": Number,
	"Nebenkosten": Number,
	"Typ": String,
	"PLZ": Number,
	"Stadt":String,
	"Energieklasse": String,
	"Heizung": String,
	"Beschreibung": String,
	"Bezugsfrei": Date,
		
    
}
export interface Wohnung {
	"id": String,
	"Erstelltam": Date,
	//"Erstelltvon": Text,
	"Firma":Text,
	
		"Bezeichnung": String,
		"Adresse": Text,
		"Preis": Number,
		"Nebenkosten": Number,
		"Typ": Text,
		"PLZ": Number,
		"Stadt":Text,
		"Groesse": Number,
		"Etagen": Number,
		"Baujahr": Number,
		"Energieklasse": Text,
		"Heizung": Text,
		"Beschreibung": Text,
		"Bezugsfrei": Date,
		"Garage": Boolean,
    
}
    
