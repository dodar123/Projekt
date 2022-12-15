export interface Objekt {
	"id": String,
	"Erstelltam": Date,
	//"Erstelltvon": Text,
	"Firma":String,
	
		"Bezeichnung": String,
		"Adresse": String,
		"Preis": Number,
		"Nebenkosten": Number,
		"Typ": String,
		"PLZ": Number,
		"Stadt":String,
		"Wohnfläche": Number,
		"Etagen": Number,
		"Baujahr": Number,
		"Energieklasse": String,
		"Heizung": String,
		"Beschreibung": String,
		"Bezugsfrei": Date,
		"Garagenstellplatz": Boolean,
    
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
    
