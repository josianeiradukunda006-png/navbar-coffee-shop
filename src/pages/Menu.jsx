
import { useState } from "react";
import "./Menu.css";

function Menu() {
  const [search, setSearch] = useState("");

  const menuItems = [
    { id: 1, name: "Espresso", category: "Coffee", price: 2000 },
    { id: 2, name: "Cappuccino", category: "Coffee", price: 3000 },
    { id: 3, name: "Latte", category: "Coffee", price: 3500 },
    { id: 4, name: "Iced Coffee", category: "Cold Drinks", price: 4000 },
    { id: 5, name: "Chocolate Cake", category: "Dessert", price: 2500 },
    { id: 6, name: "Croissant", category: "Bakery", price: 2000 },
  ];

  const filteredItems = menuItems.filter((item) =>
    `${item.name} ${item.category}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <div className="menu-page">
      <div className="menu-heading">
        <h1>Our Menu</h1>
        <p>Discover your favorite coffee and delicious treats.</p>
      </div>

      <form
        className="menu-search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Search coffee, cake, drinks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search menu"
        />

        <button type="submit">
          Search
        </button>

        <button
          type="button"
          className="clear-btn"
          onClick={() => setSearch("")}
        >
          Clear
        </button>
      </form>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <span className="menu-category">{item.category}</span>
            <h2>{item.name}</h2>
            <p className="menu-price">
              {item.price.toLocaleString()} RWF
            </p>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="no-results">
          No menu items found. Try another search.
        </p>
      )}
    </div>
  );
}

export default Menu;
