# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 📌 KeenKeeper – Friends Relationship Tracker

🚀 Project Overview

KeenKeeper is a simple and modern web application that helps users **manage and maintain meaningful relationships**. It allows users to track interactions, set communication goals, and monitor connection status with friends.

---

 ✨ Core Features

👥 1. Friends Dashboard

* View all friends in a **responsive card layout**
* Each card shows:

  * Profile picture
  * Name
  * Last interaction time (days ago)
  * Tag (e.g., Friend, Colleague)
  * Status (On Track / Almost Due / Overdue)
* Status is visually highlighted with different colors

---

 📊 2. Statistics Section

* Displays summary cards:

  * Total Friends
  * On Track
  * Need Attention
  * Monthly Interactions
* Fully responsive dashboard UI

---

🔍 3. User Details Page

* Click on any friend card to view detailed information
* Shows:

  * Profile info (name, email, bio)
  * Status with dynamic color
  * Relationship goal (e.g., contact every 30 days)
  * Days since last contact
  * Next due date

---

 ⚡ 4. Quick Actions (Interaction System)

Users can quickly log interactions:

* 📞 Call
* 💬 Text
* 🎥 Video Call

 Functionality:

* Clicking any action:

  * Saves activity to **localStorage**
  * Shows a **toast notification** (e.g., "📞 Call with Rahim")

---

 🕒 5. Timeline Page

* Displays all interaction history
* Each entry shows:

  * Action type (Call/Text/Video)
  * Friend’s name
  * Date & time 🔽 Filter Feature:

* Dropdown filter:

  * All
  * Call
  * Text
  * Video
* Dynamically filters timeline data

---

 🔔 6. Toast Notifications

* Uses **React Toastify**
* Shows real-time feedback when:

  * Call/Text/Video is clicked
* Includes icons and styled messages

---

 📱 7. Fully Responsive Design

* Works on:

  * Mobile 📱
  * Tablet 💻
  * Desktop 🖥️
* Uses Tailwind CSS & DaisyUI for clean UI

---

 🛠️ Technologies Used

* React.js
* React Router
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* LocalStorage (for data persistence)

---
 🔄 Data Handling

* User data is fetched from a local `data.json` file
* Interaction data is stored in **localStorage**
* No backend required (frontend-only project)

---

🎯 Project Goal

The main goal of this project is to:

* Help users stay connected with important people
* Prevent losing touch with friends
* Provide a simple and intuitive relationship management tool

---

 📌 Future Improvements

* Edit & update friend info
* Delete or archive users
* Backend integration (database)
* Authentication system
* Real-time updates without reload



