import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";
import SearchBar from "../../components/searchbar/searchbar.component";
import "./admin.style.scss";
import AdminPriceList from "./AdminPriceList.component.jsx";
import AdminCarouselImages from "./AdminCarouselImages.component.jsx";

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("allProducts");

  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIds, setCurrentEditIds] = useState({
    catId: null,
    prodId: null,
  });

  const [productForm, setProductForm] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    quantity: 1,
    category: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesCollection = collection(db, "shopData");
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categoriesList = categoriesSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data, // Erst die Daten laden (enthält id: 99)
          id: doc.id, // DANN die Dokument-ID setzen (überschreibt die 99 mit "billie-eilish")
          items: data.items || [],
        };
      });
      setCategories(categoriesList);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  // Öffnet das Modal zum Erstellen
  const openAddModal = () => {
    setIsEditing(false);
    setProductForm({
      name: "",
      imageUrl: "",
      price: 0,
      quantity: 1,
      category: "",
    });
    setIsModalOpen(true);
  };

  // Öffnet das Modal zum Bearbeiten und füllt die Daten aus
  const openEditModal = (category, product) => {
    setIsEditing(true);
    setCurrentEditIds({ catId: category.id, prodId: product.id });
    setProductForm({
      ...product,
      category: category.category, // Kategorie-Name für die Suche mitschicken
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const categoryDoc = categories.find(
        (doc) =>
          doc.category.toLowerCase() === productForm.category.toLowerCase(),
      );

      if (!categoryDoc) {
        alert("Kategorie existiert nicht!");
        return;
      }

      const categoryDocRef = doc(db, "shopData", categoryDoc.id);
      let updatedItems = [...categoryDoc.items];

      if (isEditing) {
        // Logik für Bearbeiten
        updatedItems = updatedItems.map((item) =>
          item.id === currentEditIds.prodId ? { ...productForm } : item,
        );
      } else {
        // Logik für Neu Hinzufügen
        updatedItems.push({ ...productForm, id: Date.now() });
      }

      await setDoc(categoryDocRef, { ...categoryDoc, items: updatedItems });
      fetchCategories();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Fehler beim Speichern:", error);
    }
  };

  const handleToggleStock = async (categoryId, productId, currentQuantity) => {
    const categoryDocRef = doc(db, "shopData", categoryId);
    const categoryDoc = await getDoc(categoryDocRef);
    console.log("Kategorie ID:", categoryId); // Schau in die Browser-Konsole!
    console.log("Produkt ID:", productId);

    if (!categoryId) {
      console.error("Fehler: categoryId ist undefined!");
      return;
    }
    if (categoryDoc.exists()) {
      const categoryData = categoryDoc.data();
      const updatedItems = categoryData.items.map((item) =>
        item.id === productId
          ? { ...item, quantity: currentQuantity > 0 ? 0 : 1 }
          : item,
      );
      await setDoc(categoryDocRef, { ...categoryData, items: updatedItems });
      fetchCategories();
    }
  };

  const handleDeleteProduct = async (categoryId, productId) => {
    if (!window.confirm("Produkt wirklich löschen?")) return;
    const categoryDocRef = doc(db, "shopData", categoryId);
    const categoryDoc = await getDoc(categoryDocRef);

    if (categoryDoc.exists()) {
      const categoryData = categoryDoc.data();
      const updatedItems = categoryData.items.filter(
        (item) => item.id !== productId,
      );
      await setDoc(categoryDocRef, { ...categoryData, items: updatedItems });
      fetchCategories();
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <SearchBar
          handleChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Kategorie suchen..."
        />
      </header>

      <nav className="admin-tabs">
        {["allProducts", "priceLists", "carouselImages"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "allProducts"
              ? "Produkte"
              : tab === "priceLists"
                ? "Preislisten"
                : "Bilder"}
          </button>
        ))}
      </nav>

      <div className="admin-content">
        {activeTab === "allProducts" && (
          <>
            <button className="add-main-button" onClick={openAddModal}>
              + Produkt hinzufügen
            </button>

            {filteredCategories.map((category) => (
              <section key={category.id} className="category-section">
                <h2 className="category-title">{category.category}</h2>
                <div className="product-grid">
                  {category.items.map((product) => (
                    <div
                      key={product.id}
                      className={`product-card ${product.quantity <= 0 ? "is-out" : ""}`}
                    >
                      <div className="img-container">
                        <img src={product.imageUrl} alt={product.name} />
                      </div>
                      <div className="product-details">
                        <h4>{product.name}</h4>
                        <div className="stock-control">
                          <span className="status-label">
                            {product.quantity > 0 ? "Verfügbar" : "Ausverkauft"}
                          </span>
                          <label className="ios-switch">
                            <input
                              type="checkbox"
                              checked={product.quantity > 0}
                              onChange={() =>
                                handleToggleStock(
                                  category.id,
                                  product.id,
                                  product.quantity,
                                )
                              }
                            />
                            <span className="slider"></span>
                          </label>
                        </div>
                        <div className="card-actions">
                          <button
                            className="edit-btn"
                            onClick={() => openEditModal(category, product)}
                          >
                            Bearbeiten
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDeleteProduct(category.id, product.id)
                            }
                          >
                            Löschen
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
        {activeTab === "priceLists" && <AdminPriceList />}
        {activeTab === "carouselImages" && <AdminCarouselImages />}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>{isEditing ? "Produkt bearbeiten" : "Neues Produkt"}</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleInputChange}
                required
              />

              <label>Bild URL</label>
              <input
                type="text"
                name="imageUrl"
                value={productForm.imageUrl}
                onChange={handleInputChange}
                required
              />

              <label>Preis (intern)</label>
              <input
                type="number"
                name="price"
                value={productForm.price}
                onChange={handleInputChange}
                required
              />

              <label>Kategorie</label>
              <input
                type="text"
                name="category"
                value={productForm.category}
                onChange={handleInputChange}
                required
                placeholder="z.B. CASAMORATI"
              />

              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  {isEditing ? "Aktualisieren" : "Speichern"}
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
