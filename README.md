# 🍽️ RecipeMate - Full Stack Recipe App

A modern and elegant recipe discovery app built with **React Native (Expo)** for the frontend and **Node.js + Express** for the backend. Discover, search, and save your favorite recipes with ease.

---

## 📱 Mobile App (Frontend)

The mobile app is built using:

- React Native (Expo)
- Expo Router
- Tailwind CSS (NativeWind)
- Clerk Authentication
- ShadCN Components
- Beautiful Animations + Gradient Overlays

---

## 🌐 Backend API (Express)

The backend is powered by:

- Node.js + Express
- RESTful API Architecture
- MongoDB / PostgreSQL (via Drizzle ORM or Prisma)
- Clerk Webhook Auth Integration
- Secure API for Favorites, Recipes, and Users

---

## 🧠 Features

### 👨‍🍳 Mobile App

- Browse featured recipes
- Search by name or ingredients
- Filter categories like chicken, lamb, pork, etc.
- View full recipe instructions and ingredients
- Save recipes to your favorites
- Clean, animated UI with beautiful gradients

### 🛠️ Backend API

- Fetch featured/random recipes
- Search recipes by keyword or ingredient
- Store and retrieve user favorites
- Transform API response for mobile consumption
- Secure endpoints

---

## 🌈 Screenshots

| Home | Search | Recipe Details | Favorites |
|------|--------|----------------|-----------|
| ![](./mobile/assets/screens/home.png) | ![](./mobile/assets/screens/search.png) | ![](./mobile/assets/screens/details.png) | ![](./mobile/assets/screens/favorites.png) |

---

## 🔐 Authentication

Clerk is used for user authentication in the mobile app. You can configure it via:

- `mobile/constants/clerkConfig.js`
- `backend/.env` with your Clerk secret

---

## ⚙️ API Endpoints Example

- `GET /recipes/featured` → Get featured recipe  
- `GET /recipes/search?q=pasta` → Search recipes  
- `POST /favorites/:userId` → Save favorite  
- `GET /favorites/:userId` → Get all favorites  

---

## ✨ Live Demo / Deployment

- 🟢 Mobile: [Expo.dev Link]  
- 🟢 Backend: [Render / Railway link]

---

## 👨‍💻 Author

**Soumojit Banerjee**  
B.Tech CSE @ Techno India University  
[GitHub](https://github.com/soumojitbanerjee) • [LinkedIn](https://linkedin.com/in/soumojitbanerjee)

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use and improve it for your own projects!

---

## 🤝 Contributions

Pull requests are welcome! Please feel free to submit ideas or improvements.
