
import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const productsList = document.getElementById("productsList");
const productSearch = document.getElementById("productSearch");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = [];

async function loadProducts() {
  productsList.textContent = "Loading products...";

  try {
    const snapshot = await getDocs(collection(db, "products"));

    allProducts = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data()
    }));

    displayProducts();

  } catch (error) {
    console.error("Product loading error:", error);
    productsList.textContent = "Unable to load products. Please try again later.";
  }
}

function displayProducts() {
  const searchText = productSearch.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = allProducts.filter((product) => {
    const matchesName = (product.name || "")
      .toLowerCase()
      .includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesName && matchesCategory;
  });

  productsList.replaceChildren();

  if (filteredProducts.length === 0) {
    productsList.textContent = "No matching products found.";
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "info-card";

    const name = document.createElement("h3");
    name.textContent = product.name || "Unnamed product";

    const category = document.createElement("p");
    category.textContent = product.category || "General";

    const price = document.createElement("h3");
    price.textContent =
      "₹" + (product.price ?? "Price unavailable");

    const status = document.createElement("p");
    const isAvailable = product.available !== false;

    status.textContent = isAvailable
      ? "● Available"
      : "● Not Available";

    status.style.color = isAvailable ? "#168447" : "#c0392b";
    status.style.fontWeight = "bold";

    card.append(name, category, price, status);
    productsList.appendChild(card);
  });
}

productSearch.addEventListener("input", displayProducts);
categoryFilter.addEventListener("change", displayProducts);

loadProducts();
