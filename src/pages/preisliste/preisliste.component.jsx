import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./preisliste.style.scss";

const PreislistePage = () => {
  const [ansicht, setAnsicht] = useState("stueckzahl"); // Standardmäßig Preis je Stückzahl
  const [preise, setPreise] = useState([]); // Daten für "stueckzahl"
  const [festpreise, setFestpreise] = useState([]); // Daten für "festpreise"

  useEffect(() => {
    // Daten von Firebase abrufen, sobald die Komponente geladen wird
    const fetchPriceLists = async () => {
      try {
        const priceListCol = collection(db, "preisliste");
        const priceListSnapshot = await getDocs(priceListCol);
        let stueckzahlItems = [];
        let festpreiseItems = [];

        // Gehe durch alle Dokumente in der Collection
        priceListSnapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (data.type === "stueckzahl") {
            stueckzahlItems = data.items;
          }
          if (data.type === "festpreise") {
            festpreiseItems = data.items;
          }
        });

        setPreise(stueckzahlItems);
        setFestpreise(festpreiseItems);
      } catch (error) {
        console.error("Fehler beim Abrufen der Preislisten:", error);
      }
    };

    fetchPriceLists();
  }, []);

  return (
    <div className="preisliste-page">
      <h2 className="title">O.U.T.L.E.T.P.A.R.F.U.M – Preisliste</h2>

      <div className="button-group">
        <button
          className={ansicht === "stueckzahl" ? "active" : ""}
          onClick={() => setAnsicht("stueckzahl")}
        >
          Preis je Stückzahl
        </button>
        <button
          className={ansicht === "festpreise" ? "active" : ""}
          onClick={() => setAnsicht("festpreise")}
        >
          Festpreise je Marke
        </button>
      </div>

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
                  <td>{item.alterPreis || "–"}</td>
                  <td>{item.neuerPreis || "–"}</td>
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
                <th>10–20 Stück</th>
                <th>50–100 Stück</th>
              </tr>
            </thead>
            <tbody>
              {festpreise.map((item, index) => (
                <tr key={index}>
                  <td>{item.marke}</td>
                  <td>{item.preis1020 || "–"}</td>
                  <td>{item.preis50100 || "–"}</td>
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
