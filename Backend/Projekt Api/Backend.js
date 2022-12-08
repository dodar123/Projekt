const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const beers = [];

const logger = (req, res, next) => {
    console.log(`Received Request ${new Date(Date.now()).toLocaleString('de-DE')}`);
    console.log('HTTP METHOD', req.method);
    console.log('HTTP BODY', req.body);
    console.log('URL PARAMETER', req.params);
    next();
}

app.use(logger);

app.get('/Haus', (req, res) => {
    if (beers.length === 0) {
        resolveNotFound(res, `No Houses found 🥺`)
    } else {
        res.statusCode = 200;
        res.json(beers);
        res.end();
    }
});

app.get('/Haus/:id', (req, res) => {
    const { name } = req.params;
    const beer = getBeer(name);
    if (!beer) {
        resolveNotFound(res, `${name} not found`)
    } else {
        res.statusCode = 200;
        res.json(beer);
        res.end();
    }
})

app.post('/Haus', (req, res) => {
    // if (!req.body.hasOwnProperty('Haus ID')) {
    //     resolveBadRequest(res, 'Missing "Haus ID" property')
    // }
    if (!req.body.hasOwnProperty('Strasse')) {
        resolveBadRequest(res, 'Missing "Strasse" property');
    }
    // if (!req.body.hasOwnProperty('Hausnummer')) {
    //     resolveBadRequest(res, 'Missing "Hausnummer" property');
    // }
    // if (!req.body.hasOwnProperty('Quadratmeter')) {
    //     resolveBadRequest(res, 'Missing "Quadratmeter" property');
    // }
    // if (!req.body.hasOwnProperty('PLZ')) {
    //     resolveBadRequest(res, 'Missing "PLZ" property');
    // }
    if (!req.body.hasOwnProperty('Baujahr')) {
        resolveBadRequest(res, 'Missing "Baujahr" property');
    }
    // if (!req.body.hasOwnProperty('Etagen')) {
    //     resolveBadRequest(res, 'Missing "Etagen" property');
    // }
    if (!req.body.hasOwnProperty('Zimmer')) {
        resolveBadRequest(res, 'Missing "Zimmer" property');
    }
    // if (!req.body.hasOwnProperty('Garage')) {
    //     resolveBadRequest(res, 'Missing "Garage" property');
    // }

    beers.push(req.body);
    res.statusCode = 200;
    res.json(req.body);
});

app.delete('/Haus/:name', (req, res) => {
    const { name } = req.params;
    if (!name) {
        resolveBadRequest(res, 'Missing "name" property');
    }
    const beerIndex = getBeerIndex(name);
    if (beerIndex !== -1) {
        beers.splice(beerIndex, 1); 
        res.statusCode = 200;
        res.send(`${name} removed!`);
    } else {
        resolveNotFound(res, `${name} not found`);
    }
})

app.put('/Haus/:name', (req, res) => {
    const { name } = req.params;
    if (!req.body.hasOwnProperty('Haus ID')) {
        resolveBadRequest(res, 'Missing "Haus ID" property')
    }
    if (!req.body.hasOwnProperty('Straße')) {
        resolveBadRequest(res, 'Missing "Straße" property');
    }
    if (!req.body.hasOwnProperty('Hausnummer')) {
        resolveBadRequest(res, 'Missing "Hausnummer" property');
    }
    if (!req.body.hasOwnProperty('Quadratmeter')) {
        resolveBadRequest(res, 'Missing "Quadratmeter" property');
    }
    if (!req.body.hasOwnProperty('PLZ')) {
    resolveBadRequest(res, 'Missing "PLZ" property');
    }
    if (!req.body.hasOwnProperty('Baujahr')) {
    resolveBadRequest(res, 'Missing "Baujahr" property');
    }
    if (!req.body.hasOwnProperty('Etagen')) {
    resolveBadRequest(res, 'Missing "Etagen" property');
    }
    if (!req.body.hasOwnProperty('Zimmer')) {
    resolveBadRequest(res, 'Missing "Zimmer" property');
    }
    if (!req.body.hasOwnProperty('Garage')) {
    resolveBadRequest(res, 'Missing "Garage" property');
    
}

    const beerIndex = getBeerIndex(name)
    if (beerIndex !== -1) {
        beers.splice(beerIndex, 1, {...getBeer(name), taste: req.body.taste});
        res.statusCode = 200;
        res.send(`${name} taste updated`);
    } else {
        resolveNotFound(res, `${name} not found`);
    }
})

app.listen(port, () => {
    console.log('Running...');
});

function getBeerIndex(name) {
    return beers.findIndex((beer) => beer.name === name);
}

function getBeer(name) {
    return beers.find((beer) => beer.name === name);
}

function resolveNotFound(res, message) {
    res.statusCode = 404;
    res.send(message);
    res.end();
    return;
}

function resolveBadRequest(res, message) {
    res.statusCode = 400;
    res.send(message);
    res.end();
    return;
}
