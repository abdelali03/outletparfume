import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./AdminPriceList.style.scss";

const AdminPriceList = () => {
  // Zustände für Preislisten-Daten
  const [stueckzahlList, setStueckzahlList] = useState([]);
  const [festpreiseList, setFestpreiseList] = useState([]);
  const [sonderangeboteList, setSonderangeboteList] = useState([]);

  // Zum temporären Speichern von Änderungen (Editiermodus)
  const [editing, setEditing] = useState({
    type: null, // "stueckzahl" | "festpreise" | "sonderangebote"
    index: null,
    field: "",
    value: "",
  });

  // Preislisten laden (ohne Auto-Create)
  useEffect(() => {
    const fetchPriceLists = async () => {
      try {
        const preislisteRef = collection(db, "preisliste");
        const snapshot = await getDocs(preislisteRef);

        let stueckzahlItems = [];
        let festpreiseItems = [];
        let sonderangeboteItems = [];

        snapshot.docs.forEach((docSnap) => {
          const data = docSnap.data();
          if (data?.type === "stueckzahl") stueckzahlItems = data.items || [];
          if (data?.type === "festpreise") festpreiseItems = data.items || [];
          if (data?.type === "sonderangebote")
            sonderangeboteItems = data.items || [];
        });

        setStueckzahlList(stueckzahlItems);
        setFestpreiseList(festpreiseItems);
        setSonderangeboteList(sonderangeboteItems);
      } catch (error) {
        console.error("Fehler beim Laden der Preislisten:", error);
      }
    };

    fetchPriceLists();
  }, []);

  // Aktualisierung eines spezifischen Elements in einem Array
  const updatePriceListItem = async (listType) => {
    try {
      // Dokument-ID anhand des Typs ermitteln (wie bei den anderen)
      const preislisteColRef = collection(db, "preisliste");
      const snapshot = await getDocs(preislisteColRef);
      let docId = "";
      snapshot.docs.forEach((docSnap) => {
        if (docSnap.data()?.type === listType) docId = docSnap.id;
      });

      if (!docId) {
        console.error("Kein Dokument mit type:", listType);
        return;
      }

      // Liste kopieren & Feld aktualisieren
      let updatedItems;
      if (listType === "stueckzahl") {
        updatedItems = stueckzahlList.map((item, idx) =>
          idx === editing.index
            ? { ...item, [editing.field]: editing.value }
            : item
        );
      } else if (listType === "festpreise") {
        updatedItems = festpreiseList.map((item, idx) =>
          idx === editing.index
            ? { ...item, [editing.field]: editing.value }
            : item
        );
      } else if (listType === "sonderangebote") {
        updatedItems = sonderangeboteList.map((item, idx) =>
          idx === editing.index
            ? { ...item, [editing.field]: editing.value }
            : item
        );
      }

      // Firestore aktualisieren
      const docRef = doc(db, "preisliste", docId);
      await setDoc(
        docRef,
        { type: listType, items: updatedItems },
        { merge: true }
      );

      // State aktualisieren
      if (listType === "stueckzahl") setStueckzahlList(updatedItems);
      else if (listType === "festpreise") setFestpreiseList(updatedItems);
      else setSonderangeboteList(updatedItems);

      // Editiermodus zurücksetzen
      setEditing({ type: null, index: null, field: "", value: "" });
    } catch (error) {
      console.error("Fehler beim Aktualisieren:", error);
    }
  };

  // Startet den Editiervorgang eines Feldes
  const startEditing = (listType, index, field, currentValue) => {
    setEditing({
      type: listType,
      index,
      field,
      value: String(currentValue ?? ""),
    });
  };

  return (
    <div className="admin-price-list">
      <h2>Preislisten bearbeiten</h2>

      {/* Stückzahl */}
      <div className="price-section">
        <h3>Preis je Stückzahl</h3>
        <table>
          <thead>
            <tr>
              <th>Stückzahl</th>
              <th>Alter Preis</th>
              <th>Neuer Preis</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {stueckzahlList.map((item, index) => (
              <tr key={index}>
                <td>{item.stueckzahl}</td>
                <td>
                  {editing.type === "stueckzahl" &&
                  editing.index === index &&
                  editing.field === "alterPreis" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.alterPreis
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "stueckzahl",
                        index,
                        "alterPreis",
                        item.alterPreis
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "stueckzahl" &&
                  editing.index === index &&
                  editing.field === "neuerPreis" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.neuerPreis
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "stueckzahl",
                        index,
                        "neuerPreis",
                        item.neuerPreis
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "stueckzahl" && editing.index === index ? (
                    <button onClick={() => updatePriceListItem("stueckzahl")}>
                      Save
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Festpreise */}
      <div className="price-section">
        <h3>Festpreise je Marke</h3>
        <table>
          <thead>
            <tr>
              <th>Marke</th>
              <th>10–20 Stück</th>
              <th>50–100 Stück</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {festpreiseList.map((item, index) => (
              <tr key={index}>
                <td>{item.marke}</td>
                <td>
                  {editing.type === "festpreise" &&
                  editing.index === index &&
                  editing.field === "preis1020" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.preis1020
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "festpreise",
                        index,
                        "preis1020",
                        item.preis1020
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "festpreise" &&
                  editing.index === index &&
                  editing.field === "preis50100" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.preis50100
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "festpreise",
                        index,
                        "preis50100",
                        item.preis50100
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "festpreise" && editing.index === index ? (
                    <button onClick={() => updatePriceListItem("festpreise")}>
                      Save
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sonderangebote – nur bearbeiten/speichern */}
      <div className="price-section">
        <h3>Sonderangebote</h3>
        <table>
          <thead>
            <tr>
              <th>Titel</th>
              <th>Alter Preis</th>
              <th>Neuer Preis</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {sonderangeboteList.map((item, index) => (
              <tr key={index}>
                <td>
                  {editing.type === "sonderangebote" &&
                  editing.index === index &&
                  editing.field === "titel" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.titel
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "sonderangebote",
                        index,
                        "titel",
                        item.titel ?? ""
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "sonderangebote" &&
                  editing.index === index &&
                  editing.field === "alterPreis" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.alterPreis
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "sonderangebote",
                        index,
                        "alterPreis",
                        item.alterPreis ?? ""
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "sonderangebote" &&
                  editing.index === index &&
                  editing.field === "neuerPreis" ? (
                    <input
                      type="text"
                      value={editing.value}
                      onChange={(e) =>
                        setEditing({ ...editing, value: e.target.value })
                      }
                    />
                  ) : (
                    item.neuerPreis
                  )}
                  <button
                    onClick={() =>
                      startEditing(
                        "sonderangebote",
                        index,
                        "neuerPreis",
                        item.neuerPreis ?? ""
                      )
                    }
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {editing.type === "sonderangebote" &&
                  editing.index === index ? (
                    <button
                      onClick={() => updatePriceListItem("sonderangebote")}
                    >
                      Save
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
            {sonderangeboteList.length === 0 && (
              <tr>
                <td colSpan={4} style={{ opacity: 0.7 }}>
                  Keine Sonderangebote im Dokument gefunden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPriceList;
