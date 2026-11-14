
import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const productsList = document.getElementById("productsList");

async function loadProducts() {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    if (snapshot.empty) {
      productsList.innerHTML = "<p>No products available yet.</p>";
      return;
    }

    productsList.innerHTML = "";

    snapshot.forEach((doc) => {
      const product = doc.data();

      if (product.available === false) return;

      const card = document.createElement("article");
      card.className = "info-card";

      const name = document.createElement("h3");
      name.textContent = product.name || "Unnamed product";

      const category = document.createElement("p");
      category.textContent = product.category || "General";

      const price = document.createElement("p");
      price.textContent = "₹" + (product.price ?? "Price unavailable");

      card.append(name, category, price);
      productsList.appendChild(card);
    });

    if (!productsList.children.length) {
      productsList.innerHTML = "<p>No products currently available.</p>";
    }
  } catch (error) {
    console.error("Product loading error:", error);
    productsList.textContent = "Unable to load products. Please try again later.";
  }
}

loadProducts();
