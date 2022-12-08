import { Hauser } from "./häuser";
import { v4 as uuidv4 } from 'uuid';
const UserId = uuidv4();
export const HauserNEU : Hauser[] = [
{
    id: uuidv4(),
    Kaufpreis: 12345.00,
    Bezeichnung: "Schönes Haus, in einer Wohlfühlarea, welche Sie noch nie gesehen haben",
    Baujahr: 1952,
    Garagenstellplatz: true,
    Etagen: 4,
    Wohnfläche: 234,
},
{
    id: uuidv4(),
    Kaufpreis: 1234235.00,
    Bezeichnung: "Schönes, in einer Wohlfühlarea, welche Sie noch nie gesehen haben",
    Baujahr: 19532,
    Garagenstellplatz: true,
    Etagen: 1,
    Wohnfläche: 234,
}

];

export const WohnungenNEU : Hauser[] = [
    {
        id: uuidv4(),
        Kaufpreis: 1235447,
        Bezeichnung: "SchöneWohnung, in einer Ruhigen lage, welche Sie noch nie gesehen haben",
        Baujahr: 1952,
        Garagenstellplatz: true,
        Etagen: 4,
        Wohnfläche: 234,
    },
    {
        id: uuidv4(),
        Kaufpreis: 12347,
        Bezeichnung: "Athemberaubender Ausblick, welche Sie noch nie gesehen haben",
        Baujahr: 1952,
        Garagenstellplatz: true,
        Etagen: 4,
        Wohnfläche: 234,
    },
    {
        id: uuidv4(),
        Kaufpreis: 12357,
        Bezeichnung: "Altbaugebäude, welche Sie noch nie gesehen haben",
        Baujahr: 1952,
        Garagenstellplatz: true,
        Etagen: 4,
        Wohnfläche: 234,
    },
]