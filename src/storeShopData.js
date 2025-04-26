import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.utils.js";

const SHOP_DATA = {
  Xerjoff: {
    id: 1,
    title: "Xerjoff",
    routeName: "xerjoff",
    items: [],
  },
  BYREDO: {
    id: 2,
    title: "BYREDO",
    routeName: "byredo",
    items: [],
  },
  EXNIHILO: {
    id: 3,
    title: "EX NIHILO",
    routeName: "exnihilo",
    items: [],
  },
  Versace: {
    id: 4,
    title: "Versace",
    routeName: "versace",
    items: [],
  },
  CalvinKlein: {
    id: 5,
    title: "Calvin Klein",
    routeName: "calvinklein",
    items: [],
  },
  NISHANE: {
    id: 6,
    title: "NISHANE",
    routeName: "nishane",
    items: [],
  },
  DSQUARED2: {
    id: 7,
    title: "DSQUARED2",
    routeName: "dsquared2",
    items: [],
  },
  MFK: {
    id: 8,
    title: "MFK",
    routeName: "mfk",
    items: [],
  },
  AZZARO: {
    id: 9,
    title: "AZZARO",
    routeName: "azzaro",
    items: [],
  },
  TizianaTerenzi: {
    id: 10,
    title: "Tiziana Terenzi",
    routeName: "tizianaterenzi",
    items: [],
  },
  CarolinaHerrera212: {
    id: 11,
    title: "212 VIP Carolina Herrera",
    routeName: "212vipcarolinaherrera",
    items: [],
  },
  TomFord: {
    id: 12,
    title: "Tom Ford",
    routeName: "tomford",
    items: [],
  },
  MaisonMargiela: {
    id: 13,
    title: "Maison Margiela",
    routeName: "maisonmargiela",
    items: [],
  },
  Bvlgari: {
    id: 14,
    title: "Bvlgari",
    routeName: "bvlgari",
    items: [],
  },
  JIMMYCHOO: {
    id: 15,
    title: "JIMMY CHOO",
    routeName: "jimmychoo",
    items: [],
  },
  CHANEL: {
    id: 16,
    title: "CHANEL",
    routeName: "chanel",
    items: [],
  },
  GiorgioArmani: {
    id: 17,
    title: "Giorgio Armani",
    routeName: "giorgioarmani",
    items: [],
  },
  JeroboamGozo: {
    id: 18,
    title: "JEROBOAM GOZO",
    routeName: "jeroboamgozo",
    items: [],
  },
  Dior: {
    id: 19,
    title: "Dior",
    routeName: "dior",
    items: [],
  },
  DolceGabbana: {
    id: 20,
    title: "Dolce & Gabbana",
    routeName: "dolcegabbana",
    items: [],
  },
  CliveChristian: {
    id: 21,
    title: "CLIVE CHRISTIAN",
    routeName: "clivechristian",
    items: [],
  },
  YvesSaintLaurent: {
    id: 22,
    title: "Yves Saint Laurent",
    routeName: "yvessaintlaurent",
    items: [],
  },
  Valentino: {
    id: 23,
    title: "VALENTINO",
    routeName: "valentino",
    items: [],
  },
  Simimi: {
    id: 24,
    title: "simimi",
    routeName: "simimi",
    items: [],
  },
  Creed: {
    id: 25,
    title: "CREED",
    routeName: "creed",
    items: [],
  },
  Prada: {
    id: 26,
    title: "PRADA",
    routeName: "prada",
    items: [],
  },
  RobertoCavalli: {
    id: 27,
    title: "roberto cavalli",
    routeName: "robertocavalli",
    items: [],
  },
  Chloe: {
    id: 28,
    title: "Chloe",
    routeName: "chloe",
    items: [],
  },
  Gisada: {
    id: 29,
    title: "Gisada",
    routeName: "gisada",
    items: [],
  },
  PhilippPlein: {
    id: 30,
    title: "Philipp Plein",
    routeName: "philippplein",
    items: [],
  },
  Givenchy: {
    id: 31,
    title: "GIVENCHY",
    routeName: "givenchy",
    items: [],
  },
  Narciso: {
    id: 32,
    title: "Narciso",
    routeName: "narciso",
    items: [],
  },
  Cartier: {
    id: 33,
    title: "Cartier",
    routeName: "cartier",
    items: [],
  },
  Hermes: {
    id: 34,
    title: "HERMES",
    routeName: "hermes",
    items: [],
  },
  Kajal: {
    id: 35,
    title: "KAJAL",
    routeName: "kajal",
    items: [],
  },
  MEMO: {
    id: 36,
    title: "MEMO Paris",
    routeName: "memoparis",
    items: [],
  },
  Nasomatto: {
    id: 37,
    title: "NASOMATTO",
    routeName: "nasomatto",
    items: [],
  },
  Initio: {
    id: 38,
    title: "INITIO",
    routeName: "initio",
    items: [],
  },
  OrtoParisi: {
    id: 39,
    title: "ORTO PARISI",
    routeName: "ortoparisi",
    items: [],
  },
  VictoriasSecret: {
    id: 40,
    title: "Victoria´s Secret",
    routeName: "victoriassecret",
    items: [],
  },
  ParfumsDeMarly: {
    id: 41,
    title: "PARFUMS de MARLY",
    routeName: "parfumsdemarly",
    items: [],
  },
  BottegaVeneta: {
    id: 42,
    title: "Bottega Veneta",
    routeName: "bottegaveneta",
    items: [],
  },
  Mugler: {
    id: 43,
    title: "MUGLER",
    routeName: "mugler",
    items: [],
  },
  Mancera: {
    id: 44,
    title: "MANCERA",
    routeName: "mancera",
    items: [],
  },
  Morph: {
    id: 45,
    title: "MORPH",
    routeName: "morph",
    items: [],
  },
  MarcAntoineBarrois: {
    id: 46,
    title: "Marc-Antoine Barrois",
    routeName: "marcantoinebarrois",
    items: [],
  },
  AcquadiParma: {
    id: 47,
    title: "ACQUA di PARMA",
    routeName: "acquadiparma",
    items: [],
  },
  DucciGiardiniToscana: {
    id: 48,
    title: "Ducci Giardini di Toscana",
    routeName: "duccigiardiniditoscana",
    items: [],
  },
  Burberry: {
    id: 49,
    title: "Burberry",
    routeName: "burberry",
    items: [],
  },
  CarolinaHerrera: {
    id: 50,
    title: "CAROLINA HERRERA",
    routeName: "carolinaherrera",
    items: [],
  },
  Montale: {
    id: 51,
    title: "MONTALE",
    routeName: "montale",
    items: [],
  },
  Lancome: {
    id: 52,
    title: "LANCOME",
    routeName: "lancome",
    items: [],
  },
  Sospiro: {
    id: 53,
    title: "SOSPIRO",
    routeName: "sospiro",
    items: [],
  },
  JeanPaulGaultier: {
    id: 54,
    title: "Jean Paul Gaultier",
    routeName: "jeanpaulgaultier",
    items: [],
  },
  KilianParis: {
    id: 55,
    title: "Kilian Paris",
    routeName: "kilianparis",
    items: [],
  },
  HugoBoss: {
    id: 56,
    title: "Hugo Boss",
    routeName: "hugoboss",
    items: [],
  },
  Guerlain: {
    id: 57,
    title: "GUERLAIN",
    routeName: "guerlain",
    items: [],
  },
  Gucci: {
    id: 58,
    title: "GUCCI",
    routeName: "gucci",
    items: [],
  },
  ViktorRolf: {
    id: 59,
    title: "VIKTOR & ROLF",
    routeName: "viktorrolf",
    items: [],
  },
  PacoRabanne: {
    id: 60,
    title: "Paco Rabanne",
    routeName: "pacorabanne",
    items: [],
  },
  kosmetics: {
    id: 61,
    title: "Kosmetics",
    routeName: "kosmetics",
    items: [],
  },
  andereProdukte: {
    id: 62,
    title: "Andere Produkte",
    routeName: "andereprodukte",
    items: [],
  },
  ParfumSets: {
    id: 63,
    title: "Parfume Sets",
    routeName: "parfumesets",
    items: [],
  },
  Hermes: {
    id: 64,
    title: "Hermes",
    routeName: "hermes",
    items: [],
  },
  louisvuitton: {
    id: 65,
    title: "Louis Vuitton",
    routeName: "louisvuitton",
    items: [],
  },
  amouage: {
    id: 66,
    title: "Amouage",
    routeName: "amouage",
    items: [],
  },
  armaf: {
    id: 67,
    title: "Armaf",
    routeName: "armaf",
    items: [],
  },
  birberr: {
    id: 68,
    title: "Birberr",
    routeName: "birberr",
    items: [],
  },
  bykillian: {
    id: 69,
    title: "By Killian",
    routeName: "by-killian",
    items: [],
  },
  emporioarmani: {
    id: 70,
    title: "Emporio Armani",
    routeName: "emporio-armani",
    items: [],
  },
  eliesaab: {
    id: 71,
    title: "Elie Saab",
    routeName: "elie-saab",
    items: [],
  },
  fredericmalle: {
    id: 72,
    title: "Frederic Malle",
    routeName: "frederic-malle",
    items: [],
  },
  giardiniditoscana: {
    id: 73,
    title: "Giardini di Toscana",
    routeName: "giardini-di-toscana",
    items: [],
  },
  hfcdevils: {
    id: 74,
    title: "HFC Devil’s",
    routeName: "hfc-devils",
    items: [],
  },
  kayali: {
    id: 75,
    title: "Kayali",
    routeName: "kayali",
    items: [],
  },
  lacoste: {
    id: 76,
    title: "Lacoste",
    routeName: "lacoste",
    items: [],
  },
  maisoncrivelli: {
    id: 77,
    title: "Maison Crivelli",
    routeName: "maison-crivelli",
    items: [],
  },
  maisonfranciskurkdjian: {
    id: 78,
    title: "Maison Francis Kurkdjian",
    routeName: "maison-francis-kurkdjian",
    items: [],
  },
  mancers: {
    id: 79,
    title: "Mancers",
    routeName: "mancers",
    items: [],
  },
  marcantone: {
    id: 80,
    title: "Marc Antone",
    routeName: "marc-antone",
    items: [],
  },
  matierepremiere: {
    id: 81,
    title: "Matière Première",
    routeName: "matiere-premiere",
    items: [],
  },
  memomarfa: {
    id: 82,
    title: "Memo Marfa",
    routeName: "memo-marfa",
    items: [],
  },
  molecule: {
    id: 83,
    title: "Molecule",
    routeName: "molecule",
    items: [],
  },
  moschino: {
    id: 84,
    title: "Moschino",
    routeName: "moschino",
    items: [],
  },
  salvatoreferragamo: {
    id: 85,
    title: "Salvatore Ferragamo",
    routeName: "salvatore-ferragamo",
    items: [],
  },
  terredehermes: {
    id: 86,
    title: "Terre de Hermès",
    routeName: "terre-de-hermes",
    items: [],
  },
  zarkoperfume: {
    id: 87,
    title: "Zarko Perfume",
    routeName: "zarko-perfume",
    items: [],
  },
  
};

const storeShopData = async () => {
  try {
    const shopDataRef = collection(db, "shopData");

    // Loop over each category in SHOP_DATA
    for (let category in SHOP_DATA) {
      // Store each category along with its items as an array
      await addDoc(shopDataRef, {
        category: SHOP_DATA[category].title, // Category name (title)
        routeName: SHOP_DATA[category].routeName, // Route name for navigation
        items: SHOP_DATA[category].items, // Store items directly
      });
    }

    console.log("SHOP_DATA has been stored successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

storeShopData();
