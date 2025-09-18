📌 ChatNest

ChatNest is a modern real-time chat application built with the MERN (MongoDB, Express.js, React, Node.js) stack.
It features secure authentication, user profiles, real-time messaging, and media sharing with a responsive UI.

✨ Features

🔐 User Authentication – Signup, Login, Logout with JWT + Cookies

👤 User Profiles – Update profile picture with Cloudinary

💬 Real-time Messaging – Powered by Socket.IO

🖼️ Media Uploads – Upload and share images (Cloudinary storage)

🕒 Message Timestamps – Formatted with utilities

📜 Protected Routes – Middleware + JWT verification

📱 Responsive UI – Modern and clean design with Tailwind CSS

🛠️ Tech Stack
🎨 Frontend

⚛️ React.js

🌐 Axios (API requests)

🎨 TailwindCSS / CSS

⚙️ Backend

🟩 Node.js

🚏 Express.js

🍃 MongoDB + Mongoose

🔑 JWT (JSON Web Token) for authentication

🧂 bcrypt.js for password hashing

☁️ Cloudinary (media upload & storage)

⚡ Socket.IO (real-time events)

📂 Project Structure
ChatNest/
│── backend/        # Express + MongoDB (API, authentication, socket server)
│── frontend/       # React + Tailwind (UI)
│── README.md       # Documentation

⚡ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Sunny5130/ChatNest.git
cd ChatNest

2️⃣ Setup Backend
cd backend
npm install


Create a .env file in backend/ and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000


Run backend:

npm start

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Frontend → http://localhost:3000

Backend → http://localhost:5000

🚀 Deployment

Frontend: Vercel

Backend: Vercel

🌍 Live: chat-nestsaini.vercel.app

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.
