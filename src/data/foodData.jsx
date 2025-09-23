// src/data/foodData.js
export const foodCategories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burgers', icon: '🍔' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
  { id: 'salad', name: 'Salads', icon: '🥗' },
  { id: 'dessert', name: 'Desserts', icon: '🍰' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' }
];

export const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fresh tomato sauce, mozzarella cheese, fresh basil leaves, and olive oil on our signature dough.",
    ingredients: ["Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"],
    calories: 280,
    prepTime: "15-20 min",
    rating: 4.5,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    category: "burger",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, onions, and our special sauce.",
    ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Onions", "Special Sauce"],
    calories: 520,
    prepTime: "10-15 min",
    rating: 4.7,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: 3,
    name: "Chicken Alfredo Pasta",
    category: "pasta",
    price: 1099.99,
    image: "https://plus.unsplash.com/premium_photo-1671547329181-8b1925cab127?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Creamy alfredo sauce with grilled chicken breast over fresh fettuccine pasta.",
    ingredients: ["Fettuccine", "Chicken Breast", "Alfredo Sauce", "Parmesan", "Garlic"],
    calories: 680,
    prepTime: "20-25 min",
    rating: 4.3,
    isVegetarian: false,
    isPopular: false
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "salad",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400",
    description: "Crisp romaine lettuce with parmesan cheese, croutons, and classic caesar dressing.",
    ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing"],
    calories: 180,
    prepTime: "5-10 min",
    rating: 4.2,
    isVegetarian: true,
    isPopular: false
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    category: "dessert",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Vanilla Ice Cream"],
    calories: 420,
    prepTime: "15-20 min",
    rating: 4.8,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 6,
    name: "Fresh Orange Juice",
    category: "drinks",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400",
    description: "Freshly squeezed orange juice with no added sugar or preservatives.",
    ingredients: ["Fresh Oranges"],
    calories: 110,
    prepTime: "2-3 min",
    rating: 4.4,
    isVegetarian: true,
    isPopular: false
  }
];
