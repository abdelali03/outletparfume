import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.utils.js";

// Preis je Stückzahl
const preise = [
  { stueckzahl: "1", alterPreis: "34,99€", neuerPreis: "26,99€" },
  { stueckzahl: "5", alterPreis: "34,99€", neuerPreis: "26,99€" },
  { stueckzahl: "10", alterPreis: "34,99€", neuerPreis: "26,99€" },
  { stueckzahl: "20", alterPreis: "29,99€", neuerPreis: "24,99€" },
  { stueckzahl: "30", alterPreis: "25,99€", neuerPreis: "23,99€" },
  { stueckzahl: "50", alterPreis: "24,99€", neuerPreis: "22,99€" },
  { stueckzahl: "100", alterPreis: "23,99€", neuerPreis: "19,99€" },
  { stueckzahl: "200", alterPreis: "20,99€", neuerPreis: "17,99€" },
  { stueckzahl: "200+", alterPreis: "10,99€", neuerPreis: "16,09€" },
  { stueckzahl: "Auf Anfrage", alterPreis: "", neuerPreis: "" },
];

// Festpreise je Marke
const festpreise = [
  { marke: "KILIAN LUX.", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "LV (NEU)", preis1020: "34,99€", preis50100: "32,99€" },
  { marke: "LV (ALT)", preis1020: "24,99€", preis50100: "22,99€" },
  {
    marke: "TERENZI LUNA SERIE (GRAU)",
    preis1020: "34,99€",
    preis50100: "29,99€",
  },
  {
    marke: "TERENZI KIRKE (SCHWARZ)",
    preis1020: "24,99€",
    preis50100: "22,99€",
  },
  { marke: "PENHALIGON'S", preis1020: "24,99€", preis50100: "19,99€" },
  { marke: "XERJOFF (NEU)", preis1020: "39,99€", preis50100: "34,99€" },
  { marke: "XERJOFF (ALT)", preis1020: "24,99€", preis50100: "22,99€" },
  {
    marke: "XERJOFF PURPLE ACCENTO",
    preis1020: "39,99€",
    preis50100: "22,99€",
  },
  { marke: "ARMANI PRIVE", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "BYREDO", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "INITIO", preis1020: "34,99€", preis50100: "28,99€" },
  { marke: "NISHANE", preis1020: "39,99€", preis50100: "34,99€" },
  { marke: "GISADA", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "ROJA", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "KAJAL", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "SUSPIRO", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "AMOUAGE", preis1020: "34,99€", preis50100: "29,99€" },
  { marke: "MORPH", preis1020: "24,99€", preis50100: "22,99€" },
  { marke: "PHILLIPE PLEIN", preis1020: "39,99€", preis50100: "34,99€" },
  { marke: "MEMO", preis1020: "34,99€", preis50100: "29,99€" },
  {
    marke: "BURBERRY LONDON ENGLAND",
    preis1020: "34,99€",
    preis50100: "22,99€",
  },
  { marke: "ORTO PARISI", preis1020: "34,99€", preis50100: "22,99€" },
  { marke: "BVLGARI LE GEMME", preis1020: "34,99€", preis50100: "29,99€" },
  { marke: "FLEUR NARCOTIQUR", preis1020: "34,99€", preis50100: "22,99€" },
  { marke: "DELINA", preis1020: "34,99€", preis50100: "22,99€" },
  {
    marke: "YVES SAINT LAURENT BABYCAT",
    preis1020: "34,99€",
    preis50100: "22,99€",
  },
  { marke: "JEAN PAUL GAULTIER", preis1020: "34,99€", preis50100: "22,99€" },
  { marke: "KAY ALI", preis1020: "34,99€", preis50100: "22,99€" },
  { marke: "PARFÜM DE MARLY", preis1020: "34,99€", preis50100: "22,99€" },
  { marke: "CLIVE CHRISTIAN LUXUS", preis1020: "34,99€", preis50100: "29,99€" },
];

// NEW: Sonderangebote (can be empty [])
const sonderangebote = [
  { titel: "Sommer-Deal", alterPreis: "29,99€", neuerPreis: "21,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Sommer-Deal", alterPreis: "29,99€", neuerPreis: "21,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Sommer-Deal", alterPreis: "29,99€", neuerPreis: "21,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Sommer-Deal", alterPreis: "29,99€", neuerPreis: "21,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
  { titel: "Bundle Special", alterPreis: "49,99€", neuerPreis: "39,99€" },
];

const storePreislisteData = async () => {
  try {
    const preislisteRef = collection(db, "preisliste");

    // Stückzahlpreise
    await addDoc(preislisteRef, {
      type: "stueckzahl",
      items: preise,
    });

    // Festpreise
    await addDoc(preislisteRef, {
      type: "festpreise",
      items: festpreise,
    });

    // NEW: Sonderangebote
    await addDoc(preislisteRef, {
      type: "sonderangebote",
      items: sonderangebote, // or [] if you don't want initial items
    });

    console.log(
      "Preisliste-Daten wurden erfolgreich gespeichert (inkl. Sonderangebote)!"
    );
  } catch (error) {
    console.error("Fehler beim Speichern der Preisliste-Daten: ", error);
  }
};

storePreislisteData();
export default storePreislisteData;
