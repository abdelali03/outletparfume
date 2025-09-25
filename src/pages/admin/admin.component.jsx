import React, { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";
import SearchBar from "../../components/searchbar/searchbar.component";
import "./admin.style.scss";
import AdminPriceList from "./AdminPriceList.component.jsx";
import AdminCarouselImages from "./AdminCarouselImages.component.jsx";

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [outOfStockProducts, setOutOfStockProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
    category: "",
  });
  const [activeTab, setActiveTab] = useState("allProducts");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

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
        items: doc.data().items || [], // Ensure items is always an array
      }));
      setCategories(categoriesList);

      const outOfStock = [];
      categoriesSnapshot.docs.forEach((doc) => {
        const categoryData = doc.data();
        const items = categoryData.items || []; // Ensure items is always an array
        items.forEach((item) => {
          if (item.quantity <= 0) {
            outOfStock.push({
              ...item,
              categoryId: doc.id,
              category: categoryData.category,
            });
          }
        });
      });
      setOutOfStockProducts(outOfStock);
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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const categoriesCollection = collection(db, "shopData");
      const categoriesSnapshot = await getDocs(categoriesCollection);

      const categoryDoc = categoriesSnapshot.docs.find(
        (doc) => doc.data().category === newProduct.category
      );

      if (categoryDoc) {
        const categoryData = categoryDoc.data();
        const categoryDocRef = doc(db, "shopData", categoryDoc.id);

        const updatedItems = [
          ...categoryData.items,
          { ...newProduct, id: categoryData.items.length + 1 },
        ];

        await setDoc(categoryDocRef, { ...categoryData, items: updatedItems });
        fetchCategories();
        setNewProduct({
          name: "",
          imageUrl: "",
          price: 0,
          quantity: 0,
          category: "",
        });
        setIsModalOpen(false); // Close the modal after product is added
      } else {
        console.error("Category does not exist in Firestore");
      }
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  const handleDeleteProduct = async (categoryId, productId) => {
    try {
      const categoryDocRef = doc(db, "shopData", categoryId);
      const categoryDoc = await getDoc(categoryDocRef);

      if (categoryDoc.exists()) {
        const categoryData = categoryDoc.data();
        const updatedItems = categoryData.items.filter(
          (item) => item.id !== productId
        );
        await setDoc(categoryDocRef, { ...categoryData, items: updatedItems });
        fetchCategories();
      } else {
        console.error("Category does not exist");
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const handleUpdateProduct = async (categoryId, updatedProduct) => {
    try {
      const categoryDocRef = doc(db, "shopData", categoryId);
      const categoryDoc = await getDoc(categoryDocRef);

      if (categoryDoc.exists()) {
        const categoryData = categoryDoc.data();
        const updatedItems = categoryData.items.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item
        );
        await setDoc(categoryDocRef, { ...categoryData, items: updatedItems });
        fetchCategories();
      } else {
        console.error("Category does not exist");
      }
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  // Ensure category.items and outOfStockProducts are always valid arrays before filtering
  const filteredCategories = categories.map((category) => ({
    ...category,
    items: Array.isArray(category.items)
      ? category.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [], // If items is undefined or not an array, default to an empty array
  }));

  const filteredOutOfStockProducts = Array.isArray(outOfStockProducts)
    ? outOfStockProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []; // If outOfStockProducts is undefined or not an array, default to an empty array

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <SearchBar handleChange={handleSearchChange} />
      <div className="tabs">
        <button onClick={() => setActiveTab("allProducts")}>
          Alle Produkte
        </button>
        <button onClick={() => setActiveTab("outOfStock")}>ausverkauft</button>
        <button onClick={() => setActiveTab("priceLists")}>Preislisten</button>
        <button onClick={() => setActiveTab("carouselImages")}>
          Bilder Editieren
        </button>
      </div>
      {activeTab === "priceLists" && <AdminPriceList />}
      {activeTab === "carouselImages" && <AdminCarouselImages />}
      <button
        className="add-product-button"
        onClick={() => setIsModalOpen(true)}
      >
        Add Product
      </button>

      {/* Modal for adding new product */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
              />
              <input
                type="text"
                name="imageUrl"
                value={newProduct.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                required
              />
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
              <input
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
              />
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                placeholder="Category"
                required
              />
              <button type="submit">Add Product</button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === "allProducts" && (
        <div className="products-list">
          <h2>Products</h2>
          <ul>
            {filteredCategories.map((category) => (
              <li key={category.id}>
                <h3>{category.category}</h3>
                <ul>
                  {Array.isArray(category.items) &&
                    category.items.map((product) => (
                      <li key={product.id}>
                        <div>
                          <h4>{product.name}</h4>
                          <img src={product.imageUrl} alt={product.name} />
                          <p>Price: ${product.price}</p>
                          <p>Quantity: {product.quantity}</p>
                          <p>Category: {category.category}</p>
                        </div>
                        <div className="modify-buttons">
                          <button
                            className="delete"
                            onClick={() =>
                              handleDeleteProduct(category.id, product.id)
                            }
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateProduct(category.id, {
                                ...product,
                                quantity: product.quantity + 1,
                              })
                            }
                          >
                            Increase Quantity
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateProduct(category.id, {
                                ...product,
                                quantity: product.quantity - 1,
                              })
                            }
                          >
                            Decrease Quantity
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateProduct(category.id, {
                                ...product,
                                price: product.price + 1,
                              })
                            }
                          >
                            Increase Price
                          </button>
                          <button
                            onClick={() =>
                              handleUpdateProduct(category.id, {
                                ...product,
                                price: product.price - 1,
                              })
                            }
                          >
                            Decrease Price
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "outOfStock" && (
        <div className="out-of-stock-list">
          <h2>Out of Stock Products</h2>
          <ul>
            {filteredOutOfStockProducts.map((product) => (
              <li key={product.id}>
                <div>
                  <h4>{product.name}</h4>
                  <img src={product.imageUrl} alt={product.name} />
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Category: {product.category}</p>
                </div>
                <div className="modify-buttons">
                  <button
                    onClick={() =>
                      handleUpdateProduct(product.categoryId, {
                        ...product,
                        quantity: product.quantity + 1,
                      })
                    }
                  >
                    Increase Quantity
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateProduct(product.categoryId, {
                        ...product,
                        price: product.price + 1,
                      })
                    }
                  >
                    Increase Price
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
