import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";
import SearchBar from "../../components/searchbar/searchbar.component";
import "./admin.style.scss";
import AdminPriceList from "./AdminPriceList.component.jsx";
import AdminCarouselImages from "./AdminCarouselImages.component.jsx";

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    quantity: 1,
    category: "",
  });
  const [activeTab, setActiveTab] = useState("allProducts");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesCollection = collection(db, "shopData");
      const categoriesSnapshot = await getDocs(categoriesCollection);
      const categoriesList = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        items: doc.data().items || [],
      }));
      setCategories(categoriesList);
    } catch (error) {
      console.error("Error fetching categories: ", error);
      setCategories([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleStock = async (categoryId, productId, currentQuantity) => {
    try {
      const categoryDocRef = doc(db, "shopData", categoryId);
      const categoryDoc = await getDoc(categoryDocRef);

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
    } catch (error) {
      console.error("Error toggling stock: ", error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const categoryDoc = categories.find(
        (doc) =>
          doc.category.toLowerCase() === newProduct.category.toLowerCase(),
      );

      if (categoryDoc) {
        const categoryDocRef = doc(db, "shopData", categoryDoc.id);
        const updatedItems = [
          ...categoryDoc.items,
          { ...newProduct, id: Date.now() },
        ];
        await setDoc(categoryDocRef, { ...categoryDoc, items: updatedItems });
        fetchCategories();
        setNewProduct({
          name: "",
          imageUrl: "",
          price: 0,
          quantity: 1,
          category: "",
        });
        setIsModalOpen(false);
      } else {
        alert("Kategorie existiert nicht!");
      }
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  const handleDeleteProduct = async (categoryId, productId) => {
    if (!window.confirm("Dieses Produkt wirklich löschen?")) return;
    try {
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
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="search-container">
          <SearchBar
            handleChange={handleSearchChange}
            placeholder="Kategorie suchen..."
          />
        </div>
      </header>

      <nav className="admin-tabs">
        <button
          className={activeTab === "allProducts" ? "active" : ""}
          onClick={() => setActiveTab("allProducts")}
        >
          Produkte
        </button>
        <button
          className={activeTab === "priceLists" ? "active" : ""}
          onClick={() => setActiveTab("priceLists")}
        >
          Preislisten
        </button>
        <button
          className={activeTab === "carouselImages" ? "active" : ""}
          onClick={() => setActiveTab("carouselImages")}
        >
          Bilder
        </button>
      </nav>

      <div className="admin-content">
        {activeTab === "allProducts" && (
          <>
            <button
              className="add-main-button"
              onClick={() => setIsModalOpen(true)}
            >
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
            <h2>Neues Produkt</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="imageUrl"
                value={newProduct.imageUrl}
                onChange={handleChange}
                placeholder="Bild URL"
                required
              />
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                placeholder="Preis"
                required
              />
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                placeholder="Kategorie (z.B. CASAMORATI)"
                required
              />
              <div className="modal-actions">
                <button type="submit" className="save-btn">
                  Speichern
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
