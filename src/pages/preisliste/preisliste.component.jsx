import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./preisliste.style.scss";

const PreislistePage = () => {
  const [ansicht, setAnsicht] = useState("stueckzahl"); // "stueckzahl" | "festpreise" | "sonderangebote"
  const [preise, setPreise] = useState([]); // Daten für "stueckzahl"
  const [festpreise, setFestpreise] = useState([]); // Daten für "festpreise"
  const [sonderangebote, setSonderangebote] = useState([]); // Daten für "sonderangebote"

  useEffect(() => {
    // Daten von Firebase abrufen, sobald die Komponente geladen wird
    const fetchPriceLists = async () => {
      try {
        const priceListCol = collection(db, "preisliste");
        const priceListSnapshot = await getDocs(priceListCol);

        let stueckzahlItems = [];
        let festpreiseItems = [];
        let sonderangeboteItems = [];

        priceListSnapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          if (data?.type === "stueckzahl") stueckzahlItems = data.items || [];
          if (data?.type === "festpreise") festpreiseItems = data.items || [];
          if (data?.type === "sonderangebote")
            sonderangeboteItems = data.items || [];
        });

        setPreise(stueckzahlItems);
        setFestpreise(festpreiseItems);
        setSonderangebote(sonderangeboteItems);
      } catch (error) {
        console.error("Fehler beim Abrufen der Preislisten:", error);
      }
    };

    fetchPriceLists();
  }, []);

  return (
    <div className="preisliste-page">
      <h2 className="title">O.U.T.L.E.T.P.A.R.F.U.M – Preisliste</h2>

      {/* Tabs / Buttons */}
      <div className="controls">
        <p className="hint">Wähle eine Kategorie:</p>
        <div
          className="button-group"
          role="tablist"
          aria-label="Preisliste Kategorien"
        >
          <button
            role="tab"
            aria-selected={ansicht === "stueckzahl"}
            className={`tab-btn btn--stueckzahl ${
              ansicht === "stueckzahl" ? "active" : ""
            }`}
            onClick={() => setAnsicht("stueckzahl")}
          >
            Preis je Stückzahl
            <span className="badge">{preise.length}</span>
          </button>

          <button
            role="tab"
            aria-selected={ansicht === "festpreise"}
            className={`tab-btn btn--festpreise ${
              ansicht === "festpreise" ? "active" : ""
            }`}
            onClick={() => setAnsicht("festpreise")}
          >
            Festpreise je Marke
            <span className="badge">{festpreise.length}</span>
          </button>

          <button
            role="tab"
            aria-selected={ansicht === "sonderangebote"}
            className={`tab-btn btn--sonderangebote ${
              ansicht === "sonderangebote" ? "active" : ""
            }`}
            onClick={() => setAnsicht("sonderangebote")}
          >
            Sonderangebote
            <span className="badge">{sonderangebote.length}</span>
          </button>
        </div>
      </div>

      {/* Tabellen je Kategorie */}
      {ansicht === "stueckzahl" && (
        <>
          <table className="preisliste-tabelle">
            <thead>
              <tr>
                <th>Stückzahl</th>
                <th>Alter Preis</th>
                <th>Neuer Preis</th>
              </tr>
            </thead>
            <tbody>
              {preise.map((item, index) => (
                <tr key={index}>
                  <td>{item.stueckzahl}</td>
                  <td className="old-price">{item.alterPreis || "–"}</td>
                  <td className="new-price">{item.neuerPreis || "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="footer-note">✨ ALLES BRS-QUALITÄT ✨</p>
        </>
      )}

      {ansicht === "festpreise" && (
        <>
          <table className="preisliste-tabelle">
            <thead>
              <tr>
                <th>Marke</th>
                <th>(10–20 St.)</th>
                <th>(50–100 St.)</th>
              </tr>
            </thead>
            <tbody>
              {festpreise.map((item, index) => (
                <tr key={index}>
                  <td className="brand-name">{item.marke}</td>
                  <td className="new-price">{item.preis1020 || "–"}</td>
                  <td className="new-price">{item.preis50100 || "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="footer-note">✨ ALLES BRS-QUALITÄT ✨</p>
        </>
      )}

      {ansicht === "sonderangebote" && (
        <>
          <table className="preisliste-tabelle">
            <thead>
              <tr>
                <th>Titel</th>
                <th>Alter Preis</th>
                <th>Neuer Preis</th>
              </tr>
            </thead>
            <tbody>
              {sonderangebote.map((item, index) => (
                <tr key={index}>
                  <td>{item.titel}</td>
                  <td className="old-price">{item.alterPreis || "–"}</td>
                  <td className="new-price">{item.neuerPreis || "–"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="footer-note">✨ ALLES BRS-QUALITÄT ✨</p>
        </>
      )}
    </div>
  );
};

export default PreislistePage;
